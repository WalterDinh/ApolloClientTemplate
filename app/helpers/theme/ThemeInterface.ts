export interface ITheme {
    color: {
        colorPrimary: string;
        colorPrimaryVariant: string;

        colorSecondary: string;
        colorSecondaryVariant: string;

        colorThird: string;
        colorThirdVariant: string;

        colorAccent1: string;
        colorAccent1Variant: string;
        colorAccent2: string;
        colorAccent2Variant: string;
        colorAccent3: string;

        backgroundColorPrimary: string;
        backgroundColorVariant: string;

        textColor: string;
        labelColor: string;
        textColorSecondary: string;

        buttonBackgroundColor: string;
        buttonBorderColor: string;

        colorSeparator: string;

        navigationBackgroundColor: string;
        navigationTintColor: string;

        iconColor: string;

        overlayColor: string;

        errorColor: string;

        disabledColor: string;

        pointBackgroundColor: string;
    };
    font: {
        Medium: string;
        Regular: string;
        SemiBold: string;
        Bold: string;
        ExtraBold: string;
        Light: string;
    };

    [key: string]: any;
}
