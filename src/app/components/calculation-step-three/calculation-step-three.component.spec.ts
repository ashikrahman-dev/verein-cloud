import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationStepThreeComponent } from './calculation-step-three.component';

describe('CalculationStepThreeComponent', () => {
  let component: CalculationStepThreeComponent;
  let fixture: ComponentFixture<CalculationStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationStepThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
