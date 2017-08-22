import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';


import appConfig from './config/app.config';
import appRun from './config/app.run';
import appConst from './config/app.constant';

import './home';
import './modal';
import './common';

let required = [
  'ui.bootstrap',
  'ui.router',
  'app.home',
  'app.modal',
  'app.common'
]

window.app = angular.module('app', required);

angular.module('app').constant('AppConstants', appConst);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);
angular.bootstrap(document, ['app'], {
  strictDi: true
});
