import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h6 class="due-date">Due Date</h6>
      <mat-form-field class="w-100 bg-white font-rubik due-date-select-field">
        <mat-label class="font-rubik d-flex gap-2 align-items-center">
          <img [src]="numberIcon" alt="Calendar Icon" class="" />
          {{ selectedValue || 'None' }}
        </mat-label>
        <mat-select
          class="font-rubik"
          [(ngModel)]="selectedValue"
          (selectionChange)="onSelectionChange()"
        >
          <mat-option value="no-due-date">
            No due date – Due on the first day of the interval
          </mat-option>
          <mat-option value="relative-to-start">
            Relative to start - Example: "5 days before or after the interval
            starts"
          </mat-option>
          <mat-option value="relative-to-end">
            Relative to end - Example: "5 days before or after the interval
            ends"
          </mat-option>
          <mat-option value="fixed-date">
            Fixed date – Choose a specific date
          </mat-option>
        </mat-select>
      </mat-form-field>

      <!-- Conditional show hide content -->
      <!-- Condition for  relative to start & end -->
      <div class="d-flex gap-3">
        <div
          class="conditional-content w-100"
          *ngIf="
            selectedValue === 'relative-to-start' ||
            selectedValue === 'relative-to-end'
          "
        >
          <!-- Due Date Anzahl -->
          <div>
            <p class="form-label">Anzahl</p>
            <input
              [(ngModel)]="dueDateAnzahl"
              placeholder="123"
              class="form-input-field font-rubik remove-icon-cls"
              maxlength="3"
              (keydown)="validateDueDateAnzahl($event)"
            />
          </div>
        </div>
        <div
          class="conditional-content w-100"
          *ngIf="
            selectedValue === 'relative-to-start' ||
            selectedValue === 'relative-to-end'
          "
        >
          <p class="form-label">Anzahl</p>
          <mat-form-field class="w-100 bg-white font-rubik">
            <mat-label class="font-rubik d-flex gap-2 align-items-center">
              <img [src]="calendarIcon" alt="Calendar Icon" class="" /> Choose
              an option</mat-label
            >
            <mat-select
              [(ngModel)]="selectedAnzahlInterval"
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
        </div>

        <div
          class="conditional-content w-100"
          *ngIf="
            selectedValue === 'relative-to-start' ||
            selectedValue === 'relative-to-end'
          "
        >
          <p class="form-label">Interval</p>
          <mat-form-field class="w-100 bg-white font-rubik">
            <mat-label class="font-rubik d-flex gap-2 align-items-center">
              <img [src]="calendarIcon" alt="Calendar Icon" class="" /> Choose
              an option</mat-label
            >
            <mat-select
              [(ngModel)]="selectedInterval"
              (selectionChange)="onSelectionChange()"
            >
              <mat-option value="before-the-start-current-interval"
                >Before the start of the current interval</mat-option
              >
              <mat-option value="after-the-start-current-interval"
                >After the start of the current interval</mat-option
              >
            </mat-select>
          </mat-form-field>
        </div>
      </div>
      <!-- Condition for  relative to start & end -->
      <div class="d-flex gap-3">
        <div
          class="conditional-content w-100"
          *ngIf="selectedValue === 'fixed-date'"
        >
          <!-- Due Date Tage -->
          <div>
            <p class="form-label">Tage</p>
            <input
              [(ngModel)]="dueDateTage"
              placeholder="12"
              class="form-input-field font-rubik remove-icon-cls"
              maxlength="2"
              (keydown)="validateDueDateTage($event)"
            />
          </div>
        </div>
      </div>

      <!-- when selected quarterly then show this content -->
      <div
        class="selected-quarterly-content"
        *ngIf="contributionType === 'quarterly'"
      >
        <h4 class="fs-14 mt-4">Quarterly Payment Configuration</h4>
        <div class="quarterly-options mt-3">
          <mat-form-field class="w-100 bg-white font-rubik">
            <mat-label class="font-rubik">Quarter Start Month</mat-label>
            <mat-select [(ngModel)]="quarterStartMonth">
              <mat-option value="january">January</mat-option>
              <mat-option value="february">February</mat-option>
              <mat-option value="march">March</mat-option>
              <mat-option value="april">April</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
      </div>
      <!-- when selected quarterly then show this content -->
    </div>
  `,
  styles: `
    .due-date {
      margin-bottom: 8px;
      font-weight: 500;
    }
    

  `,
})
export class StepFourDueDateComponent {
  @Input() contributionType: string = '';

  numberIcon = 'assets/images/due-date-icon.svg';
  calendarDateIcon = 'assets/images/calendar-edit.svg';
  calendarIcon = 'assets/images/calendar-edit.svg';

  selectedValue: string | null = null;
  selectedAnzahlInterval: string | null = null;
  selectedInterval: string | null = null;
  dueDateAnzahl: string = '';
  dueDateTage: string = '';

  // Quarterly specific properties
  quarterStartMonth: string = 'january';
  proRateFirstQuarter: boolean = false;

  onSelectionChange() {
    console.log('Selected option:', this.selectedValue);
  }

  validateDueDateAnzahl(event: KeyboardEvent) {
    // Allow: Backspace, Delete, Tab, Escape, Enter, Arrow keys
    if (
      [
        'Backspace',
        'Delete',
        'Tab',
        'Escape',
        'Enter',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
      ].indexOf(event.key) !== -1
    ) {
      return true;
    }

    // Block input if not a number (0-9)
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
      return false;
    }

    return true;
  }

  validateDueDateTage(event: KeyboardEvent) {
    // Allow: Backspace, Delete, Tab, Escape, Enter, Arrow keys
    if (
      [
        'Backspace',
        'Delete',
        'Tab',
        'Escape',
        'Enter',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
      ].indexOf(event.key) !== -1
    ) {
      return true;
    }

    // Block input if not a number (0-9)
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
      return false;
    }

    return true;
  }
}
