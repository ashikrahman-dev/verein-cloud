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
import { TabService } from '../basic-data-contribution/tab.service'; // Import TabService

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
                                Proceeding to Contribution Interval and Due Date
                                Settings
                                <img
                                    [src]="headingTooltipIcon"
                                    alt="Calendar Icon"
                                    class=""
                                />
                            </h3>
                            <p class="fs-14 font-normal">
                                Define the interval, billing period, and due
                                date for a structured and automated billing
                                cycle.
                            </p>

                            <div
                                class="button-wrap d-flex justify-content-center pt-3 mt-2"
                            >
                                <button
                                    type="button"
                                    class="step-button fill"
                                    matStepperNext
                                >
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
                            <span class="basic-setting">
                                ( Basic setting )</span
                            >
                            <img
                                [src]="headingTooltipIcon"
                                alt="Calendar Icon"
                                class=""
                            />
                        </h4>
                        <div class="">
                            <!-- Payment Deadline -->
                            <div>
                                <p class="form-label pt-3">Payment Deadline</p>
                                <input
                                    placeholder="Enter day (1-999)"
                                    class="form-input-field font-rubik remove-icon-cls"
                                    formControlName="paymentDeadline"
                                    type="number"
                                    min="1"
                                    max="999"
                                    maxlength="3"
                                    (input)="enforceMaxLength($event)"
                                />
                                <div
                                    class="error-message font-rubik"
                                    *ngIf="
                                        paymentDeadlineControl.invalid &&
                                        (paymentDeadlineControl.dirty ||
                                            paymentDeadlineControl.touched)
                                    "
                                >
                                    <div
                                        *ngIf="paymentDeadlineControl.errors?.['required']"
                                    >
                                        Payment deadline is required
                                    </div>
                                    <div
                                        *ngIf="paymentDeadlineControl.errors?.['min']"
                                    >
                                        Payment deadline must be at least 1
                                    </div>
                                    <div
                                        *ngIf="paymentDeadlineControl.errors?.['max']"
                                    >
                                        Payment deadline cannot exceed 999
                                    </div>
                                    <div
                                        *ngIf="paymentDeadlineControl.errors?.['pattern']"
                                    >
                                        Please enter a valid number between 1
                                        and 999
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
                                <button
                                    type="button"
                                    class="step-button"
                                    matStepperPrevious
                                >
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
                        <h4
                            class="heading pb-4 d-flex gap-2 align-items-center"
                        >
                            Selecting the Prorated Calculation Method
                            <img
                                [src]="headingTooltipIcon"
                                alt="Calendar Icon"
                                class=""
                            />
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
                                        <h6 class="">
                                            No Prorated Calculation
                                        </h6>
                                        <p>
                                            The full contribution is charged for
                                            the entire billing period,
                                            regardless of when the member joins.
                                            This ensures a fixed and predictable
                                            payment structure.
                                        </p>
                                    </mat-radio-button>
                                    <mat-radio-button
                                        class="w-100 check-box-item font-rubik"
                                        value="monthly-prorated-calculation"
                                    >
                                        <h6>Monthly Prorated Calculation</h6>
                                        <p>
                                            The contribution is adjusted based
                                            on the remaining months in the
                                            billing cycle. Members pay a
                                            proportional amount depending on
                                            when they join within the cycle.
                                        </p>
                                    </mat-radio-button>
                                    <mat-radio-button
                                        class="w-100 check-box-item font-rubik"
                                        value="daily-prorated-calculation"
                                    >
                                        <h6>Daily Prorated Calculation</h6>
                                        <p>
                                            The contribution is calculated
                                            precisely based on the number of
                                            days remaining in the billing
                                            period. This provides the most
                                            accurate and fair payment
                                            adjustment.
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
                                <button
                                    type="button"
                                    class="step-button"
                                    matStepperPrevious
                                >
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
    headingTooltipIcon = 'assets/images/heading-tooltip-icon.svg';

    private _formBuilder = inject(FormBuilder);

    // Inject TabService
    constructor(private tabService: TabService) {}

    // Form controls for each step
    step1FormGroup = this._formBuilder.group({
        // Step 1 doesn't need validation as it's just an introduction
        acknowledgeStep: [true],
    });

    step2FormGroup = this._formBuilder.group({
        paymentDeadline: [
            7, // Changed from '' to 7 to set default value
            [
                Validators.required,
                Validators.min(1),
                Validators.max(999),
                Validators.pattern('^[0-9]{1,3}$'), // Updated pattern to allow up to 3 digits
            ],
        ],
    });

    step3FormGroup = this._formBuilder.group({
        calculationMethod: ['no-prorated-calculation', Validators.required],
    });

    // Getter for easy access to the payment deadline control
    get paymentDeadlineControl() {
        return this.step2FormGroup.get('paymentDeadline')!;
    }

    @ViewChild(MatStepper) stepper!: MatStepper;

    // Method to enforce max-length on number input (since HTML max-length doesn't work with type="number")
    enforceMaxLength(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.value.length > 3) {
            input.value = input.value.slice(0, 3);
        }

        // Also ensure the value is within range 1-999
        const numValue = parseInt(input.value, 10);
        if (numValue > 999) {
            input.value = '999';
        }
    }

    // Dedicated method for Step 2 validation
    isStep2Valid(): boolean {
        // Now just checks the payment deadline field
        return this.paymentDeadlineControl.valid;
    }

    // Helper method to format calculation method for display
    formatCalculationMethod(value: string): string {
        switch (value) {
            case 'no-prorated-calculation':
                return 'No Prorated Calculation';
            case 'monthly-prorated-calculation':
                return 'Monthly Prorated Calculation';
            case 'daily-prorated-calculation':
                return 'Daily Prorated Calculation';
            default:
                return value;
        }
    }

    saveForm() {
        if (this.step2FormGroup.valid && this.step3FormGroup.valid) {
            // Get form values
            const paymentDeadline =
                this.step2FormGroup.get('paymentDeadline')?.value;
            const calculationMethod =
                this.step3FormGroup.get('calculationMethod')?.value;

            // Format the values for display in the parent component
            const paymentTermDisplay = `${paymentDeadline} days`;
            const prorataCalculationDisplay = this.formatCalculationMethod(
                calculationMethod || ''
            );

            // Update the TabService with the payment terms data
            this.tabService.updatePaymentTermsData({
                paymentTerm: paymentTermDisplay,
                prorataCalculation: prorataCalculationDisplay,
            });

            // Combine all form data for logging/API calls
            const formData = {
                ...this.step1FormGroup.value,
                ...this.step2FormGroup.value,
                ...this.step3FormGroup.value,
            };

            console.log('Form submitted successfully:', formData);
            console.log('Payment terms data sent to service:', {
                paymentTerm: paymentTermDisplay,
                prorataCalculation: prorataCalculationDisplay,
            });

            // Add your API call or other logic here

            // Show success message
            // alert('Payment terms saved successfully!');

            // Navigate to the next tab (calculation configuration tab)
            this.navigateToNextTab();
        } else {
            // Mark all form controls as touched to show validation errors
            this.markFormGroupTouched(this.step1FormGroup);
            this.markFormGroupTouched(this.step2FormGroup);
            this.markFormGroupTouched(this.step3FormGroup);
        }
    }

    // New method to navigate to the next tab
    navigateToNextTab() {
        // Use TabService to change the active tab (index 3 - Calculation Configuration)
        this.tabService.setActiveTab(3);

        // As a fallback, also try direct DOM manipulation if Bootstrap is being used
        const nextTabElement = document.getElementById(
            'pills-contribution5-tab'
        );
        if (nextTabElement) {
            // Create and dispatch click event
            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            nextTabElement.dispatchEvent(clickEvent);

            // For Bootstrap 5, we may need to use the Tab API
            try {
                // @ts-ignore - Bootstrap may not be typed
                const bsTab = new bootstrap.Tab(nextTabElement);
                bsTab.show();
            } catch (error) {
                console.log('Bootstrap Tab API not available, using fallback.');
            }
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
                const stepHeader =
                    document.querySelectorAll('.mat-step-header')[i];
                if (stepHeader) {
                    stepHeader.classList.add('previous-step');
                }
            }
        });
    }
}
