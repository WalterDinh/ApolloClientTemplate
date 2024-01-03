import { NativeModules } from 'react-native';
const BuildConfigModule = NativeModules.RNBuildConfig;

type BuildEnv = 'stag' | 'prod' | 'dev';

class RNBuildConfig {
    buildEnv: BuildEnv = BuildConfigModule.RNBuildConfig;
}

export default new RNBuildConfig();
