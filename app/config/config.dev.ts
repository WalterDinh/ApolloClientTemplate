import Config from '~config//config';
import { ENV } from '~config//env';

export const DEBUG = new Config({
    environment: ENV.DEV,
    endPoint: 'https://countries.trevorblades.com/',
    universalLink: 'https://countries.trevorblades.com/',
});
