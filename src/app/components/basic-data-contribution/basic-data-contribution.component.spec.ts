import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataContributionComponent } from './basic-data-contribution.component';

describe('BasicDataContributionComponent', () => {
  let component: BasicDataContributionComponent;
  let fixture: ComponentFixture<BasicDataContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDataContributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDataContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
