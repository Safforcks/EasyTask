import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  imports: [FormsModule]
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>()
  enterdTitle = signal('');
  enterdSummary = signal('');
  enterdDate = signal('');

  onCancel() {
    this.cancel.emit()
  }
}
