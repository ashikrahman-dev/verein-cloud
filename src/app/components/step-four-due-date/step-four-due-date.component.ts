import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

// Datepicker imports
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatIconModule } from '@angular/material/icon';
import { BeginningIntervalComponent } from '../beginning-interval/beginning-interval.component';

@Component({
  selector: 'app-step-four-due-date',
  standalone: true,
  // providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    BeginningIntervalComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h6 class="due-date">Due Date</h6>
      <mat-form-field class="w-100 bg-white font-rubik">
        <mat-label class="font-rubik d-flex gap-2 align-items-center">
          <img [src]="numberIcon" alt="Calendar Icon" class="" />
          {{ selectedValue || 'None' }}
        </mat-label>
        <mat-select
          class="font-rubik"
          [(ngModel)]="selectedValue"
          (selectionChange)="onSelectionChange()"
        >
          <mat-option value="option1">
            No due date – Due on the first day of the interval
          </mat-option>
          <mat-option value="option2">
            Relative to start - Example: "5 days before or after the interval
            starts"
          </mat-option>
          <mat-option value="option3">
            Relative to end - Example: "5 days before or after the interval
            ends"
          </mat-option>
          <mat-option value="option4">
            Fixed date – Choose a specific date
          </mat-option>
        </mat-select>
      </mat-form-field>

      <!-- Conditional show hide content -->
      <div class="conditional-content" *ngIf="selectedValue === 'option2'">
        <app-beginning-interval></app-beginning-interval>
      </div>
      <div class="conditional-content" *ngIf="selectedValue === 'option4'">
        <div class="selected-date-wrap">
          <h6 class="fs-14 selected-date">Select Date</h6>
          <mat-form-field class="example-full-width w-100 font-rubik">
            <mat-label class="font-rubik f-14">DD/MM</mat-label>
            <input matInput [matDatepicker]="picker" />
            <mat-datepicker-toggle
              matIconPrefix
              [for]="picker"
              class="calendar-datepicker-icon"
            >
              <mat-icon matDatepickerToggleIcon
                ><img [src]="calendarDateIcon" alt="Icon" />
              </mat-icon>
            </mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
          </mat-form-field>
          <!-- Additional predefined date configuration options would go here -->
        </div>
      </div>
    </div>
  `,
  styles: `
    .due-date {
      margin-bottom: 8px;
      font-weight: 500;
    }
    
    .conditional-content {
      margin-top: 16px;
    }
  `,
})
export class StepFourDueDateComponent {
  numberIcon = 'assets/images/due-date-icon.svg';
  calendarDateIcon = 'assets/images/calendar-edit.svg';
  selectedValue: string | null = null;

  onSelectionChange() {
    console.log('Selected option:', this.selectedValue);
  }

  private readonly _formBuilder = inject(FormBuilder);

  // Initialize form controls
  readonly toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  // Create a FormControl for radio button group
  selectedIntervalControl = this._formBuilder.control('start');

  // Method called when radio selection changes
  onIntervalChange() {
    // No additional code needed here as we're using the direct value in the template
    // You could add additional logic here if needed
  }
}
