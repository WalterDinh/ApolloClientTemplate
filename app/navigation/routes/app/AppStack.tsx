import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createDefaultStackNavigationOptions } from '~navigation/header/config';
import { AllRouteParamList, AppStackParamList } from '../routeParams';
import { AppTab } from './AppTab';

const Stack = createSharedElementStackNavigator<AllRouteParamList>({
    name: 'app',
});

interface IProps {
    navigation: StackNavigationProp<AppStackParamList, 'AppStack'>;
}

export const AppStack = (_props: IProps) => {
    const defaultOptions = createDefaultStackNavigationOptions();

    return (
        <Stack.Navigator
            screenOptions={defaultOptions}
            initialRouteName={'AppTab'}
        >
            <Stack.Screen
                name="AppTab"
                component={AppTab}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
