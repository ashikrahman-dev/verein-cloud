import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTermsCalculationComponent } from './payment-terms-calculation.component';

describe('PaymentTermsCalculationComponent', () => {
  let component: PaymentTermsCalculationComponent;
  let fixture: ComponentFixture<PaymentTermsCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentTermsCalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTermsCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
