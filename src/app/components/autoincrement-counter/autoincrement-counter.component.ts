import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autoincrement-counter',
  templateUrl: './autoincrement-counter.component.html',
  styleUrls: ['./autoincrement-counter.component.scss']
})
export class AutoincrementCounterComponent implements OnInit {

  public counter: number = 0;

  private observable: Observable<number> = new Observable(subscriber => {
    setInterval(() => {
      let c = this.counter;
      c += 1;
      subscriber.next(c);
    }, 1000);
  });

  constructor() { }

  ngOnInit(): void {
    const subscription = this.observable.subscribe(counter => {
      this.counter = counter;
      if (counter > 10) {
        subscription.unsubscribe();
      }
    });
  }

}
