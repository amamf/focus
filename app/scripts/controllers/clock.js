'use strict';

/**
 * @ngdoc function
 * @name focusApp.controller:ClockCtrl
 * @description
 * # ClockCtrl
 * Controller of the focusApp
 */
angular.module('focusApp')
  .controller('ClockCtrl', function ($scope, tasks) {
    $scope.tasks = tasks.tasks;
  });
