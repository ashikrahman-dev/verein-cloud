import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationConfigurationVariableValueComponent } from './calculation-configuration-variable-value.component';

describe('CalculationConfigurationVariableValueComponent', () => {
  let component: CalculationConfigurationVariableValueComponent;
  let fixture: ComponentFixture<CalculationConfigurationVariableValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationConfigurationVariableValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationConfigurationVariableValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
