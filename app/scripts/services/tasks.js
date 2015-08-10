'use strict';

/**
 * @ngdoc service
 * @name focusApp.tasks
 * @description
 * # tasks
 * Factory in the focusApp.
 */
angular.module('focusApp')
  .factory('tasks', function (TaskList) {
    return new TaskList();
  });
