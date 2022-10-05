import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User = new User();
  @Output() save: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  saveFn() {
    this.save.emit(this.user);
  }

}
