'use strict';

/**
 * @ngdoc function
 * @name focusApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the focusApp
 */
angular.module('focusApp')
  .controller('TasksCtrl', function($scope, tasks) {
    $scope.layout = 'list';
    $scope.tasks = tasks.tasks;

    $scope.add = function(task) {
      tasks.add({
        title: task
      });
      $scope.task = '';
    };

    $scope.remove = function(task) {
      tasks.remove(task);
    };

    $scope.setLayout = function(layout) {
      $scope.layout = layout;
    };
  });
