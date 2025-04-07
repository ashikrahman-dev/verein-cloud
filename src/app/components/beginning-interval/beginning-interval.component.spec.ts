import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginningIntervalComponent } from './beginning-interval.component';

describe('BeginningIntervalComponent', () => {
  let component: BeginningIntervalComponent;
  let fixture: ComponentFixture<BeginningIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeginningIntervalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeginningIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
