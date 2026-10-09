import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { UserInput } from './user.model';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Card],
})
export class User {
  @Input({required: true}) user!: UserInput;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagemPath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
