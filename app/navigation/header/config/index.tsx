import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import TextPrimary from '~components/text/TextPrimary';
import { theme, Dimensions } from '~helpers/theme';
import { neutral } from '~helpers/theme/Colors';

export const createDefaultStackNavigationOptions = (
    _isShowBack: boolean = true,
): StackNavigationOptions => {
    const defaultNavigationOptions: StackNavigationOptions = {
        headerTitleStyle: styles.textHeader,
        headerTitle: ({ style, children }: any) =>
            children && typeof children === 'string' ? (
                <TextPrimary
                    style={{
                        ...style,
                        fontFamily: theme.font.Bold,
                        lineHeight: Dimensions.FontSize.extraHuge,
                    }}
                >
                    {children}
                </TextPrimary>
            ) : null,
        headerTitleAlign: 'center',
        headerBackTitleStyle: {
            color: theme.color.navigationTintColor,
            fontFamily: theme.font.Bold,
        },
        headerStyle: {
            backgroundColor: theme.color.navigationBackgroundColor,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
                width: 0,
            },
            elevation: 0,
            height: Platform.select({
                ios: Dimensions.IphoneXHelper.isIphoneX() ? 100 : 80,
            }),
        },
        headerStatusBarHeight: Platform.select({
            android: Dimensions.Spacing.large,
        }),
        headerRightContainerStyle: {
            paddingRight: Dimensions.Spacing.huge,
        },
        headerTintColor: theme.color.colorPrimary,
        headerTitleAllowFontScaling: false,
        headerBackTitleVisible: false,
        title: '',
        headerBackImage: ({ _tintColor }: any) => (
            <View
                style={{
                    paddingLeft: Platform.select({
                        ios: Dimensions.Spacing.large,
                        android: Dimensions.Spacing.large,
                    }),
                    paddingRight: 10,
                }}
            >
                {/* {isShowBack && (
          <ImageIconCircle
            source={Images.Icons.Back}
            style={{tintColor: tintColor}}
            resizeMode={'contain'}
          />
        )} */}
            </View>
        ),
        headerPressColor: 'transparent',
        headerMode: 'screen',
        presentation: 'card',
    };

    return defaultNavigationOptions;
};

export const createUnderlineHeaderStackNavigationOptions =
    (): StackNavigationOptions => {
        return {
            headerStyle: {
                ...(createDefaultStackNavigationOptions().headerStyle as Record<
                    string,
                    unknown
                >),
                borderBottomWidth: 1,
                borderBottomColor: '#E3E3E3',
                backgroundColor: 'transparent',
            },
        };
    };

export const createLeftTitleHeaderOptions = (
    onPressClose?: () => void,
    //   num?: number,
    //   lightIcon?: boolean,
): StackNavigationOptions => {
    return {
        headerStyle: {
            // @ts-ignore
            ...(createDefaultStackNavigationOptions().headerStyle as Record<
                string,
                unknown
            >),
        },
        headerBackImage: () => <View />,
        headerTitleAlign: 'left',
        headerLeft: () => <View />,
        headerTitleStyle: {
            color: neutral.s200,
            fontFamily: theme.font.Bold,
            textTransform: 'uppercase',
            fontSize: Dimensions.FontSize.extraLarge,
            lineHeight: Dimensions.FontSize.extraHuge,
        },
        headerRight: onPressClose
            ? () => (
                  <TouchableOpacity onPress={onPressClose}>
                      {/* <ImageIconCircle
              source={Images.Icons.Close}
              resizeMode={'contain'}
            /> */}
                  </TouchableOpacity>
              )
            : undefined,
    };
};

export const createRightActionHeaderOptions = (
    onPressRight?: () => void,
    rightText?: string,
    //   lightIcon?: boolean,
): StackNavigationOptions => {
    return {
        headerStyle: {
            // @ts-ignore
            ...(createDefaultStackNavigationOptions().headerStyle as Record<
                string,
                unknown
            >),
        },

        headerRight: () => (
            <TouchableOpacity onPress={onPressRight}>
                <TextPrimary
                    style={{
                        fontFamily: theme.font.Medium,
                        fontSize: Dimensions.FontSize.small,
                        color: theme.color.colorPrimary,
                    }}
                >
                    {rightText?.toLocaleUpperCase() || ''}
                </TextPrimary>
            </TouchableOpacity>
        ),
    };
};

// const ImageIconCircle = styled.Image`
//   width: 18;
//   height: 18;
// `;

const styles = StyleSheet.create({
    textHeader: {
        color: neutral.s200,
        fontFamily: theme.font.Bold,
        textTransform: 'uppercase',
        fontSize: Dimensions.FontSize.extraLarge,
        lineHeight: 18,
        paddingLeft: Dimensions.Spacing.extraHuge,
        textAlign: 'center',
    },
});
