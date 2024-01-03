import { Platform } from 'react-native';
import * as Colors from './Colors';
import { ITheme } from './ThemeInterface';

export const themeDefault: ITheme = {
    color: {
        colorPrimary: Colors.primary.brand,
        colorPrimaryVariant: Colors.primary.s600,

        colorSecondary: Colors.secondary.brand,
        colorSecondaryVariant: Colors.secondary.s600,

        colorThird: '#AFAFAF',
        colorThirdVariant: Colors.neutral.s800,

        colorAccent1: '#4F39A7',
        colorAccent1Variant: '#6750C3',
        colorAccent2: '#FD886F',
        colorAccent2Variant: '#FF9680',
        colorAccent3: '#00AEEF',

        backgroundColorPrimary: Colors.neutral.s100,
        backgroundColorVariant: Colors.neutral.white,

        textColor: Colors.neutral.black,
        textColorSecondary: Colors.neutral.white,
        labelColor: Colors.neutral.s300,

        colorSeparator: Colors.neutral.s150,

        buttonBackgroundColor: Colors.primary.brand,
        buttonBorderColor: Colors.transparent.clear,

        navigationBackgroundColor: Colors.neutral.white,
        navigationTintColor: Colors.primary.brand,

        iconColor: '#a8a8a8',

        overlayColor: Colors.neutral.s150,

        errorColor: Colors.danger.brand,

        disabledColor: Colors.neutral.s150,

        pointBackgroundColor: '#EEBC3F',
    },
    font: {
        Medium: Platform.OS === 'ios' ? 'TestSohne-Kraftig' : 'Sohne-Medium',
        Regular: Platform.OS === 'ios' ? 'TestSohne-Buch' : 'Sohne-Regular',
        SemiBold:
            Platform.OS === 'ios' ? 'TestSohne-Halbfett' : 'Sohne-SemiBold',
        Bold:
            Platform.OS === 'ios' ? 'TestSohne-Dreiviertelfett' : 'Sohne-Bold',
        ExtraBold:
            Platform.OS === 'ios' ? 'TestSohne-Extrafett' : 'Sohne-ExtraBold',
        Light: Platform.OS === 'ios' ? 'TestSohne-Leicht' : 'Sohne-Light',
    },
};
