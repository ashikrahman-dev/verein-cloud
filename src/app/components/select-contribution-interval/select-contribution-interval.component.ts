import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select-contribution-interval',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  template: `
    <form class="font-rubik">
      <!-- <h4>native html select</h4> -->
      <mat-form-field class="w-100 bg-white font-rubik">
        <mat-label class="font-rubik d-flex gap-2 align-items-center">
          <img [src]="calendarIcon" alt="Calendar Icon" class="" /> Choose an
          option</mat-label
        >
        <mat-select class="font-rubik">
          <mat-option value="option1">One-time</mat-option>
          <mat-option value="option2">Monthly</mat-option>
          <mat-option value="option3">Quarterly</mat-option>
          <mat-option value="option4">Semi-Annually</mat-option>
          <mat-option value="option5">Annually</mat-option>
        </mat-select>
      </mat-form-field>
    </form>
  `,
  styles: `




          
  `,
})
export class SelectContributionIntervalComponent {
  calendarIcon = 'assets/images/calendar-edit.svg';
}
