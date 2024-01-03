export enum CurrencyCode {
    Dollar = 'usd',
}

export const PageSize = {
    Default: 20,
};

export const TokenType = {
    Customer: 'Token.Customer',
    CustomerRefreshToken: 'Token.CustomerRefreshToken',
};

export const DateTimeFormat = {
    FullDateTime: 'DD/MM/YYYY hh:mm:ss',
    DateTimeAmPm: 'DD/MM/YYYY hh A',
    DateTime24h: 'DD/MM/YYYY HH:mm',
    Time: 'hh:mm:ss',
    FullDate: 'DD MMM YYYY',
    TimeHourMinPM: 'HH:mm A',
    FullDateDash: 'DD-MM-YYYY',
    APIFormat: 'YYYY-MM-DD HH:mm:ss',
    FullDateShortMonth: 'MMM DD, YYYY',
    APIDateFormat: 'YYYY-MM-DD',
};

export const PriceFormat = {
    Default: '0,0.00',
};

export const MIN_INTEREST_PICK = 3;
export const MAX_INTEREST_PICK = 3;

export const BUILD_NUMBER = 1;

export const PreferableSize = {
    brandIcon: {
        width: 210,
        height: 210,
    },
};

export const EventEmit = {
    RefreshNotification: 'RefreshNotification',
};
