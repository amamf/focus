/* global _ */
/* global moment */
/* global angular */
'use strict';

angular.module('focusApp')
  .factory('TaskList', function () {
    var TaskList = function(startAt) {
      this.tasks = [];
      this.startAt = startAt || moment().hours(8).minutes(0);
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

    TaskList.prototype.remove = function(task) {
      var index = this.tasks.indexOf(task);

      for(var i = index + 1; i < this.tasks.length; i++) {
        this.tasks[i].startAt.subtract(this.tasks[i - 1].duration, 'm');
      }

      _.remove(this.tasks, task);
    };

    return TaskList;
  });
