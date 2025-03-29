import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalDueDataStepOneComponent } from './interval-due-data-step-one.component';

describe('IntervalDueDataStepOneComponent', () => {
  let component: IntervalDueDataStepOneComponent;
  let fixture: ComponentFixture<IntervalDueDataStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalDueDataStepOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalDueDataStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
