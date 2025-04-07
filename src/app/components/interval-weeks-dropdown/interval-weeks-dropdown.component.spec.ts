import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalWeeksDropdownComponent } from './interval-weeks-dropdown.component';

describe('IntervalWeeksDropdownComponent', () => {
  let component: IntervalWeeksDropdownComponent;
  let fixture: ComponentFixture<IntervalWeeksDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalWeeksDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalWeeksDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
