import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationConfigurationComponent } from './calculation-configuration.component';

describe('CalculationConfigurationComponent', () => {
  let component: CalculationConfigurationComponent;
  let fixture: ComponentFixture<CalculationConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
