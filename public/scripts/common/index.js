let commonModule = angular.module('app.common', []);

import communicationFact from './common.communication';
commonModule.factory('communication', communicationFact.communicationFunctions);

import dataFactory from './data.factory';
commonModule.factory('dataFactory', dataFactory.dataFactoryFunctions);

import confirmDirective from './confirm.directive';
commonModule.directive('confirmDirective', confirmDirective.directiveFactory);

export default commonModule;
