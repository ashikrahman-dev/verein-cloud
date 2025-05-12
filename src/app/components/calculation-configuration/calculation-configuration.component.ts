import { Component } from '@angular/core';

import { MatStepperModule } from '@angular/material/stepper';

@Component({
    selector: 'app-calculation-configuration',
    standalone: true, // Add this line
    imports: [MatStepperModule],
    template: `
        <mat-stepper
            class="contribution-basic-data-step-wrap payment-terms-calculation-wrap calculation-configuration-wrapper"
        >
            <!-- Step 1 -->
            <mat-step label="Step 1">
                <div class="basic-data-contribution">
                    <div class="tab-contents text-center font-rubik">
                        <h3
                            class="fs-24 pb-2 d-flex gap-2 align-items-center justify-content-center"
                        >
                            Proceeding to the Calculation Configuration
                        </h3>
                        <p class="fs-14 font-normal cc-first-step-content">
                            Configures how contributions are calculated,
                            allowing flexibility based on dynamic rules and
                            parameters. This ensures accurate and customized
                            billing for members.
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
            </mat-step>

            <!-- Step 2 -->
            <mat-step label="Step 2">
                <div class="basic-data-contribution">
                    <h4 class="heading">
                        Selecting the Calculation Method
                        <img
                            [src]="headingTooltipIcon"
                            alt="Calendar Icon"
                            class=""
                        />
                    </h4>
                    <p class="form-label pt-2 mt-3">
                        Select Calculation Method
                    </p>

                    <div class="w-100 mt-4">
                        <div
                            class="button-wrap d-flex justify-content-end align-items-end gap-3"
                        >
                            <button
                                type="button"
                                class="step-button fill"
                                matStepperNext
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
            </mat-step>

            <!-- Step 3 -->
            <mat-step label="Step 3">
                <div class="basic-data-contribution">
                    <!-- Button group -->
                    <div class="w-100 mt-4">
                        <div
                            class="button-wrap d-flex justify-content-end align-items-end gap-3"
                        >
                            <button
                                type="button"
                                class="step-button fill"
                                matStepperNext
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
            </mat-step>

            <!-- Step 4 -->
            <mat-step label="Step 4">
                <div class="basic-data-contribution">
                    <p class="form-label pt-0 mt-0 pb-4">
                        Select Financial Accounts
                    </p>
                    <div class="basic-data-contribution-form">
                        <!-- Button group -->
                        <div class="w-100 mt-4">
                            <div
                                class="button-wrap d-flex justify-content-end align-items-end gap-3"
                            >
                                <button type="button" class="step-button fill">
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
                </div>
            </mat-step>
        </mat-stepper>
    `,
    styles: `
    .calculation-configuration-step {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    
    .form-input-field {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    .text-red {
      color: red;
    }
  `,
})
export class CalculationConfigurationComponent {
    // Required asset paths

    headingTooltipIcon = 'assets/images/heading-tooltip-icon.svg';
}
