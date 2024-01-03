import Config from '~config//config';
import { ENV } from '~config//env';

export const PRODUCTION = new Config({
    environment: ENV.PRODUCTION,
    endPoint: 'https://countries.trevorblades.com/',
    universalLink: 'https://countries.trevorblades.com/',
});
