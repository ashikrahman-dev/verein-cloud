import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-interval-date-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  template: `
    <mat-form-field class="w-100 bg-white font-rubik">
      <mat-label class="font-rubik d-flex gap-2 align-items-center">
        <img [src]="justifycenterIcon" alt="Calendar Icon" class="" />
        After the start of the interval
      </mat-label>
      <mat-select>
        <mat-option value="days1">1 Day</mat-option>
        <mat-option value="days2">2 Days</mat-option>
        <mat-option value="days3">3 Days</mat-option>
        <mat-option value="days4">4 Days</mat-option>
        <mat-option value="days5">5 Days</mat-option>
        <mat-option value="days6">6 Days</mat-option>
        <mat-option value="days7">7 Days</mat-option>
        <mat-option value="days8">8 Days</mat-option>
        <mat-option value="days9">9 Days</mat-option>
        <mat-option value="days10">10 Days</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: ``,
})
export class IntervalDateDropdownComponent {
  justifycenterIcon = 'assets/images/textalign-justifycenter.svg';
}
