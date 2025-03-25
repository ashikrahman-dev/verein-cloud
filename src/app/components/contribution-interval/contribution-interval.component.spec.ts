import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionIntervalComponent } from './contribution-interval.component';

describe('ContributionIntervalComponent', () => {
  let component: ContributionIntervalComponent;
  let fixture: ComponentFixture<ContributionIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributionIntervalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
