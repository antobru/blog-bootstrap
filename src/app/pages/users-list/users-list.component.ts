import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.findAll()
      .then(result => this.users = result || []);
  }

  removeUser(user: User) {
    if (user.id) {
      this.usersService.delete(user.id)
        .then(res => {
          alert("User deleted!");
          this.getUsers();
        });
    }
  }

}
