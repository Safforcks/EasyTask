import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInput } from './task.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [Card],
})
export class Task {
  @Input({ required: true}) task!: TaskInput;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id)
  }
}