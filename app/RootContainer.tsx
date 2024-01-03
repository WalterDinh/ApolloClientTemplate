import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import {
    NavigationContainer,
    NavigationContainerRef,
    NavigationState,
} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationService from '~helpers/NavigationService';
import AppManager from '~helpers/managers/AppManager';
import LoadingViewOnly from './components/loading/LoadingViewOnly';
import LoadingManager from '~helpers/LoadingManager';
import { AllRouteParamList } from './navigation/routeParams';
import { RootStack } from './navigation';

interface Props {}

interface State {}

class RootContainer extends Component<Props, State> {
    currentRouteName?: keyof AllRouteParamList;

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    onNavigationStateChange = (
        navigationState: NavigationState | undefined,
    ) => {
        if (navigationState) {
            const previousRouteName = this.currentRouteName;
            const currentRouteName =
                (NavigationService.topLevelNavigator?.getCurrentRoute()?.name ??
                    '') as keyof AllRouteParamList;
            this.currentRouteName = currentRouteName as keyof AllRouteParamList;

            if (currentRouteName && previousRouteName !== currentRouteName) {
                AppManager.currentRouteName.next(currentRouteName);
            }
        }
    };

    render() {
        return (
            <GestureHandlerRootView style={styles.container}>
                <NavigationContainer
                    ref={(ref: NavigationContainerRef<any>) =>
                        NavigationService.setTopLevelNavigator(ref)
                    }
                    onStateChange={this.onNavigationStateChange}
                >
                    <StatusBar
                        barStyle={Platform.select({
                            android: 'light-content',
                            ios: 'dark-content',
                        })}
                    />
                    <RootStack />
                    <LoadingViewOnly
                        ref={(ref: LoadingViewOnly) =>
                            LoadingManager.setLoadingRef(ref)
                        }
                    />
                </NavigationContainer>
            </GestureHandlerRootView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RootContainer;
