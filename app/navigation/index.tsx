import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { AppStack } from './routes/app/AppStack';
import { AuthStack } from './routes/auth';
import { AppStackParamList } from './routes/routeParams';

const Stack = createSharedElementStackNavigator<AppStackParamList>();

export const RootStack = () => {
    const isLogin = true;
    return (
        <Stack.Navigator
            initialRouteName={'AuthStack'}
            screenOptions={{
                headerMode: 'screen',
                presentation: 'card',
                headerShown: false,
                animationTypeForReplace: 'push',
            }}
        >
            {isLogin ? (
                <Stack.Screen
                    name={'AppStack'}
                    component={AppStack}
                    options={{ headerShown: false }}
                />
            ) : (
                <Stack.Screen
                    name={'AuthStack'}
                    component={AuthStack}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>
    );
};

export const createAppRoot = () => {
    return () => <RootStack />;
};
