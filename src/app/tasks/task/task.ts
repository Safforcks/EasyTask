import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInput } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true}) task!: TaskInput;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id)
  }
}