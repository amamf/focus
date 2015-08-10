'use strict';

angular.module('focusApp')
  .factory('tasks', function () {
    var taskList = function(startAt) {
      var tasks = [];

      startAt = startAt || moment().hours(8).minutes(0);

      function add(task) {
        if(angular.isUndefined(task.duration)) {
          task.duration = 30;
        }

        task.startAt = startAt.clone();

        if(tasks.length > 0) {
          var lastTask = _.last(tasks);
          task.startAt = lastTask.startAt.clone().add(task.duration, 'm');
        }

        tasks.push(task);
      }

      function remove(task) {
        var index = tasks.indexOf(task);

        for(var i = index + 1; i < tasks.length; i++) {
          tasks[i].startAt.subtract(tasks[i - 1].duration, 'm');
        }

        _.remove(tasks, task);
      }

      return {
        add: add,
        remove: remove
      };
    };

    return taskList;
  });
