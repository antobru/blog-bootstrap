import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.scss']
})
export class UserSubscriptionComponent implements OnInit {

  public subscriptionCost?: number;

  constructor() { }

  ngOnInit(): void {
  }

  setUser(user: User) {
    this.subscriptionCost = this.getSubscriptionByRole(user.role);
  }

  getSubscriptionByRole(role: 'admin' | 'basic') {
    if (role == 'admin') {
      return 100;
    }
    return 50;
  }

}
