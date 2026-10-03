import { Component, Input } from '@angular/core';
import { TaskInput } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true}) task!: TaskInput;
}