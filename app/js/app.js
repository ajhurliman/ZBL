'use strict';

require('angular/angular');
require('angular-route/angular-route');
require('ng-csv');

var services = angular.module('services', []);
var controllers = angular.module('controllers', ['services', 'ngCsv']);
var directives = angular.module('directives', []);

(function() {
  var zblApp = angular.module('zblApp', [
    'ngRoute', 'services', 'controllers', 'directives', 'ngSanitize'
  ]);

  require('./services')(services);
  require('./controllers')(controllers);

  zblApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {redirectTo: '/addQuery'});
    $routeProvider.when('/addQuery', {templateUrl: '/partials/add-query-partial.html', controller: 'AddQueryController'});
    $routeProvider.when('/manageQuery', {templateUrl: '/partials/manage-query-partial.html', controller: 'ManageQueryController'});
    $routeProvider.when('/manageAcct', {templateUrl: '/partials/manage-acct-partial.html', controller: 'ManageAcctController'});
    $routeProvider.when('/preview', {templateUrl: '/partials/preview-partial.html', controller: 'PreviewController'});
    $routeProvider.otherwise({redirectTo: '/addQuery'});
  }]);

})();

