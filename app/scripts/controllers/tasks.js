'use strict';

/**
 * @ngdoc function
 * @name focusApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the focusApp
 */
angular.module('focusApp')
  .controller('TasksCtrl', function ($scope, TaskList) {
    var taskList = new TaskList();

    $scope.layout = 'list';
    $scope.tasks = taskList.tasks;

    $scope.add = function (task) {
      taskList.add({
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
