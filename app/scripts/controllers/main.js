'use strict';

/**
 * @ngdoc function
 * @name focusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the focusApp
 */
angular.module('focusApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
