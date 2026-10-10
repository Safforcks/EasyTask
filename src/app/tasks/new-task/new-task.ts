import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  hasValidationError  = false;

  private tasksService = inject(TasksService)

  onSubmit() {
    const isFilled = !!(
      this.enterdTitle.trim() && 
      this.enterdSummary.trim() && 
      this.enterdDate
    );

    this.hasValidationError  = !isFilled;

    if (!isFilled) return;
    
    this.tasksService.addTask({
      title: this.enterdTitle,
      summary: this.enterdSummary,
      date: this.enterdDate,
    }, this.userId);

    this.close.emit();
  }

  onCancel() {
    this.hasValidationError  = false;
    this.close.emit();
  }
}
