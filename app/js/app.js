'use strict';

require('angular/angular');
require('angular-route/angular-route');

angular.module('zblApp', [
  'ngRoute'
  // 'zblApp.filters',
  // 'zblApp.services',
  // 'zblApp.directives',
  // 'zblApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {redirectTo: '/addQuery'});
  $routeProvider.when('/addQuery', {templateUrl: '/partials/add-query-partial.html', controller: 'AddQueryController'});
  $routeProvider.when('/manageQuery', {templateUrl: '/partials/manage-query-partial.html', controller: 'ManageQueryController'});
  $routeProvider.when('/manageAcct', {templateUrl: '/partials/manage-acct-partial.html', controller: 'ManageAcctController'});
  $routeProvider.otherwise({redirectTo: '/addQuery'});
}]);
