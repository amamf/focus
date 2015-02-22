'use strict';

/**
 * @ngdoc function
 * @name focusApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the focusApp
 */
angular.module('focusApp')
  .controller('TasksCtrl', function ($scope) {
    $scope.tasks = [];

    $scope.add = function (task) {
      $scope.tasks.push({
        title: task
      });
      $scope.task = '';
    };
  });
