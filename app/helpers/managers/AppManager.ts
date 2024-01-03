import { BehaviorSubject, Subject } from 'rxjs';
import { AllRouteParamList } from '~navigation/routeParams';

export type AppMode =
    | 'anonymous'
    | 'loggedIn'
    | 'verified'
    | 'notVerified'
    | 'unknown';
export type CloseStatus =
    | 'none'
    | 'open'
    | 'running'
    | 'completed'
    | 'cancelled';

class AppManager {
    appState = {
        credentialsReadyForAuth: false,
        credentialsReadyForUnauth: false,
    };

    appMode: BehaviorSubject<AppMode>;
    currentRouteName: BehaviorSubject<keyof AllRouteParamList | undefined>;
    closeAccountStatus: BehaviorSubject<CloseStatus>;
    chatroomParams: any;
    refreshTokenSuccess: Subject<Date>;

    constructor() {
        this.appMode = new BehaviorSubject<AppMode>('unknown');
        this.currentRouteName = new BehaviorSubject<
            keyof AllRouteParamList | undefined
        >(undefined);
        this.closeAccountStatus = new BehaviorSubject<CloseStatus>('none');
        this.refreshTokenSuccess = new Subject();
    }
}

export default new AppManager();
