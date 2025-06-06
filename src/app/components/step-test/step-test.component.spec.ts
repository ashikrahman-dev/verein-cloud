import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTestComponent } from './step-test.component';

describe('StepTestComponent', () => {
  let component: StepTestComponent;
  let fixture: ComponentFixture<StepTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
