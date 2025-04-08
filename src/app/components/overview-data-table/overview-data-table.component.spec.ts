import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDataTableComponent } from './overview-data-table.component';

describe('OverviewDataTableComponent', () => {
  let component: OverviewDataTableComponent;
  let fixture: ComponentFixture<OverviewDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
