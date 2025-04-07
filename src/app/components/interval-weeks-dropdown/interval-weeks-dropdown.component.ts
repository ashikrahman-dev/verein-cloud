import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-interval-weeks-dropdown',
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
        <mat-option value="week1">1 Week</mat-option>
        <mat-option value="weeks2">2 Weeks</mat-option>
        <mat-option value="weeks3">3 Weeks</mat-option>
        <mat-option value="weeks4">4 Weeks</mat-option>
        <mat-option value="weeks5">5 Weeks</mat-option>
        <mat-option value="weeks6">6 Weeks</mat-option>
        <mat-option value="weeks7">7 Weeks</mat-option>
        <mat-option value="weeks8">8 Weeks</mat-option>
        <mat-option value="weeks9">9 Weeks</mat-option>
        <mat-option value="weeks10">10 Weeks</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: ``,
})
export class IntervalWeeksDropdownComponent {
  justifycenterIcon = 'assets/images/textalign-justifycenter.svg';
}
