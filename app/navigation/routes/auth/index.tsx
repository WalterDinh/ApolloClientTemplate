import {
    createStackNavigator,
    StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import { createDefaultStackNavigationOptions } from '../../header/config';
import { AppStackParamList, AuthStackParamList } from '../routeParams';
import HomeScreen from '~module/home';

const Stack = createStackNavigator<AuthStackParamList>();

interface AuthStackProps {
    navigation: StackNavigationProp<AppStackParamList, 'AuthStack'>;
}

export const AuthStack = (_props: AuthStackProps) => {
    const defaultOptions = createDefaultStackNavigationOptions();

    return (
        <Stack.Navigator
            screenOptions={defaultOptions}
            initialRouteName={'LoginScreen'}
        >
            <Stack.Screen
                name="LoginScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
