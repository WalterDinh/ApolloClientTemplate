import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import { AppTabParamList } from '../routeParams';
import HomeScreen from '~module/home';

const Tab = createBottomTabNavigator<AppTabParamList>();
interface IProps {}

export const AppTab = (_props: IProps) => {
    return (
        <Tab.Navigator initialRouteName={'Home'}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};
