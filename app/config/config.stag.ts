import Config from '~config//config';
import { ENV } from '~config//env';

export const STAGING = new Config({
    environment: ENV.STAGING,
    endPoint: 'https://countries.trevorblades.com/',
    universalLink: 'https://countries.trevorblades.com/',
});
