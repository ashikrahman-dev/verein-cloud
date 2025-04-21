import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeFieldComponent } from './free-field.component';

describe('FreeFieldComponent', () => {
  let component: FreeFieldComponent;
  let fixture: ComponentFixture<FreeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
