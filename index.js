/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import login from './login';
import onpress from './onpress_popup';
import toggleText from './state_toggleText';
import nativebase from './nativeBase_btnWithIcon';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => toggleText);
