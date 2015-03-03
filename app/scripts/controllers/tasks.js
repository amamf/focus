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
    $scope.layout = 'list';
    $scope.tasks = [];

    $scope.add = function (task) {
      $scope.tasks.push({
        title: task
      });
      $scope.task = '';
    };

    $scope.remove = function(task) {
      _.remove($scope.tasks, task);
    };

    $scope.setLayout = function (layout) {
      $scope.layout = layout;
    };
  });
