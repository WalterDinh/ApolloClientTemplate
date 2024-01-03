import React, { Component } from 'react';
import { DeviceEventEmitter, EmitterSubscription, LogBox } from 'react-native';
import { configureLocalization } from '~localization/index';
import RootContainer from './RootContainer';
import AppManager from '~helpers/managers/AppManager';
import { ApolloProvider } from '@apollo/client';
import { client } from '~apollo/client';

interface Props {}

interface State {}

class App extends Component<Props, State> {
    subscription?: EmitterSubscription;
    constructor(props: Props) {
        super(props);

        // Ignore log notification by message:
        LogBox.ignoreAllLogs();
        configureLocalization('en');

        this.subscription = DeviceEventEmitter.addListener(
            'credentialsReadyForAuth',
            () => {
                AppManager.appState.credentialsReadyForAuth = true;
            },
        );

        this.subscription = DeviceEventEmitter.addListener(
            'credentialsReadyForUnauth',
            () => {
                AppManager.appState.credentialsReadyForUnauth = true;
            },
        );

        this.subscription = DeviceEventEmitter.addListener(
            'credentialsWhenLogout',
            () => {
                if (AppManager.appState.credentialsReadyForAuth) {
                    AppManager.appState.credentialsReadyForAuth = false;
                }
                if (!AppManager.appState.credentialsReadyForUnauth) {
                    AppManager.appState.credentialsReadyForUnauth = true;
                }
            },
        );
    }
    componentWillUnmount() {
        this.subscription?.remove();
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <RootContainer />
            </ApolloProvider>
        );
    }
}

export default App;
