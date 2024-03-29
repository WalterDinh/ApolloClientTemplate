import i18n from 'i18next';
import { getI18n, initReactI18next } from 'react-i18next';
import en from '~localization/resources/en';

export const configureLocalization = (locale: string, fallback = 'en') => {
    return i18n.use(initReactI18next).init({
        compatibilityJSON: 'v3',
        lng: locale,
        fallbackLng: fallback,

        resources: {
            en: {
                translation: en,
            },
        },

        debug: false,

        cache: {
            enabled: true,
        },

        interpolation: {
            escapeValue: false, // not needed for react as it does escape per default to prevent xss!
        },
    });
};

export const getString = (key: keyof typeof en, params?: any) => {
    if (getI18n()) {
        return getI18n().t(key, params);
    }
    return '';
};

export const LANGUAGES = {
    ENGLISH: 'en',
};

export const changeLanguage = (language: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (language) {
            let validLanguage = false;
            for (const key in LANGUAGES) {
                // @ts-ignore
                const value = LANGUAGES[key];
                if (language === value) {
                    validLanguage = true;
                    break;
                }
            }
            if (validLanguage) {
                i18n.changeLanguage(language)
                    .then(() => {
                        resolve('success');
                    })
                    .catch((error) => {
                        reject(error.toString());
                    });
            } else {
                reject('No valid language!');
            }
        } else {
            reject('');
        }
    });
};
