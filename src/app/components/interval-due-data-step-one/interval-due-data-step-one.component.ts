import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

import { ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SelectContributionIntervalComponent } from '../select-contribution-interval/select-contribution-interval.component';
import { StepFourDueDateComponent } from '../step-four-due-date/step-four-due-date.component';

@Component({
  selector: 'app-interval-due-data-step-one',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,

    MatRadioModule,
    MatDatepickerModule,
    SelectContributionIntervalComponent,
    StepFourDueDateComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-stepper
      class="contribution-basic-data-step-wrap payment-terms-calculation-wrap calculation-configuration-wrapper"
    >
      <!-- Step 1 -->
      <mat-step label="Step 1">
        <div class="step">
          <div class="tab-contents text-center font-rubik">
            <h3 class="fs-4">
              Proceeding to Contribution Interval and Due Date Settings
            </h3>
            <p class="fs-14">
              Define the interval, billing period, and due date for a structured
              and automated billing cycle.
            </p>

            <div class="button-wrap">
              <button type="button" class="step-button fill" matStepperNext>
                Procced
              </button>
            </div>
          </div>
        </div>
      </mat-step>

      <!-- Step 2 -->
      <mat-step label="Step 2">
        <div class="step">
          <div class="tab-contents font-rubik">
            <h3 class="fs-6 pb-3 mb-1">
              Proceeding to Contribution Interval and Due Date Settings
            </h3>
            <h6 class="fs-14">Contribution Interval & Due Date</h6>
            <p class="fs-14 text-dark-2 pb-3 mb-1">
              Define the interval, billing period, and due date for a structured
              and automated billing cycle.
            </p>
            <p class="fs-14">Selecting the Contribution Interval</p>
            <div>
              <app-select-contribution-interval></app-select-contribution-interval>
            </div>
            <div class="d-flex justify-content-end align-items-end w-100">
              <div class="button-wrap">
                <button type="button" class="step-button fill" matStepperNext>
                  Next
                </button>
                <button type="button" class="step-button" matStepperPrevious>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </mat-step>

      <!-- Step 3 -->
      <mat-step label="Step 3">
        <div class="step">
          <div class="tab-contents font-rubik">
            <h3 class="fs-6 pb-3 mb-3">Selecting the Contribution Interval</h3>
            <h6 class="fs-14 pb-3">Select Contribution Interval</h6>
            <div class="tab-checkbox-wrap d-flex">
              <mat-radio-group
                class="tab-checkbox-wrap d-flex"
                [formControl]="selectedIntervalControl"
                (change)="onIntervalChange()"
              >
                <mat-radio-button
                  class="w-100 check-box-item font-rubik"
                  value="start"
                >
                  <h6>Start</h6>
                  <p>
                    The period begins as soon as the member's contribution is
                    activated and is then extended by one year.
                  </p>
                </mat-radio-button>
                <mat-radio-button
                  class="w-100 check-box-item font-rubik"
                  value="interval"
                >
                  <h6>Interval</h6>
                  <p>
                    The period begins as soon as the member's contribution is
                    activated and is then extended by one year.
                  </p>
                </mat-radio-button>
                <mat-radio-button
                  class="w-100 check-box-item font-rubik"
                  value="predefined"
                >
                  <h6>Predefined Date</h6>
                  <p>
                    The period begins as soon as the member's contribution is
                    activated and is then extended by one year.
                  </p>
                </mat-radio-button>
              </mat-radio-group>
            </div>

            <div
              *ngIf="selectedIntervalControl.value === 'predefined'"
              class="selected-date-wrap"
            >
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

            <div class="d-flex justify-content-end align-items-end w-100 mt-4">
              <div class="button-wrap">
                <button type="button" class="step-button fill" matStepperNext>
                  Next
                </button>
                <button type="button" class="step-button" matStepperPrevious>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </mat-step>

      <!-- Step 4 -->
      <mat-step label="Step 4">
        <div class="step">
          <div class="tab-contents font-rubik">
            <h3 class="fs-6 pb-3 mb-1">
              Setting the Due Date for Payments
              <span class="basic-setting"> ( Basic setting )</span>
            </h3>
            <app-step-four-due-date></app-step-four-due-date>
            <div class="d-flex justify-content-end align-items-end w-100">
              <div class="button-wrap">
                <button type="button" class="step-button fill">Next</button>
                <button type="button" class="step-button" matStepperPrevious>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  styles: ``,
})
export class IntervalDueDataStepOneComponent {
  selectedConditionValue: string | null = null;

  onSelectionConditionChange() {
    console.log('Selected option:', this.selectedValue);
  }

  // Required asset paths
  intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
  textalignIcon = 'assets/images/textalign-justifycenter.svg';

  private _formBuilder = inject(FormBuilder);

  // Only keep the form controls we're actually using
  selectedIntervalControl = this._formBuilder.control('');

  // Method called when radio selection changes
  onIntervalChange() {
    // Empty method but still used in template
  }

  @ViewChild(MatStepper) stepper!: MatStepper;

  ngAfterViewInit() {
    // Set up an observer to watch for step changes
    this.stepper.selectionChange.subscribe((event) => {
      // Remove styling from all steps
      const stepHeaders = document.querySelectorAll('.mat-step-header');
      stepHeaders.forEach((header) => {
        header.classList.remove('previous-step');
      });

      // Add styling to previous steps
      for (let i = 0; i < event.selectedIndex; i++) {
        const stepHeader = document.querySelectorAll('.mat-step-header')[i];
        if (stepHeader) {
          stepHeader.classList.add('previous-step');
        }
      }
    });
  }

  // Select
  numberIcon = 'assets/images/due-date-icon.svg';
  calendarDateIcon = 'assets/images/calendar-edit.svg';
  selectedValue: string | null = null;

  onSelectionChange() {
    console.log('Selected option:', this.selectedValue);
  }

  // Input
  value_id: number | null = null;
  and_condition_value_id: number | null = null;
}
