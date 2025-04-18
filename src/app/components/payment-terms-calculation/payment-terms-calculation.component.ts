import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-payment-terms-calculation',
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
  ],
  template: `
    <mat-stepper
      class="contribution-basic-data-step-wrap payment-terms-calculation-wrap"
      [linear]="isLinear"
      #stepper
    >
      <!-- Step 1 -->
      <mat-step [stepControl]="step1FormGroup" label="Step 1">
        <form [formGroup]="step1FormGroup">
          <div class="basic-data-contribution">
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
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </form>
      </mat-step>

      <!-- Step 2 -->
      <mat-step [stepControl]="step2FormGroup" label="Step 2">
        <form [formGroup]="step2FormGroup">
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
              <div>
                <mat-form-field class="w-100 bg-white font-rubik">
                  <mat-label class="font-rubik d-flex gap-2 align-items-center">
                    <img
                      [src]="intervalCalendarIcon"
                      alt="Calendar Icon"
                      class=""
                    />
                    Select Payment Day
                  </mat-label>
                  <mat-select
                    class="font-rubik"
                    formControlName="paymentDay"
                    required
                  >
                    <mat-option value="7"> 7 </mat-option>
                    <mat-option value="8"> 8 </mat-option>
                    <mat-option value="9"> 9 </mat-option>
                    <mat-option value="10"> 10 </mat-option>
                    <mat-option value="11"> 11 </mat-option>
                    <mat-option value="12"> 12 </mat-option>
                  </mat-select>
                  <mat-error
                    *ngIf="
                      step2FormGroup.get('paymentDay')?.hasError('required')
                    "
                  >
                    Payment day is required
                  </mat-error>
                </mat-form-field>
              </div>

              <div>
                <mat-form-field class="w-100 bg-white font-rubik">
                  <mat-label class="font-rubik d-flex gap-2 align-items-center">
                    <img [src]="textalignIcon" alt="Calendar Icon" class="" />
                    Select Due Days
                  </mat-label>
                  <mat-select
                    class="font-rubik"
                    formControlName="dueDays"
                    required
                  >
                    <mat-option value="1"> 1 Day </mat-option>
                    <mat-option value="2"> 2 Day's </mat-option>
                    <mat-option value="3"> 3 Day's </mat-option>
                    <mat-option value="4"> 4 Day's </mat-option>
                    <mat-option value="5"> 5 Day's </mat-option>
                  </mat-select>
                  <mat-error
                    *ngIf="step2FormGroup.get('dueDays')?.hasError('required')"
                  >
                    Due days selection is required
                  </mat-error>
                </mat-form-field>
              </div>
            </div>

            <div class="w-100 mt-4">
              <div
                class="button-wrap d-flex justify-content-end align-items-end gap-3"
              >
                <button
                  type="button"
                  class="step-button fill"
                  matStepperNext
                  [disabled]="step2FormGroup.invalid"
                >
                  Next
                </button>
                <button type="button" class="step-button" matStepperPrevious>
                  Back
                </button>
              </div>
            </div>
          </div>
        </form>
      </mat-step>

      <!-- Step 3 -->
      <mat-step [stepControl]="step3FormGroup" label="Step 3">
        <form [formGroup]="step3FormGroup">
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
                  formControlName="calculationMethod"
                  (change)="onIntervalChange()"
                >
                  <mat-radio-button
                    class="w-100 check-box-item font-rubik"
                    value="no-prorated-calculation"
                  >
                    <h6 class="">No Prorated Calculation</h6>
                    <p>
                      The full contribution is charged for the entire billing
                      period, regardless of when the member joins. This ensures
                      a fixed and predictable payment structure.
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
                      The contribution is calculated precisely based on the
                      number of days remaining in the billing period. This
                      provides the most accurate and fair payment adjustment.
                    </p>
                  </mat-radio-button>
                </mat-radio-group>
              </div>

              <div
                *ngIf="
                  step3FormGroup.get('calculationMethod')?.value ===
                  'monthly-prorated-calculation'
                "
                class="selected-date-wrap d-flex gap-4 align-items-center mt-3"
              >
                <mat-radio-group formControlName="monthlyProratedOption" class="d-flex gap-4">
                  <mat-radio-button
                    class="mpc-check-box-item font-rubik"
                    value="at-the-beginning"
                  >
                    <p>At the beginning</p>
                  </mat-radio-button>
                  <mat-radio-button
                    class="mpc-check-box-item font-rubik"
                    value="at-the-end"
                  >
                    <p>At the end</p>
                  </mat-radio-button>
                </mat-radio-group>
                <!-- <mat-error *ngIf="showMonthlyProratedOptionError">
                  Please select an option
                </mat-error> -->
              </div>
            </div>

            <div class="w-100 mt-4">
              <div
                class="button-wrap d-flex justify-content-end align-items-end gap-3"
              >
                <button
                  type="button"
                  class="step-button fill"
                  (click)="saveForm()"
                  [disabled]="!isFormValid()"
                >
                  Save
                </button>
                <button type="button" class="step-button" matStepperPrevious>
                  Back
                </button>
              </div>
            </div>
          </div>
        </form>
      </mat-step>
    </mat-stepper>
  `,
  styles: `
    .mat-stepper-horizontal {
      margin-top: 8px;
    }

    .mat-mdc-form-field {
      margin-top: 16px;
      display: block;
    }
    
    .error-message {
      color: #f44336;
      font-size: 12px;
      margin-top: 4px;
    }
  `,
})
export class PaymentTermsCalculationComponent {
  isLinear = true;
  intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
  textalignIcon = 'assets/images/textalign-justifycenter.svg';
  showMonthlyProratedOptionError = false;

  private _formBuilder = inject(FormBuilder);

  // Form controls for each step
  step1FormGroup = this._formBuilder.group({
    // Step 1 doesn't need validation as it's just an introduction
    acknowledgeStep: [true],
  });

  step2FormGroup = this._formBuilder.group({
    paymentDay: ['', Validators.required],
    dueDays: ['', Validators.required],
  });

  step3FormGroup = this._formBuilder.group({
    calculationMethod: ['no-prorated-calculation', Validators.required],
    monthlyProratedOption: [''],
  });

  @ViewChild(MatStepper) stepper!: MatStepper;

  ngOnInit() {
    // Add conditional validation for monthlyProratedOption
    this.step3FormGroup
      .get('calculationMethod')
      ?.valueChanges.subscribe((value) => {
        const monthlyProratedOption = this.step3FormGroup.get(
          'monthlyProratedOption'
        );

        if (value === 'monthly-prorated-calculation') {
          monthlyProratedOption?.setValidators(Validators.required);
        } else {
          monthlyProratedOption?.clearValidators();
        }

        monthlyProratedOption?.updateValueAndValidity();
      });
  }

  onIntervalChange() {
    // Reset the monthlyProratedOption when changing the calculation method
    if (
      this.step3FormGroup.get('calculationMethod')?.value !==
      'monthly-prorated-calculation'
    ) {
      this.step3FormGroup.get('monthlyProratedOption')?.setValue('');
      this.showMonthlyProratedOptionError = false;
    }
  }

  isFormValid(): boolean {
    // Check if all forms are valid
    if (!this.step3FormGroup.valid) {
      // Specifically check the monthlyProratedOption if monthly calculation is selected
      if (
        this.step3FormGroup.get('calculationMethod')?.value ===
          'monthly-prorated-calculation' &&
        !this.step3FormGroup.get('monthlyProratedOption')?.value
      ) {
        this.showMonthlyProratedOptionError = true;
        return false;
      }
      return false;
    }
    return true;
  }

  saveForm() {
    if (this.isFormValid()) {
      // Combine all form data
      const formData = {
        ...this.step1FormGroup.value,
        ...this.step2FormGroup.value,
        ...this.step3FormGroup.value,
      };

      console.log('Form submitted successfully:', formData);
      // Add your API call or other logic here

      // Show success message or navigate away
      alert('Payment terms saved successfully!');
    } else {
      // Mark all form controls as touched to show validation errors
      this.markFormGroupTouched(this.step1FormGroup);
      this.markFormGroupTouched(this.step2FormGroup);
      this.markFormGroupTouched(this.step3FormGroup);
    }
  }

  // Helper method to mark all controls in a form group as touched
  markFormGroupTouched(formGroup: any) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.controls[key];
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  ngAfterViewInit() {
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
