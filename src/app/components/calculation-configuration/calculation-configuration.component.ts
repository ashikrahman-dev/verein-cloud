import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
    selector: 'app-calculation-configuration',
    standalone: true,
    imports: [
        MatStepperModule,
        MatSelectModule,
        ReactiveFormsModule,
        CommonModule,
    ],
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
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            <img
                                [src]="numberIcon"
                                alt="Calendar Icon"
                                class=""
                            />
                            Select value
                        </mat-label>
                        <mat-select
                            class="font-rubik"
                            formControlName="calculationMethod"
                            (selectionChange)="
                                onCalculationMethodChange($event)
                            "
                        >
                            <mat-option value="fixed-value">
                                Fixed Value – A static contribution amount
                            </mat-option>
                            <mat-option value="free-field-value">
                                Free Field Value - Contribution is determined
                                based on free field variables (e.g. work hours,
                                usage, member status)
                            </mat-option>
                            <mat-option value="variable-value">
                                Variable Value - Use formulas to calculate
                                contributions dynamically
                            </mat-option>
                        </mat-select>
                    </mat-form-field>

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
                    <!-- Fixed Value Content - start -->
                    <div
                        *ngIf="selectedCalculationMethod === 'fixed-value'"
                        class=""
                    >
                        <div class="fixed-value-content-show">
                            <h4 class="heading pb-3">
                                New Contribution - Basic Amount, Tax, Accounts
                                and Cost Center
                                <img
                                    [src]="headingTooltipIcon"
                                    alt="Calendar Icon"
                                    class=""
                                />
                            </h4>

                            <div class="new-contribution-content-box">
                                <h6>Basic Settings</h6>
                                <p>
                                    MB0001 - Membership Fee - Normal
                                    Contribution - No Department
                                </p>
                            </div>

                            <div class="new-contribution-content-box">
                                <h6>Interval, billing period and due date</h6>
                                <p>
                                    Annual Interval - Due 5 days after the start
                                    of the interval
                                </p>
                            </div>

                            <div class="new-contribution-content-box">
                                <h6>Payment Term and Calculation</h6>
                                <p>
                                    Payment Term 7 Days - No Pro-Rata
                                    Calculation
                                </p>
                            </div>

                            <div class="new-contribution-content-box">
                                <h6>
                                    Basic Amount, Tax, Accounts and Cost Center
                                </h6>
                                <p>
                                    The basic amount determines the contribution
                                    amount for the billing period. The tax rate
                                    determines whether sales tax is levied on
                                    the contribution. The contribution is posted
                                    to the specified revenue account. The active
                                    account determines from which bank account
                                    the contribution is collected. Optionally, a
                                    cost center can be assigned.
                                </p>
                            </div>

                            <div class="new-contribution-content-form-wrap">
                                <div class="d-flex gap-4">
                                    <!-- Basic Amount -->
                                    <div class="w-100">
                                        <p class="form-label fw-normal">
                                            Basic Amount (€)
                                        </p>
                                        <input
                                            matInput
                                            type="number"
                                            [formControl]="basicAmountControl"
                                            class="form-input-field font-rubik remove-icon-cls basic-amount-cls"
                                            placeholder="69"
                                            (input)="calculateResult()"
                                        />
                                    </div>
                                    <!-- Tax -->
                                    <div class="w-100">
                                        <p class="form-label fw-normal">
                                            Tax (%)
                                        </p>
                                        <input
                                            matInput
                                            type="number"
                                            [formControl]="taxPercentageControl"
                                            class="form-input-field font-rubik remove-icon-cls"
                                            placeholder="19"
                                            (input)="calculateResult()"
                                        />
                                    </div>
                                </div>

                                <!-- Result -->
                                <div>
                                    <div class="new-contribution-result w-100">
                                        <h4>Result :</h4>
                                        <p>
                                            <span>€</span>
                                            {{ calculatedResult.toFixed(2) }}
                                        </p>
                                    </div>
                                </div>
                                <!-- Result -->
                            </div>
                        </div>
                    </div>
                    <!-- Fixed Value Content - end -->

                    <!-- Free field Value Content - start -->
                    <div
                        class="when-free-field-value"
                        *ngIf="selectedCalculationMethod === 'free-field-value'"
                    >
                        <div class="fixed-value-content-show">
                            <h4 class="heading pb-3">
                                New Contribution - Basic Amount, Tax, Accounts
                                and Cost Center
                                <img
                                    [src]="headingTooltipIcon"
                                    alt="Calendar Icon"
                                    class=""
                                />
                            </h4>

                            <div class="new-contribution-content-box">
                                <h6>Basic Settings</h6>
                                <p>
                                    MB0001 - Membership Fee - Normal
                                    Contribution - No Department
                                </p>
                            </div>

                            <div class="new-contribution-content-box">
                                <h6>Interval, billing period and due date</h6>
                                <p>
                                    Annual Interval - Due 5 days after the start
                                    of the interval
                                </p>
                            </div>

                            <div class="new-contribution-content-box">
                                <h6>Payment Term and Calculation</h6>
                                <p>
                                    Payment Term 7 Days - No Pro-Rata
                                    Calculation
                                </p>
                            </div>

                            <div class="new-contribution-content-box">
                                <h6>
                                    Basic Amount, Tax, Accounts and Cost Center
                                </h6>
                                <p>
                                    The basic amount determines the contribution
                                    amount for the billing period. The tax rate
                                    determines whether sales tax is levied on
                                    the contribution. The contribution is posted
                                    to the specified revenue account. The active
                                    account determines from which bank account
                                    the contribution is collected. Optionally, a
                                    cost center can be assigned.
                                </p>
                            </div>

                            <div class="new-contribution-content-form-wrap ">
                                <div class="d-flex gap-4">
                                    <!-- Free Field Name -->
                                    <div class="w-100">
                                        <p class="form-label fw-normal">
                                            Free Field Name
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
                                    <!-- Duration -->
                                    <div class="w-100">
                                        <p class="form-label fw-normal">
                                            Duration
                                        </p>
                                        <input
                                            matInput
                                            type="number"
                                            class="form-input-field font-rubik remove-icon-cls"
                                            placeholder="0"
                                            value="8"
                                        />
                                    </div>
                                </div>

                                <!-- Result -->
                            </div>
                        </div>
                    </div>
                    <!-- Free field Value Content - end -->

                    <!-- Variable Value Content - start -->
                    <div
                        class="when-free-field-value fixed-value-content-show"
                        *ngIf="selectedCalculationMethod === 'variable-value'"
                    >
                        <h4 class="heading">
                            Selecting the Applying Conditional Logic
                            <img
                                [src]="headingTooltipIcon"
                                alt="Calendar Icon"
                                class=""
                            />
                        </h4>
                        <h5 class="form-label pt-2 mt-3 fw-medium">
                            Select Calculation Method
                        </h5>

                        <div class="calculation-configuration-step">
                            <!-- 1 Item -->
                            <div class="w-100">
                                <p class="form-label fw-normal">
                                    Function <span class="text-red">*</span>
                                </p>
                                <mat-form-field
                                    class="w-100 bg-white font-rubik"
                                >
                                    <mat-label
                                        class="font-rubik d-flex gap-2 align-items-center"
                                    >
                                        Select Function
                                    </mat-label>
                                    <mat-select
                                        class="font-rubik"
                                        (selectionChange)="
                                            onFunctionChange($event)
                                        "
                                    >
                                        <mat-option value="if_condition_wenn">
                                            "IF" Condition (WENN)
                                        </mat-option>
                                        <mat-option
                                            value="and_condition_wenn_und"
                                        >
                                            "AND" Condition (WENN UND)
                                        </mat-option>
                                        <mat-option
                                            value="or_condition_wenn_oder"
                                        >
                                            "OR" Condition (WENN ODER)
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>

                            <!--  2 Item -->
                            <div class="w-100">
                                <p class="form-label fw-normal">
                                    If <span class="text-red">*</span>
                                </p>
                                <mat-form-field
                                    class="w-100 bg-white font-rubik"
                                >
                                    <mat-label
                                        class="font-rubik d-flex gap-2 align-items-center"
                                    >
                                        Select Field
                                    </mat-label>
                                    <mat-select class="font-rubik">
                                        <mat-option value="if_department">
                                            Department
                                        </mat-option>
                                        <mat-option value="if_option_200">
                                            200
                                        </mat-option>
                                        <mat-option value="if_option_300">
                                            300
                                        </mat-option>
                                        <mat-option value="if_option_400">
                                            400
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>

                            <!-- 3 Item -->
                            <div class="w-100">
                                <p class="form-label fw-normal">
                                    Operator <span class="text-red">*</span>
                                </p>
                                <mat-form-field
                                    class="w-100 bg-white font-rubik"
                                >
                                    <mat-label
                                        class="font-rubik d-flex gap-2 align-items-center"
                                    >
                                        Select Operator
                                    </mat-label>
                                    <mat-select
                                        class="font-rubik"
                                        formControlName="operator"
                                    >
                                        <mat-option value="operator_option_1">
                                            >=
                                        </mat-option>
                                        <mat-option value="operator_option_2">
                                            >
                                        </mat-option>
                                        <mat-option value="operator_option_3">
                                            <
                                        </mat-option>
                                        <mat-option value="operator_option_4">
                                            <=
                                        </mat-option>
                                        <mat-option value="operator_option_5">
                                            =
                                        </mat-option>
                                        <mat-option value="operator_option_6">
                                            <>
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>

                            <!-- 5 Item -->
                            <div
                                class="w-100"
                                *ngIf="selectedFunction === 'if_condition_wenn'"
                            >
                                <p class="form-label fw-normal">
                                    And <span class="text-red">*</span>
                                </p>
                                <mat-form-field
                                    class="w-100 bg-white font-rubik"
                                >
                                    <mat-label
                                        class="font-rubik d-flex gap-2 align-items-center"
                                    >
                                        Select field
                                    </mat-label>
                                    <mat-select class="font-rubik">
                                        <mat-option value="and_club_status">
                                            Club Status
                                        </mat-option>
                                        <mat-option value="or_member_number">
                                            Member number
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>

                            <!-- 5 OR Item -->
                            <div class="w-100">
                                <p class="form-label fw-normal">
                                    Or <span class="text-red">*</span>
                                </p>
                                <mat-form-field
                                    class="w-100 bg-white font-rubik"
                                >
                                    <mat-label
                                        class="font-rubik d-flex gap-2 align-items-center"
                                    >
                                        Select field
                                    </mat-label>
                                    <mat-select class="font-rubik">
                                        <mat-option value="or_member_number">
                                            Member number
                                        </mat-option>
                                        <mat-option value="and_club_status">
                                            Club Status
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                    <!-- Variable Value Content - start -->

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
                    <h4
                        class="heading pb-28 mb-0 d-flex gap-2 align-items-center"
                    >
                        Assigning Financial Accounts
                        <img
                            [src]="headingTooltipIcon"
                            alt="Calendar Icon"
                            class=""
                        />
                    </h4>
                    <p class="form-label pt-0 mt-0 pb-4">
                        Select Financial Accounts
                    </p>
                    <div class="basic-data-contribution-form">
                        <!-- Revenue Account  -->
                        <div>
                            <p class="form-label">
                                Revenue Account
                                <span class="text-red">*</span>
                            </p>
                            <mat-form-field class="w-100 bg-white font-rubik">
                                <mat-label
                                    class="font-rubik d-flex gap-2 align-items-center"
                                >
                                    {{ '9669 3696 3695' }}
                                </mat-label>
                                <mat-select class="font-rubik">
                                    <mat-option value="revenue-account-one">
                                        9669 3696 3695
                                    </mat-option>
                                    <mat-option value="revenue-account-two">
                                        9825 2357 4875
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <!-- Activity Account  -->
                        <div>
                            <p class="form-label">
                                Activity Account
                                <span class="text-red">*</span>
                            </p>
                            <mat-form-field class="w-100 bg-white font-rubik">
                                <mat-label
                                    class="font-rubik d-flex gap-2 align-items-center"
                                >
                                    {{ '18000' }}
                                </mat-label>
                                <mat-select class="font-rubik">
                                    <mat-option value="activity-account-one">
                                        18000
                                    </mat-option>
                                    <mat-option value="activity-account-two">
                                        25500
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <!-- Cost Centers 1 -->
                        <div>
                            <p class="form-label">Cost Centers 1</p>
                            <input
                                placeholder="1000"
                                class="form-input-field font-rubik remove-icon-cls"
                            />
                        </div>
                        <!-- Cost Centers 2 -->
                        <div>
                            <p class="form-label">Cost Centers 2</p>
                            <input
                                placeholder="1000"
                                class="form-input-field font-rubik remove-icon-cls"
                            />
                        </div>
                    </div>

                    <!-- Booking Text   -->
                    <div class="w-100 mt-4 pt-1">
                        <p class="form-label">Booking Text</p>
                        <input
                            placeholder="[Association]    [Last Name]    [First Name]    [Contribution]    [Period]"
                            class="form-input-field font-rubik remove-icon-cls"
                        />
                    </div>

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
export class CalculationConfigurationComponent implements OnInit {
    // Required asset paths
    numberIcon = 'assets/images/due-date-icon.svg';
    headingTooltipIcon = 'assets/images/heading-tooltip-icon.svg';

    // Form controls
    stepTwoForm = new FormGroup({
        calculationMethod: new FormControl('', [Validators.required]),
    });

    // Individual form controls for Step 3
    basicAmountControl = new FormControl(69, [Validators.required]);
    taxPercentageControl = new FormControl(19, [Validators.required]);

    // Track selected calculation method
    selectedCalculationMethod: string = '';

    // Result calculation
    calculatedResult: number = 0;

    ngOnInit(): void {
        // Set default calculation method
        this.stepTwoForm.get('calculationMethod')?.setValue('fixed-value');
        this.selectedCalculationMethod = 'fixed-value';

        // Calculate initial result with default values
        this.calculateResult();
    }

    // Handle calculation method selection change
    onCalculationMethodChange(event: any): void {
        this.selectedCalculationMethod = event.value;
        // Recalculate result when calculation method changes
        if (this.selectedCalculationMethod === 'fixed-value') {
            this.calculateResult();
        }
    }

    // Calculate result based on formula: Basic Amount + (Basic Amount * Tax / 100)
    calculateResult(): void {
        const basicAmount = this.basicAmountControl.value || 0;
        const taxPercentage = this.taxPercentageControl.value || 0;

        const taxAmount = (basicAmount * taxPercentage) / 100;
        this.calculatedResult = basicAmount + taxAmount;
    }

    // Track selected function in variable-value mode
    selectedFunction: string = '';
    // Handle function selection change in variable-value mode
    onFunctionChange(event: any): void {
        this.selectedFunction = event.value;
    }
}
