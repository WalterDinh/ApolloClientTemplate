import { getConfig } from '~config/index';

import { Linking } from 'react-native';

export default class LinkingHelper {
    static openUrl = (url: string) => {
        return new Promise((resolve, reject) => {
            let _url = url;
            if (!url.startsWith('http')) {
                _url = `https://${url}`;
            }
            Linking.openURL(_url).then(resolve).catch(reject);
        });
    };
    static buildOpenWebPageWithParams = (params: string) => {
        return getConfig().universalLink + `${params}`;
    };

    static phoneCall = (phoneNumber: string) => {
        Linking.openURL(`tel://${phoneNumber}`);
    };

    static openWebPage = (params: string) => {
        const uri = LinkingHelper.buildOpenWebPageWithParams(params);
        return LinkingHelper.openUrl(uri);
    };
}
