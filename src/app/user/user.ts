import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { UserInput } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) user!: UserInput;
  @Output() select = new EventEmitter<string>();

  // id = input.required<string>;
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // })

  get imagemPath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
