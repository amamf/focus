import { Task } from './task.model';
import * as moment from 'moment';
import * as _ from 'lodash';

export class TaskList {
  tasks: Task[] = [];
  startAt: moment.Moment;

  constructor(startAt: moment.Moment) {
    this.startAt = startAt || moment().hours(8).minutes(0);
  }

  add(task: Task) {
    if (task.duration === undefined) {
      task.duration = 30;
    }

    task.startAt = this.startAt.clone();

    if (this.tasks.length > 0) {
      let lastTask = _.last(this.tasks);
      task.startAt = lastTask.startAt.clone().add(task.duration, 'm');
    }

    this.tasks.push(task);
  }

  remove(task: Task) {
    let index = this.tasks.indexOf(task);

    for (let i = index + 1; i < this.tasks.length; i++) {
      this.tasks[i].startAt.subtract(this.tasks[i - 1].duration, 'm');
    }

    _.remove(this.tasks, task);
  }
}
