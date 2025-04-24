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
  standalone: true,
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
            <div class="">
              <!-- Payment Deadline -->
              <div>
                <p class="form-label pt-3">Payment Deadline</p>
                <input
                  placeholder="Enter day (1-31)"
                  class="form-input-field font-rubik remove-icon-cls"
                  formControlName="paymentDeadline"
                  type="number"
                  min="1"
                  max="31"
                  maxlength="2"
                  (input)="enforceMaxLength($event)"
                />
                <div
                  class="error-message font-rubik"
                  *ngIf="paymentDeadlineControl.invalid && (paymentDeadlineControl.dirty || paymentDeadlineControl.touched)"
                >
                  <div *ngIf="paymentDeadlineControl.errors?.['required']">
                    Payment deadline is required
                  </div>
                  <div *ngIf="paymentDeadlineControl.errors?.['min']">
                    Payment deadline must be at least 1
                  </div>
                  <div *ngIf="paymentDeadlineControl.errors?.['max']">
                    Payment deadline cannot exceed 31
                  </div>
                  <div *ngIf="paymentDeadlineControl.errors?.['pattern']">
                    Please enter a valid number between 1 and 31
                  </div>
                </div>
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
                  [disabled]="!isStep2Valid()"
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
                  class="tab-checkbox-wrap d-flex gap-3 flex-row"
                  formControlName="calculationMethod"
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
            </div>

            <div class="w-100 mt-4">
              <div
                class="button-wrap d-flex justify-content-end align-items-end gap-3"
              >
                <button
                  type="button"
                  class="step-button fill"
                  (click)="saveForm()"
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

    .form-input-field {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .tab-checkbox-wrap {
      flex-direction: column;
      gap: 12px;
    }

    .check-box-item {
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 12px;
    }

    .check-box-item h6 {
      margin-bottom: 6px;
      font-weight: 500;
    }

    .check-box-item p {
      margin-bottom: 0;
      font-size: 14px;
    }

    .step-button {
      padding: 8px 16px;
      border-radius: 4px;
      border: 1px solid #ccc;
      background: white;
      cursor: pointer;
    }

    .step-button.fill {
      background: #1976d2;
      color: white;
      border: 1px solid #1976d2;
    }
  `,
})
export class PaymentTermsCalculationComponent {
  isLinear = true;
  intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
  textalignIcon = 'assets/images/textalign-justifycenter.svg';

  private _formBuilder = inject(FormBuilder);

  // Form controls for each step
  step1FormGroup = this._formBuilder.group({
    // Step 1 doesn't need validation as it's just an introduction
    acknowledgeStep: [true],
  });

  step2FormGroup = this._formBuilder.group({
    paymentDeadline: ['', [
      Validators.required,
      Validators.min(1),
      Validators.max(31),
      Validators.pattern('^[0-9]{1,2}$')
    ]],
  });

  step3FormGroup = this._formBuilder.group({
    calculationMethod: ['no-prorated-calculation', Validators.required],
  });

  // Getter for easy access to the payment deadline control
  get paymentDeadlineControl() {
    return this.step2FormGroup.get('paymentDeadline')!;
  }

  @ViewChild(MatStepper) stepper!: MatStepper;

  // Method to enforce maxlength on number input (since HTML maxlength doesn't work with type="number")
  enforceMaxLength(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 2) {
      input.value = input.value.slice(0, 2);
    }
    
    // Also ensure the value is within range 1-31
    const numValue = parseInt(input.value, 10);
    if (numValue > 31) {
      input.value = '31';
    }
  }

  // Dedicated method for Step 2 validation
  isStep2Valid(): boolean {
    // Now just checks the payment deadline field
    return this.paymentDeadlineControl.valid;
  }

  saveForm() {
    if (this.step2FormGroup.valid && this.step3FormGroup.valid) {
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