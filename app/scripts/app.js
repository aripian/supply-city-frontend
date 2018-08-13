'use strict';

/**
 * @ngdoc overview
 * @name supplyFrontApp
 * @description
 * # supplyFrontApp
 *
 * Main module of the application.
 */
angular
  .module('supplyFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tables', {
        templateUrl: 'views/tables.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$locationProvider', function($locationProvider) {

    $locationProvider.hashPrefix('');

  }]);
