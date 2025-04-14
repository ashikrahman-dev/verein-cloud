import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BeginningIntervalComponent } from '../beginning-interval/beginning-interval.component';

@Component({
  selector: 'app-step-four-due-date',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
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
}
