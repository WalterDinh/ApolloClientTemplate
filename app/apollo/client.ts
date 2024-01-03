import {
    ApolloClient,
    InMemoryCache,
    fromPromise,
    HttpLink,
    from,
    Observable,
    split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import { getConfig } from '~config/index';
import { StorageGatewayFactory } from '~helpers/storage';
// import possibleTypes from './possibleTypes.json';
import { TokenType } from '~helpers/constants';

const getNewToken = async () => {
    const storageClient = StorageGatewayFactory.createWithSecureClient();
    const refreshToken = await storageClient.doGet(
        TokenType.CustomerRefreshToken,
    );
    if (!refreshToken) {
        return '';
    }
    try {
        // get new token
        // const res = await client.mutate<RefreshTokenMutationResponse, RefreshTokenMutationVariables>({
        //   mutation: RefreshTokenDocument,
        //   variables: {
        //     refreshToken: refreshToken,
        //   },
        // });

        // if (res.data) {
        //   await saveToken({
        //     accessToken: res.data?.refreshToken.accessToken || '',
        //     refreshToken: res.data?.refreshToken?.refreshToken || '',
        //   });
        //   return res.data?.refreshToken?.accessToken;
        // }
        return '';
        // eslint-disable-next-line no-unreachable
    } catch (err) {
        await storageClient.doDelete(TokenType.Customer);
        return '';
    }
};

let isRefreshing = false;
let pendingRequests: Function[] = [];

const resolvePendingRequests = () => {
    pendingRequests.map((callback) => callback());
    pendingRequests = [];
};

const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors) {
            const { extensions } = graphQLErrors[0];

            switch (extensions?.code) {
                case 'UNAUTHENTICATED':
                    // error code is set to UNAUTHENTICATED
                    // when AuthenticationError thrown in resolver
                    let forward$: Observable<any>;

                    if (!isRefreshing) {
                        isRefreshing = true;
                        forward$ = fromPromise(
                            getNewToken()
                                .then((accessToken) => {
                                    const oldHeaders =
                                        operation.getContext().headers;
                                    operation.setContext(() => {
                                        return {
                                            headers: {
                                                ...oldHeaders,
                                                authorization: accessToken
                                                    ? `Bearer ${accessToken}`
                                                    : '',
                                            },
                                        };
                                    });
                                    // Store the new tokens for your auth link
                                    resolvePendingRequests();
                                    return accessToken;
                                })
                                .catch(() => {
                                    pendingRequests = [];
                                    // Handle token refresh errors e.g clear stored tokens, redirect to login, ...
                                })
                                .finally(() => {
                                    isRefreshing = false;
                                }),
                        );
                    } else {
                        // Will only emit once the Promise is resolved
                        forward$ = fromPromise(
                            new Promise((resolve) => {
                                // @ts-ignore
                                pendingRequests.push(() => resolve());
                            }),
                        );
                    }

                    return forward$.flatMap(() => forward(operation));
            }
        }
        if (networkError) {
            console.log(`[Network error]: ${networkError}`);
            // if you would also like to retry automatically on
            // network errors, we recommend that you use
            // apollo-link-retry
        }
    },
);

const httpLink = new HttpLink({
    uri: getConfig().endPoint,
    includeExtensions: true,
});

const authMiddleware = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await StorageGatewayFactory.createWithSecureClient().doGet(
        TokenType.Customer,
    );

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});
// setup websocket link
export const wsLink = new WebSocketLink({
    uri: getConfig().universalLink,
    options: {
        reconnect: true,
        reconnectionAttempts: 2000,
        connectionParams: async () => {
            const token =
                await StorageGatewayFactory.createWithSecureClient().doGet(
                    TokenType.Customer,
                );
            return {
                Authorization: token ? `Bearer ${token}` : null,
            };
        },
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    from([errorLink, authMiddleware, httpLink]),
);

// setup your client
export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    name: 'mobile',
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-first',
        },
    },
});
