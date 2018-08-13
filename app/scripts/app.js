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
	  .when('/users', {
		templateUrl: 'views/users.html',
		controller: 'usersCtrl',
		controllerAs: 'users'
	  })
	  .when('/roles', {
		templateUrl: 'views/roles.html',
		controller: 'rolesCtrl',
		controllerAs: 'roles'
	  })
	  .when('/industry', {
		templateUrl: 'views/industry.html',
		controller: 'industrytCtrl',
		controllerAs: 'industry'
	  })
	  .when('/news', {
		templateUrl: 'views/news.html',
		controller: 'newstCtrl',
		controllerAs: 'news'
	  })
	  .when('/forms', {
		templateUrl: 'views/forms.html',
		controller: 'AboutCtrl',
		controllerAs: 'forms'
	  })
	  .otherwise({
		redirectTo: '/'
	  });
  })
  .config(['$locationProvider', function($locationProvider) {

	$locationProvider.hashPrefix('');

  }]);
