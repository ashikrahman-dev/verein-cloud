import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestStepperComponent } from './new-test-stepper.component';

describe('NewTestStepperComponent', () => {
  let component: NewTestStepperComponent;
  let fixture: ComponentFixture<NewTestStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTestStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTestStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
