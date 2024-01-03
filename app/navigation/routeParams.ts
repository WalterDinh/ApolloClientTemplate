// authentication
export type AuthStackParamList = {
    ForgotPasswordStack: undefined;
    LoginScreen: undefined;
    SignUpScreen: undefined;
};

// main app

export type AppTabParamList = {
    Home: undefined;
    Contract: undefined;
    LoanAmount: undefined;
    Asset: undefined;
    Setting: undefined;
};

export type AppStackParamList = {
    AppTab: undefined;
    AuthStack: undefined;
    AppStack: undefined;
} & AppTabParamList;

export type HomeStackParamList = {
    HomeScreen: undefined;
} & AppStackParamList;

export type AllRouteParamList = AppStackParamList & AuthStackParamList;
