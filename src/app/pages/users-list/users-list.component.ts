import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  // public users: User[] = [];

  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public users$ = this.users.asObservable();

  constructor(private usersService: UsersService) {
  }

  async ngOnInit() {
    await this.getUsers();
  }

  async getUsers() {

    // this.usersService.findAll$().subscribe(res => {
    //   this.users = res;
    // })

    // this.users = await this.usersService.findAll();

    this.usersService.findAll$().subscribe(results => {
      this.users.next(results);
    });
  }

  async removeUser(user: User) {
    if (user.id) {
      await this.usersService.delete(user.id);
      alert("User deleted!");
      await this.getUsers();
    }
  }

}
