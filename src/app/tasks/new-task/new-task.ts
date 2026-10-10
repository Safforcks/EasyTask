import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  imports: [FormsModule]
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>()
  enterdTitle = '';
  enterdSummary = '';
  enterdDate = '';

  private tasksService = inject(TasksService)

  onSubmit() {
    this.tasksService.addTask({
      title: this.enterdTitle,
      summary: this.enterdSummary,
      date: this.enterdDate,
    }, this.userId);

    this.close.emit();
  }
}
