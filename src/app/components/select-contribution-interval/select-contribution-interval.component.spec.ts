import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContributionIntervalComponent } from './select-contribution-interval.component';

describe('SelectContributionIntervalComponent', () => {
  let component: SelectContributionIntervalComponent;
  let fixture: ComponentFixture<SelectContributionIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectContributionIntervalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectContributionIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
