/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import dayjs from 'dayjs';
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

AppRegistry.registerComponent(appName, () => App);
