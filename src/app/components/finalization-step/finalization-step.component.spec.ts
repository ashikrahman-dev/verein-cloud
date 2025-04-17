import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizationStepComponent } from './finalization-step.component';

describe('FinalizationStepComponent', () => {
  let component: FinalizationStepComponent;
  let fixture: ComponentFixture<FinalizationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizationStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
