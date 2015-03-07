'use strict';

angular.module('focusApp')
  .factory('TaskList', function () {
    var TaskList = function(startAt) {
      this.tasks = [];
      this.startAt = startAt || moment().hours(8);
    };

    TaskList.prototype.add = function(task) {
      if(angular.isUndefined(task.duration)) {
        task.duration = 30;
      }

      task.startAt = this.startAt.clone();

      if(this.tasks.length > 0) {
        var lastTask = _.last(this.tasks);
        task.startAt = lastTask.startAt.clone().add(task.duration, 'm');
      }

      this.tasks.push(task);
    };

    return TaskList;
  });
