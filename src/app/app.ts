import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';

import { DUMMY_USERS } from './user/dummy-users';


@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aprender-angular');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
