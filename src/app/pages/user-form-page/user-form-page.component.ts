import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.scss']
})
export class UserFormPageComponent implements OnInit {

  public user: User = new User();

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    if (userId) {
      this.usersService.findById(userId)
        .then(user => {
          this.user = user;
        });
    }
  }

  saveUser(user: User) {

    if (user.id != undefined) {
      this.usersService.update(user.id, user)
        .then(res => {
          alert("User updated!");
        }).catch(err => {
          alert("Cannot update user!");
        });
      return;
    }

    this.usersService.create(user)
      .then(res => {
        alert("User saved!");
      }).catch(err => {
        alert("Cannot save user!");
      });
  }

}
