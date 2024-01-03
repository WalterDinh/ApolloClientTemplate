import Config from '~config//config';
import { DEBUG } from '~config/config.dev';
import { PRODUCTION } from '~config/config.prod';
import { STAGING } from '~config/config.stag';

import RNBuildConfig from '~config//RNBuildConfig';

const buildEnv = RNBuildConfig.buildEnv;

console.info('Build env: ', RNBuildConfig);

const initConfig = () => {
    switch (buildEnv) {
        case 'dev':
            return DEBUG;
        case 'stag':
            return STAGING;
        case 'prod':
            return PRODUCTION;

        default:
            return PRODUCTION;
    }
};

let configs = initConfig(); // Default fallback to Prod

export const getConfig = (): Config => {
    if (!configs) {
        // Backward compatible for old version with different init config logic
        configs = initConfig();
    }
    return configs;
};
