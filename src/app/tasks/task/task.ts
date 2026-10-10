import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TaskInput } from './task.model';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [Card, DatePipe],
})
export class Task {
  @Input({ required: true}) task!: TaskInput;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}