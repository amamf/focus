'use strict';

/**
 * @ngdoc overview
 * @name focusApp
 * @description
 * # focusApp
 *
 * Main module of the application.
 */
angular
  .module('focusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.keypress'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
