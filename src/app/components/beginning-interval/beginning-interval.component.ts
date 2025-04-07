import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IntervalDateDropdownComponent } from '../interval-date-dropdown/interval-date-dropdown.component';
import { IntervalWeeksDropdownComponent } from '../interval-weeks-dropdown/interval-weeks-dropdown.component';

@Component({
  selector: 'app-beginning-interval',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    IntervalDateDropdownComponent,
    IntervalWeeksDropdownComponent,
  ],
  template: `
    <div>
      <h6 class="due-date pt-3">Relative to the beginning of the interval</h6>
      <div class="d-flex gap-3 align-items-center">
        <mat-form-field class="w-100 bg-white font-rubik">
          <mat-label class="font-rubik d-flex gap-2 align-items-center">
            <img [src]="calendarIcon" alt="Calendar Icon" class="" /> Choose an
            option</mat-label
          >
          <mat-select
            [(ngModel)]="selectedValue"
            (selectionChange)="onSelectionChange()"
          >
            <mat-option value="days">Days</mat-option>
            <mat-option value="weeks">Weeks</mat-option>
            <mat-option value="months">Months</mat-option>
            <mat-option value="quarters">Quarters</mat-option>
            <mat-option value="halfYears">Half-years</mat-option>
            <mat-option value="years">Years</mat-option>
          </mat-select>
        </mat-form-field>

        <div class="w-100">
          <div
            class="change-interval-time w-100 "
            *ngIf="selectedValue === 'days'"
          >
            <app-interval-date-dropdown></app-interval-date-dropdown>
          </div>
          <div
            class="change-interval-time w-100 "
            *ngIf="selectedValue === 'weeks'"
          >
            <app-interval-weeks-dropdown></app-interval-weeks-dropdown>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .change-interval-time {
      margin-top: 16px;
    }
  `,
})
export class BeginningIntervalComponent {
  calendarIcon = 'assets/images/calendar-edit.svg';

  selectedValue: string | null = null;

  onSelectionChange() {
    console.log('Selected interval:', this.selectedValue);
  }
}
