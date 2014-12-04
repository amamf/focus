'use strict';

/**
 * @ngdoc overview
 * @name focusSourceApp
 * @description
 * # focusSourceApp
 *
 * Main module of the application.
 */
angular
  .module('focusSourceApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

  });
