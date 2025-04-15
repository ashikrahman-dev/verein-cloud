import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-payment-terms-calculation',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  imports: [
    FormsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,

    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,

    MatRadioModule,
  ],
  template: `
    <mat-stepper
      class="contribution-basic-data-step-wrap payment-terms-calculation-wrap"
    >
      <!-- Step 1 -->
      <mat-step label="Step 1">
        <div class="basic-data-contribution">
          <div class="">
            <div class="tab-contents text-center font-rubik">
              <h3
                class="fs-24 pb-2 d-flex gap-2 align-items-center justify-content-center"
              >
                Proceeding to Contribution Interval and Due Date Settings
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15ZM8.25 11.25H9.75V12.75H8.25V11.25ZM9.75 10.0163V10.5H8.25V9.375C8.25 8.96077 8.58577 8.625 9 8.625C9.6213 8.625 10.125 8.1213 10.125 7.5C10.125 6.87868 9.6213 6.375 9 6.375C8.45423 6.375 7.9992 6.76367 7.8966 7.27933L6.42548 6.9851C6.66478 5.78189 7.7265 4.875 9 4.875C10.4497 4.875 11.625 6.05025 11.625 7.5C11.625 8.68913 10.8343 9.6936 9.75 10.0163Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </h3>
              <p class="fs-14 font-normal">
                Define the interval, billing period, and due date for a
                structured and automated billing cycle.
              </p>

              <div class="button-wrap d-flex justify-content-center pt-3 mt-2">
                <button type="button" class="step-button fill" matStepperNext>
                  Procced
                </button>
              </div>
            </div>
          </div>
        </div>
      </mat-step>

      <!-- Step 2 -->
      <mat-step label="Step 2">
        <div class="basic-data-contribution">
          <h4 class="heading">
            Defining the Payment Deadline
            <span class="basic-setting"> ( Basic setting )</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15ZM8.25 11.25H9.75V12.75H8.25V11.25ZM9.75 10.0163V10.5H8.25V9.375C8.25 8.96077 8.58577 8.625 9 8.625C9.6213 8.625 10.125 8.1213 10.125 7.5C10.125 6.87868 9.6213 6.375 9 6.375C8.45423 6.375 7.9992 6.76367 7.8966 7.27933L6.42548 6.9851C6.66478 5.78189 7.7265 4.875 9 4.875C10.4497 4.875 11.625 6.05025 11.625 7.5C11.625 8.68913 10.8343 9.6936 9.75 10.0163Z"
                fill="#5A5A5A"
              />
            </svg>
          </h4>
          <p class="form-label pt-2 mt-3">Payment Deadline</p>
          <div class="basic-data-contribution-form">
            <!-- Contribution type  -->
            <div>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  <img
                    [src]="intervalCalendarIcon"
                    alt="Calendar Icon"
                    class=""
                  />
                  {{ '7' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="personal-contribution"> 7 </mat-option>
                  <mat-option value="family-contribution"> 8 </mat-option>
                  <mat-option value="family-contribution"> 9 </mat-option>
                  <mat-option value="family-contribution"> 10 </mat-option>
                  <mat-option value="family-contribution"> 11 </mat-option>
                  <mat-option value="family-contribution"> 12 </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- Interval & Due Date  -->
            <div>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  <img [src]="textalignIcon" alt="Calendar Icon" class="" />
                  {{ 'Day’s ' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="interval-due-date-1"> 1 Day </mat-option>
                  <mat-option value="interval-due-date-2"> 2 Day’s </mat-option>
                  <mat-option value="interval-due-date-3"> 3 Day’s </mat-option>
                  <mat-option value="interval-due-date-4"> 4 Day’s </mat-option>
                  <mat-option value="interval-due-date-5"> 5 Day’s </mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>

          <div class="w-100 mt-4">
            <div
              class="button-wrap d-flex justify-content-end align-items-end gap-3"
            >
              <button type="button" class="step-button fill" matStepperNext>
                Next
              </button>
              <button type="button" class="step-button" matStepperPrevious>
                Back
              </button>
            </div>
          </div>
        </div>
      </mat-step>

      <!-- Step 3 -->
      <mat-step label="Step 3">
        <div class="basic-data-contribution">
          <h4 class="heading pb-4 d-flex gap-2 align-items-center">
            Selecting the Prorated Calculation Method
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15ZM8.25 11.25H9.75V12.75H8.25V11.25ZM9.75 10.0163V10.5H8.25V9.375C8.25 8.96077 8.58577 8.625 9 8.625C9.6213 8.625 10.125 8.1213 10.125 7.5C10.125 6.87868 9.6213 6.375 9 6.375C8.45423 6.375 7.9992 6.76367 7.8966 7.27933L6.42548 6.9851C6.66478 5.78189 7.7265 4.875 9 4.875C10.4497 4.875 11.625 6.05025 11.625 7.5C11.625 8.68913 10.8343 9.6936 9.75 10.0163Z"
                fill="#5A5A5A"
              />
            </svg>
          </h4>

          <div class="tab-contents">
            <h6 class="fs-14 pb-3 font-rubik font-normal">
              Select Prorated Calculation Method
            </h6>
            <div class="tab-checkbox-wrap d-flex">
              <mat-radio-group
                class="tab-checkbox-wrap d-flex"
                [formControl]="selectedIntervalControl"
                (change)="onIntervalChange()"
              >
                <mat-radio-button
                  class="w-100 check-box-item font-rubik"
                  value="no-prorated-calculation"
                >
                  <h6 class="">No Prorated Calculation</h6>
                  <p>
                    The full contribution is charged for the entire billing
                    period, regardless of when the member joins. This ensures a
                    fixed and predictable payment structure.
                  </p>
                </mat-radio-button>
                <mat-radio-button
                  class="w-100 check-box-item font-rubik"
                  value="monthly-prorated-calculation"
                >
                  <h6>Monthly Prorated Calculation</h6>
                  <p>
                    The contribution is adjusted based on the remaining months
                    in the billing cycle. Members pay a proportional amount
                    depending on when they join within the cycle.
                  </p>
                </mat-radio-button>
                <mat-radio-button
                  class="w-100 check-box-item font-rubik"
                  value="daily-prorated-calculation"
                >
                  <h6>Daily Prorated Calculation</h6>
                  <p>
                    The contribution is calculated precisely based on the number
                    of days remaining in the billing period. This provides the
                    most accurate and fair payment adjustment.
                  </p>
                </mat-radio-button>
              </mat-radio-group>
            </div>

            <div
              *ngIf="
                selectedIntervalControl.value === 'monthly-prorated-calculation'
              "
              class="selected-date-wrap d-flex gap-4 align-items-center"
            >
              <mat-radio-button
                class="mpc-check-box-item font-rubik"
                value="at-the-beginning"
              >
                <p>At the beginning</p>
              </mat-radio-button>
              <mat-radio-button
                class=" mpc-check-box-item font-rubik"
                value="at-the-end"
              >
                <p>At the end</p>
              </mat-radio-button>

              <!-- Additional predefined date configuration options would go here -->
            </div>
          </div>

          <div class="w-100 mt-4">
            <div
              class="button-wrap d-flex justify-content-end align-items-end gap-3"
            >
              <button type="button" class="step-button fill">Save</button>
              <button type="button" class="step-button" matStepperPrevious>
                Back
              </button>
            </div>
          </div>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  styles: `

  `,
})
export class PaymentTermsCalculationComponent {
  contribution_id: number | null = null;
  post_id: number | null = null;

  numberIcon = 'assets/images/contribution-id-icon.svg';
  calendarDateIcon = 'assets/images/due-date-icon.svg';
  clockIcon = 'assets/images/clock-icon.svg';
  profileUser = 'assets/images/profile-2user.svg';
  intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
  textalignIcon = 'assets/images/textalign-justifycenter.svg';
  selectedValue: string | null = null;

  onSelectionChange() {
    console.log('Selected option:', this.selectedValue);
  }

  private _formBuilder = inject(FormBuilder);

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

  // Stepper
  // private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  // Previous Step tracking

  @ViewChild(MatStepper) stepper!: MatStepper;

  // Add your existing properties and methods

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
}
