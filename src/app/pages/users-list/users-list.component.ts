import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public users$ = this.users.asObservable();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.findAll$().subscribe(users => {
      this.users.next(users);
    });
  }

}
