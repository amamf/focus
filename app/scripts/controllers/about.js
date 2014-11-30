'use strict';

/**
 * @ngdoc function
 * @name focusSourceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the focusSourceApp
 */
angular.module('focusSourceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
