import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  imports: [FormsModule]
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>();
  enterdTitle = '';
  enterdSummary = '';
  enterdDate = '';

  onCancel() {
    this.cancel.emit()
  }

  onSubmit() {
    this.add.emit({
      title: this.enterdTitle,
      summary: this.enterdSummary,
      date: this.enterdDate,
    })
  }
}
