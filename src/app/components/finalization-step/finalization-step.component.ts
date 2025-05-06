import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms'; // ✅ Import FormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
    selector: 'app-finalization-step',
    standalone: true, // ✅ Mark as standalone
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
    ],
    template: `
        <mat-stepper
            class="contribution-basic-data-step-wrap finalization-step-wrap"
        >
            <mat-step label="Step 1">
                <div class="basic-data-contribution">
                    <div class="tab-contents text-center font-rubik">
                        <h3
                            class="fs-24 pb-2 d-flex gap-2 align-items-center justify-content-center"
                        >
                            New post - Donation receipt invoice
                            <img
                                [src]="headingTooltipIcon"
                                alt="Calendar Icon"
                                class=""
                            />
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
                                Procced
                            </button>
                        </div>
                    </div>
                </div>
            </mat-step>

            <mat-step label="Step 2">
                <div class="basic-data-contribution">
                    <div class="fixed-value-content-show">
                        <div class="">
                            <h4 class="heading pb-3">
                                New post - Donation receipt invoice
                                <img
                                    [src]="headingTooltipIcon"
                                    alt="Calendar Icon"
                                    class=""
                                />
                            </h4>

                            <div class="new-contribution-content-box">
                                <h6>Basic setting</h6>
                                <p>
                                    MB0001 membership fee normal fee - no
                                    department
                                </p>
                            </div>

                            <div class="new-contribution-content-box">
                                <h6>Payment terms and calculation</h6>
                                <p>
                                    Payment term 7 days - no pro rata
                                    calculation
                                </p>
                            </div>

                            <div class="new-contribution-content-box">
                                <h6>Interval, billing period and due date</h6>
                                <p>
                                    Annual Interval - Due 5 days after the start
                                    of the interval
                                </p>
                            </div>

                            <div class="new-contribution-content-box border-0">
                                <h6>
                                    Basic amount, tax, accounts and cost center
                                </h6>
                                <p>
                                    120 EUR, no tax income account 40000-asset
                                    account 18000 cost center 11000
                                </p>
                            </div>

                            <div class="new-contribution-content-form-wrap ">
                                <div class="donation-receipt-invoice-area">
                                    <h4 class="fs-18 font-rubik font-medium">
                                        Donation receipt invoice
                                    </h4>
                                    <p class="font-rubik">
                                        Here you can set whether an invoice is
                                        automatically created when the claim is
                                        created or whether a donation receipt is
                                        automatically created when the incoming
                                        payment is recorded
                                    </p>
                                </div>
                                <div class="d-flex gap-4">
                                    <!-- Selection invoice -->
                                    <div class="w-100">
                                        <p class="form-label fw-normal">
                                            Selection invoice
                                            <span class="text-red">*</span>
                                        </p>

                                        <mat-form-field
                                            class="w-100 bg-white font-rubik"
                                        >
                                            <mat-label
                                                class="font-rubik d-flex gap-2 align-items-center"
                                            >
                                                <img
                                                    [src]="numberIcon"
                                                    alt="Calendar Icon"
                                                    class=""
                                                />
                                                Select Field
                                            </mat-label>
                                            <mat-select
                                                class="font-rubik"
                                                formControlName="calculationMethod"
                                            >
                                                <mat-option
                                                    value="working-hours"
                                                >
                                                    Working Hours
                                                </mat-option>
                                                <mat-option
                                                    value="electricity-usage"
                                                >
                                                    Electricity Usage
                                                </mat-option>
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                                <!-- Result -->
                            </div>
                        </div>
                    </div>

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
            </mat-step>

            <!-- Icon overrides. -->
            <!-- <ng-template matStepperIcon="phone">
        <mat-icon>call_end</mat-icon>
      </ng-template>
      <ng-template matStepperIcon="chat">
        <mat-icon>forum</mat-icon>
      </ng-template> -->
        </mat-stepper>
    `,
    styles: `
      .donation-receipt-invoice-area h4 {
        font-size: 18px;
        font-weight: 500;
        color: #000000;
        margin-bottom: 4px;
        line-height: 1.55;
      }
      .donation-receipt-invoice-area p {
        font-size: 14px;
        font-weight: 400;
        color: #5A5A5A;
        line-height: 1.71;
        margin-bottom: 16px;
      }
    `,
})
export class FinalizationStepComponent {
    contribution_id: number | null = null;
    post_id: number | null = null;

    numberIcon = 'assets/images/contribution-id-icon.svg';
    calendarDateIcon = 'assets/images/due-date-icon.svg';
    clockIcon = 'assets/images/clock-icon.svg';
    profileUser = 'assets/images/profile-2user.svg';
    intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';

    headingTooltipIcon = 'assets/images/heading-tooltip-icon.svg';
    selectedValue: string | null = null;

    // onSelectionChange() {
    //   console.log('Selected option:', this.selectedValue);
    // }

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
}
