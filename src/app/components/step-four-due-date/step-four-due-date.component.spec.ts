import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFourDueDateComponent } from './step-four-due-date.component';

describe('StepFourDueDateComponent', () => {
  let component: StepFourDueDateComponent;
  let fixture: ComponentFixture<StepFourDueDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepFourDueDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepFourDueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
