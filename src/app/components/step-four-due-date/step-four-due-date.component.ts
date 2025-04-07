import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-step-four-due-date',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  template: `
    <div>
      <mat-form-field class="w-100 bg-white font-rubik">
        <mat-label class="font-rubik d-flex gap-2 align-items-center">
          <img [src]="numberIcon" alt="Calendar Icon" class="" /> None
        </mat-label>
        <mat-select class="font-rubik">
          <mat-option value="option1">
            No due date – Due on the first day of the interval
          </mat-option>
          <mat-option value="option2">
            Relative to start - Example: "5 days before or after the interval
            starts”
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
    </div>
  `,
  styles: ``,
})
export class StepFourDueDateComponent {
  numberIcon = 'assets/images/due-date-icon.svg';
}
