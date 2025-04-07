import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalDateDropdownComponent } from './interval-date-dropdown.component';

describe('IntervalDateDropdownComponent', () => {
  let component: IntervalDateDropdownComponent;
  let fixture: ComponentFixture<IntervalDateDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalDateDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalDateDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
