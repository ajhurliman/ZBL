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
  $routeProvider.when('/', {templateUrl: 'partials/landing-page-partial.html', controller: 'LandingPageCtrl'});
  $routeProvider.when('/addQuery', {templateUrl: '/partials/add-query-partial.html', controller: 'AddQueryCtrl'});
  $routeProvider.when('/manageQuery', {templateUrl: '/partials/manage-query-partial.html', controller: 'ManageQueryCtrl'});
  $routeProvider.when('/manageAcct', {templateUrl: '/partials/manage-acct-partial.html', controller: 'ManageAcctCtrl'});
  $routeProvider.otherwise({redirectTo: '/addQuery'});
}]);
