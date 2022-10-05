import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoincrementCounterComponent } from './autoincrement-counter.component';

describe('AutoincrementCounterComponent', () => {
  let component: AutoincrementCounterComponent;
  let fixture: ComponentFixture<AutoincrementCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoincrementCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoincrementCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
