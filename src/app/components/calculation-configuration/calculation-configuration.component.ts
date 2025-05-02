import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    inject,
    OnInit,
    ViewChild,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

import { ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
    selector: 'app-calculation-configuration',
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
        MatDatepickerModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <mat-stepper
            #stepper
            [linear]="isLinear"
            class="contribution-basic-data-step-wrap payment-terms-calculation-wrap calculation-configuration-wrapper"
        >
            <!-- Step 1 -->
            <mat-step label="Step 1" [stepControl]="stepOneForm">
                <form [formGroup]="stepOneForm">
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
                </form>
            </mat-step>

            <!-- Step 2 -->
            <mat-step label="Step 2" [stepControl]="stepTwoForm">
                <form [formGroup]="stepTwoForm">
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
                                {{ getCalculationMethodDisplayValue() }}
                            </mat-label>
                            <mat-select
                                class="font-rubik"
                                formControlName="calculationMethod"
                            >
                                <mat-option value="fixed-value">
                                    Fixed Value – A static contribution amount
                                </mat-option>
                                <mat-option value="free-field-value">
                                    Free Field Value - Contribution is
                                    determined based on free field variables
                                    (e.g. work hours, usage, member status)
                                </mat-option>
                                <mat-option value="variable-value">
                                    Variable Value - Use formulas to calculate
                                    contributions dynamically
                                </mat-option>
                            </mat-select>
                            <mat-error
                                *ngIf="
                                    stepTwoForm
                                        .get('calculationMethod')
                                        ?.hasError('required')
                                "
                            >
                                Calculation method is required
                            </mat-error>
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
                </form>
            </mat-step>

            <!-- Step 3 -->
            <mat-step label="Step 3" [stepControl]="stepThreeForm">
                <form [formGroup]="stepThreeForm">
                    <div class="basic-data-contribution">
                        <!-- Fixed Value Content - start -->
                        <div
                            *ngIf="
                                stepTwoForm.get('calculationMethod')?.value ===
                                'fixed-value'
                            "
                            class="fixed-value-content-show"
                        >
                            <div class="">
                                <h4 class="heading pb-3">
                                    New Contribution - Basic Amount, Tax,
                                    Accounts and Cost Center
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
                                    <h6>
                                        Interval, billing period and due date
                                    </h6>
                                    <p>
                                        Annual Interval - Due 5 days after the
                                        start of the interval
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
                                        Basic Amount, Tax, Accounts and Cost
                                        Center
                                    </h6>
                                    <p>
                                        The basic amount determines the
                                        contribution amount for the billing
                                        period. The tax rate determines whether
                                        sales tax is levied on the contribution.
                                        The contribution is posted to the
                                        specified revenue account. The active
                                        account determines from which bank
                                        account the contribution is collected.
                                        Optionally, a cost center can be
                                        assigned.
                                    </p>
                                </div>

                                <div
                                    class="new-contribution-content-form-wrap "
                                >
                                    <div class="d-flex gap-4">
                                        <!-- Basic Amount -->
                                        <div class="w-100">
                                            <p class="form-label fw-normal">
                                                Basic Amount (€)
                                            </p>
                                            <input
                                                matInput
                                                type="number"
                                                formControlName="basicAmount"
                                                class="form-input-field font-rubik remove-icon-cls basic-amount-cls"
                                                placeholder="0"
                                                (input)="calculateTotal()"
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
                                                formControlName="taxPercentage"
                                                class="form-input-field font-rubik remove-icon-cls"
                                                placeholder="19"
                                                (input)="calculateTotal()"
                                            />
                                        </div>
                                    </div>

                                    <!-- Result -->
                                    <div>
                                        <div
                                            class="new-contribution-result w-100"
                                        >
                                            <h4>Result :</h4>
                                            <p>
                                                <span>€</span>
                                                {{
                                                    totalAmount
                                                        | number : '1.2-2'
                                                }}
                                                <!-- Total result is here -->
                                            </p>
                                        </div>
                                    </div>
                                    <!-- Result -->

                                    <!-- Result -->
                                </div>
                            </div>
                        </div>
                        <!-- Fixed Value Content - end -->

                        <!-- Free field Value Content - start -->
                        <div
                            *ngIf="
                                stepTwoForm.get('calculationMethod')?.value ===
                                'free-field-value'
                            "
                            class="fixed-value-content-show"
                        >
                            <div class="">
                                <h4 class="heading pb-3">
                                    New Contribution - Basic Amount, Tax,
                                    Accounts and Cost Center
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
                                    <h6>
                                        Interval, billing period and due date
                                    </h6>
                                    <p>
                                        Annual Interval - Due 5 days after the
                                        start of the interval
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
                                        Basic Amount, Tax, Accounts and Cost
                                        Center
                                    </h6>
                                    <p>
                                        The basic amount determines the
                                        contribution amount for the billing
                                        period. The tax rate determines whether
                                        sales tax is levied on the contribution.
                                        The contribution is posted to the
                                        specified revenue account. The active
                                        account determines from which bank
                                        account the contribution is collected.
                                        Optionally, a cost center can be
                                        assigned.
                                    </p>
                                </div>

                                <div
                                    class="new-contribution-content-form-wrap "
                                >
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
                            *ngIf="
                                stepTwoForm.get('calculationMethod')?.value ===
                                'variable-value'
                            "
                            class="fixed-value-content-show"
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
                                            {{
                                                getConditionFunctionDisplayValue()
                                            }}
                                        </mat-label>
                                        <mat-select
                                            formControlName="conditionFunction"
                                            class="font-rubik"
                                        >
                                            <mat-option
                                                value="if_condition_wenn"
                                            >
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
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('conditionFunction')
                                                    ?.hasError('required')
                                            "
                                        >
                                            Function is required
                                        </mat-error>
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
                                            {{ getIfOptionDisplayValue() }}
                                        </mat-label>
                                        <mat-select
                                            class="font-rubik"
                                            formControlName="ifOption"
                                        >
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
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('ifOption')
                                                    ?.hasError('required')
                                            "
                                        >
                                            If value is required
                                        </mat-error>
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
                                            {{ getOperatorDisplayValue() }}
                                        </mat-label>
                                        <mat-select
                                            class="font-rubik"
                                            formControlName="operator"
                                        >
                                            <mat-option
                                                value="operator_option_1"
                                            >
                                                >=
                                            </mat-option>
                                            <mat-option
                                                value="operator_option_2"
                                            >
                                                >
                                            </mat-option>
                                            <mat-option
                                                value="operator_option_3"
                                            >
                                                <
                                            </mat-option>
                                            <mat-option
                                                value="operator_option_4"
                                            >
                                                <=
                                            </mat-option>
                                            <mat-option
                                                value="operator_option_5"
                                            >
                                                =
                                            </mat-option>
                                            <mat-option
                                                value="operator_option_6"
                                            >
                                                <>
                                            </mat-option>
                                        </mat-select>
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('operator')
                                                    ?.hasError('required')
                                            "
                                        >
                                            Operator is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 4 Item -->
                                <div *ngIf="isAdvancedCondition()">
                                    <p class="form-label fw-normal">
                                        Value <span class="text-red">*</span>
                                    </p>
                                    <mat-form-field
                                        class="w-100 bg-white font-rubik"
                                    >
                                        <input
                                            matInput
                                            type="number"
                                            formControlName="conditionValue"
                                            placeholder="0"
                                        />
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('conditionValue')
                                                    ?.hasError('required')
                                            "
                                        >
                                            Value is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 5 Item -->
                                <div
                                    *ngIf="
                                        stepThreeForm.get('conditionFunction')
                                            ?.value === 'and_condition_wenn_und'
                                    "
                                    class="w-100"
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
                                            {{ getClubStatusDisplayValue() }}
                                        </mat-label>
                                        <mat-select
                                            class="font-rubik"
                                            formControlName="clubStatus"
                                        >
                                            <mat-option value="and_club_status">
                                                Club Status
                                            </mat-option>
                                            <mat-option
                                                value="or_member_number"
                                            >
                                                Member number
                                            </mat-option>
                                        </mat-select>
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('clubStatus')
                                                    ?.hasError('required') &&
                                                isAndCondition()
                                            "
                                        >
                                            Club status is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 5 OR Item -->
                                <div
                                    *ngIf="
                                        stepThreeForm.get('conditionFunction')
                                            ?.value === 'or_condition_wenn_oder'
                                    "
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Or <span class="text-red">*</span>
                                    </p>
                                    <mat-form-field
                                        class="w-100 bg-white font-rubik"
                                    >
                                        <mat-label
                                            class="font-rubik d-flex gap-2 align-items-center"
                                        >
                                            {{ getOrClubStatusDisplayValue() }}
                                        </mat-label>
                                        <mat-select
                                            class="font-rubik"
                                            formControlName="orClubStatus"
                                        >
                                            <mat-option
                                                value="or_member_number"
                                            >
                                                Member number
                                            </mat-option>
                                            <mat-option value="and_club_status">
                                                Club Status
                                            </mat-option>
                                        </mat-select>
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('andClubStatus')
                                                    ?.hasError('required') &&
                                                isAndCondition()
                                            "
                                        >
                                            Member number
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 6 Item -->
                                <div
                                    *ngIf="isAdvancedCondition()"
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Operator <span class="text-red">*</span>
                                    </p>
                                    <mat-form-field
                                        class="w-100 bg-white font-rubik"
                                    >
                                        <mat-label
                                            class="font-rubik d-flex gap-2 align-items-center"
                                        >
                                            {{
                                                getSecondOperatorDisplayValue()
                                            }}
                                        </mat-label>
                                        <mat-select
                                            class="font-rubik"
                                            formControlName="secondOperator"
                                        >
                                            <mat-option value="operator_active">
                                                Active
                                            </mat-option>
                                            <mat-option
                                                value="operator_passive"
                                            >
                                                Passive</mat-option
                                            >
                                            <mat-option
                                                value="operator_none_zero"
                                            >
                                                None zero
                                            </mat-option>
                                            <mat-option value="operator_zero">
                                                Zero
                                            </mat-option>
                                        </mat-select>
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('secondOperator')
                                                    ?.hasError('required') &&
                                                isAdvancedCondition()
                                            "
                                        >
                                            Operator is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 7 Item -->
                                <div>
                                    <p class="form-label fw-normal">
                                        Value <span class="text-red">*</span>
                                    </p>
                                    <mat-form-field
                                        class="w-100 bg-white font-rubik"
                                    >
                                        <input
                                            matInput
                                            type="number"
                                            formControlName="valueId"
                                            placeholder="0"
                                        />
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('valueId')
                                                    ?.hasError('required')
                                            "
                                        >
                                            Value is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 8 Item -->
                                <div
                                    *ngIf="
                                        stepThreeForm.get('conditionFunction')
                                            ?.value === 'if_condition_wenn' ||
                                        stepThreeForm.get('conditionFunction')
                                            ?.value === null
                                    "
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Formula <span class="text-red">*</span>
                                    </p>
                                    <mat-form-field
                                        class="w-100 bg-white font-rubik"
                                    >
                                        <input
                                            matInput
                                            type="text"
                                            formControlName="formula"
                                            placeholder="[FF space size] 1.5"
                                            value="[FF space size] 1.5"
                                        />
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('formula')
                                                    ?.hasError('required')
                                            "
                                        >
                                            Formula is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 8 Item -->
                                <div
                                    *ngIf="
                                        stepThreeForm.get('conditionFunction')
                                            ?.value ===
                                            'and_condition_wenn_und' ||
                                        stepThreeForm.get('conditionFunction')
                                            ?.value === 'or_condition_wenn_oder'
                                    "
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Formula <span class="text-red">*</span>
                                    </p>
                                    <mat-form-field
                                        class="w-100 bg-white font-rubik"
                                    >
                                        <input
                                            matInput
                                            type="text"
                                            formControlName="formula"
                                            placeholder="[FF space size] 2.0"
                                            value="[FF space size] 2.0"
                                        />
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('formula')
                                                    ?.hasError('required')
                                            "
                                        >
                                            Formula is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 9 Item -->
                                <div
                                    *ngIf="
                                        stepThreeForm.get('conditionFunction')
                                            ?.value === 'if_condition_wenn' ||
                                        stepThreeForm.get('conditionFunction')
                                            ?.value === null
                                    "
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Other Formula
                                        <span class="text-red">*</span>
                                    </p>
                                    <mat-form-field
                                        class="w-100 bg-white font-rubik"
                                    >
                                        <input
                                            matInput
                                            type="text"
                                            formControlName="otherFormula"
                                            placeholder="[FF space size] 1.2"
                                            value="[FF space size] 1.2"
                                        />
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('otherFormula')
                                                    ?.hasError('required')
                                            "
                                        >
                                            Other formula is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 9 Item -->
                                <div
                                    *ngIf="
                                        stepThreeForm.get('conditionFunction')
                                            ?.value ===
                                            'and_condition_wenn_und' ||
                                        stepThreeForm.get('conditionFunction')
                                            ?.value === 'or_condition_wenn_oder'
                                    "
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Other Formula
                                        <span class="text-red">*</span>
                                    </p>
                                    <mat-form-field
                                        class="w-100 bg-white font-rubik"
                                    >
                                        <input
                                            matInput
                                            type="text"
                                            formControlName="otherFormula"
                                            placeholder="[FF space size] 1.5"
                                            value="[FF space size] 1.5"
                                        />
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('otherFormula')
                                                    ?.hasError('required')
                                            "
                                        >
                                            Other formula is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>

                                <!-- 10 Item -->
                                <div class="w-100">
                                    <p class="form-label fw-normal">
                                        Tax <span class="text-red">*</span>
                                    </p>
                                    <mat-form-field
                                        class="w-100 bg-white font-rubik"
                                    >
                                        <mat-label
                                            class="font-rubik d-flex gap-2 align-items-center"
                                        >
                                            {{ getTaxDisplayValue() }}
                                        </mat-label>
                                        <mat-select
                                            class="font-rubik"
                                            formControlName="tax"
                                        >
                                            <mat-option value="tax_number_no">
                                                No
                                            </mat-option>
                                            <mat-option value="tax_number_yes">
                                                Yes</mat-option
                                            >
                                        </mat-select>
                                        <mat-error
                                            *ngIf="
                                                stepThreeForm
                                                    .get('tax')
                                                    ?.hasError('required')
                                            "
                                        >
                                            Tax selection is required
                                        </mat-error>
                                    </mat-form-field>
                                </div>
                            </div>
                        </div>
                        <!-- Variable Value Content - end -->

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
                </form>
            </mat-step>

            <!-- Step 4 -->
            <mat-step label="Step 4" [stepControl]="stepFourForm">
                <form [formGroup]="stepFourForm">
                    <div class="basic-data-contribution">
                        <h4 class="heading">Assigning Financial Accounts</h4>

                        <!-- Button group -->
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
    private _formBuilder = inject(FormBuilder);
    private _cdr = inject(ChangeDetectorRef); // Add ChangeDetectorRef injection

    // Setting isLinear to true to ensure step validation
    isLinear = true;

    // Property to store the calculated total amount
    totalAmount: number = 0;

    // Required asset paths
    numberIcon = 'assets/images/due-date-icon.svg';
    intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
    calendarDateIcon = 'assets/images/calendar-edit.svg';
    textalignIcon = 'assets/images/textalign-justifycenter.svg';
    headingTooltipIcon = 'assets/images/heading-tooltip-icon.svg';

    // Form groups for each step
    stepOneForm: FormGroup = this._formBuilder.group({
        // Step 1 doesn't have any required fields in this example,
        // but we need to define it for proper step validation
        introStep: [''],
    });

    stepTwoForm: FormGroup = this._formBuilder.group({
        calculationMethod: ['fixed-value', Validators.required], // Default to 'fixed-value'
    });

    stepThreeForm: FormGroup = this._formBuilder.group({
        // For fixed-value calculation
        basicAmount: [69, [Validators.required, Validators.min(0)]], // Default value 69
        taxPercentage: [
            19,
            [Validators.required, Validators.min(0), Validators.max(100)],
        ], // Default value 19%

        // For other calculation methods (initialized with null or empty values)
        conditionFunction: [null],
        ifOption: [null],
        operator: [null],
        conditionValue: [null],
        clubStatus: [null],
        orClubStatus: [null],
        secondOperator: [null],
        valueId: [null],
        formula: [null],
        otherFormula: [null],
        tax: [null],
    });

    stepFourForm: FormGroup = this._formBuilder.group({
        revenueAccount: ['', Validators.required],
        activityAccount: ['', Validators.required],
        costCenter: ['', Validators.required],
    });

    @ViewChild(MatStepper) stepper!: MatStepper;

    ngOnInit() {
        // Calculate the initial total based on default values
        this.calculateTotal();

        // Log initial values to confirm they are set
        console.log(
            'Initial basic amount:',
            this.stepThreeForm.get('basicAmount')?.value
        );
        console.log(
            'Initial tax percentage:',
            this.stepThreeForm.get('taxPercentage')?.value
        );
        console.log('Initial total amount:', this.totalAmount);

        // Set up conditional validators based on selected calculation method
        this.stepTwoForm
            .get('calculationMethod')
            ?.valueChanges.subscribe((value) => {
                console.log('Calculation method changed to:', value);

                if (value === 'fixed-value') {
                    // Make sure to calculate when showing the form
                    this.calculateTotal();
                    this._cdr.detectChanges(); // Force change detection
                }

                // Set appropriate validators based on calculation method
                this.updateFormValidators(value);
            });

        // Watch for changes in both basic amount and tax fields
        this.stepThreeForm
            .get('basicAmount')
            ?.valueChanges.subscribe((value) => {
                console.log('Basic amount changed to:', value);
                this.calculateTotal();
                this._cdr.detectChanges(); // Force change detection
            });

        this.stepThreeForm
            .get('taxPercentage')
            ?.valueChanges.subscribe((value) => {
                console.log('Tax percentage changed to:', value);
                this.calculateTotal();
                this._cdr.detectChanges(); // Force change detection
            });

        // Set up conditional validators based on selected condition function
        this.stepThreeForm
            .get('conditionFunction')
            ?.valueChanges.subscribe((value) => {
                this.updateConditionValidators(value);
            });
    }

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
                const stepHeader =
                    document.querySelectorAll('.mat-step-header')[i];
                if (stepHeader) {
                    stepHeader.classList.add('previous-step');
                }
            }

            // Recalculate total when moving to step 3
            if (
                event.selectedIndex === 2 &&
                this.stepTwoForm.get('calculationMethod')?.value ===
                    'fixed-value'
            ) {
                this.calculateTotal();
                this._cdr.detectChanges(); // Force change detection
            }
        });
    }

    // Helper method to update form validators based on calculation method
    private updateFormValidators(calculationMethod: string) {
        if (calculationMethod === 'fixed-value') {
            // Set validators for fixed value calculation
            this.stepThreeForm
                .get('basicAmount')
                ?.setValidators([Validators.required, Validators.min(0)]);
            this.stepThreeForm
                .get('taxPercentage')
                ?.setValidators([
                    Validators.required,
                    Validators.min(0),
                    Validators.max(100),
                ]);

            // Clear validators for other calculation methods
            this.stepThreeForm.get('conditionFunction')?.clearValidators();
            this.stepThreeForm.get('ifOption')?.clearValidators();
            this.stepThreeForm.get('operator')?.clearValidators();
            this.stepThreeForm.get('valueId')?.clearValidators();
            this.stepThreeForm.get('formula')?.clearValidators();
            this.stepThreeForm.get('otherFormula')?.clearValidators();
            this.stepThreeForm.get('tax')?.clearValidators();
        } else {
            // Set validators for other calculation methods
            this.stepThreeForm
                .get('conditionFunction')
                ?.setValidators([Validators.required]);
            this.stepThreeForm
                .get('ifOption')
                ?.setValidators([Validators.required]);
            this.stepThreeForm
                .get('operator')
                ?.setValidators([Validators.required]);
            this.stepThreeForm
                .get('valueId')
                ?.setValidators([Validators.required]);
            this.stepThreeForm
                .get('formula')
                ?.setValidators([Validators.required]);
            this.stepThreeForm
                .get('otherFormula')
                ?.setValidators([Validators.required]);
            this.stepThreeForm.get('tax')?.setValidators([Validators.required]);

            // Clear validators for fixed value calculation
            this.stepThreeForm.get('basicAmount')?.clearValidators();
            this.stepThreeForm.get('taxPercentage')?.clearValidators();
        }

        // Update validity for all form controls
        Object.keys(this.stepThreeForm.controls).forEach((key) => {
            this.stepThreeForm.get(key)?.updateValueAndValidity();
        });
    }

    // Helper method to update condition validators
    private updateConditionValidators(conditionFunction: string) {
        const conditionValueControl = this.stepThreeForm.get('conditionValue');
        const clubStatusControl = this.stepThreeForm.get('clubStatus');
        const orClubStatusControl = this.stepThreeForm.get('orClubStatus');
        const secondOperatorControl = this.stepThreeForm.get('secondOperator');

        if (
            conditionFunction === 'and_condition_wenn_und' ||
            conditionFunction === 'or_condition_wenn_oder'
        ) {
            conditionValueControl?.setValidators([Validators.required]);
            secondOperatorControl?.setValidators([Validators.required]);

            if (conditionFunction === 'and_condition_wenn_und') {
                clubStatusControl?.setValidators([Validators.required]);
                orClubStatusControl?.clearValidators();
            } else if (conditionFunction === 'or_condition_wenn_oder') {
                orClubStatusControl?.setValidators([Validators.required]);
                clubStatusControl?.clearValidators();
            }
        } else {
            conditionValueControl?.clearValidators();
            clubStatusControl?.clearValidators();
            orClubStatusControl?.clearValidators();
            secondOperatorControl?.clearValidators();
        }

        conditionValueControl?.updateValueAndValidity();
        clubStatusControl?.updateValueAndValidity();
        orClubStatusControl?.updateValueAndValidity();
        secondOperatorControl?.updateValueAndValidity();
    }

    // Calculate the total amount (Basic Amount + Tax)
    calculateTotal() {
        const basicAmount =
            parseFloat(this.stepThreeForm.get('basicAmount')?.value) || 0;
        const taxPercentage =
            parseFloat(this.stepThreeForm.get('taxPercentage')?.value) || 0;

        // Calculate tax amount
        const taxAmount = (basicAmount * taxPercentage) / 100;

        // Calculate total (basic amount + tax amount)
        this.totalAmount = basicAmount + taxAmount;

        console.log('Calculated total:', this.totalAmount);
    }

    // Helper methods for display values in select controls
    getCalculationMethodDisplayValue(): string {
        const value = this.stepTwoForm?.get('calculationMethod')?.value;
        switch (value) {
            case 'fixed-value':
                return 'Fixed Value – A static contribution amount';
            case 'free-field-value':
                return 'Free Field Value';
            case 'variable-value':
                return 'Variable Value';
            default:
                return 'Select Calculation Method';
        }
    }

    getConditionFunctionDisplayValue(): string {
        const value = this.stepThreeForm?.get('conditionFunction')?.value;
        switch (value) {
            case 'if_condition_wenn':
                return '"IF" Condition (WENN)';
            case 'and_condition_wenn_und':
                return '"AND" Condition (WENN UND)';
            case 'or_condition_wenn_oder':
                return '"OR" Condition (WENN ODER)';
            default:
                return 'Select Function';
        }
    }

    getIfOptionDisplayValue(): string {
        const value = this.stepThreeForm?.get('ifOption')?.value;
        switch (value) {
            case 'if_option_100':
                return '100';
            case 'if_option_200':
                return '200';
            case 'if_option_300':
                return '300';
            case 'if_option_400':
                return '400';
            default:
                return 'Select Number';
        }
    }

    getOperatorDisplayValue(): string {
        const value = this.stepThreeForm?.get('operator')?.value;
        switch (value) {
            case 'operator_option_1':
                return '>=';
            case 'operator_option_2':
                return '>';
            case 'operator_option_3':
                return '<';
            case 'operator_option_4':
                return '<=';
            case 'operator_option_5':
                return '=';
            case 'operator_option_6':
                return '<>';
            default:
                return 'Select Operator';
        }
    }

    getClubStatusDisplayValue(): string {
        const value = this.stepThreeForm?.get('clubStatus')?.value;
        switch (value) {
            case 'club_status_1':
                return 'Club Status';
            case 'club_status_2':
                return 'Club Status 1';
            case 'club_status_3':
                return 'Club Status 2';
            default:
                return 'Club Status';
        }
    }

    getOrClubStatusDisplayValue(): string {
        const value = this.stepThreeForm?.get('orClubStatus')?.value;
        switch (value) {
            case 'and_club_status':
                return 'Club Status';
            case 'or_member_number':
                return 'Member number';
            default:
                return 'Club Status';
        }
    }

    getAndClubStatusDisplayValue(): string {
        const value = this.stepThreeForm?.get('andClubStatus')?.value;
        switch (value) {
            case 'or_member_number':
                return 'Member number';
            case 'and_club_status':
                return 'Club Status';
            default:
                return 'Member number';
        }
    }

    getSecondOperatorDisplayValue(): string {
        const value = this.stepThreeForm?.get('secondOperator')?.value;
        switch (value) {
            case 'operator_active':
                return 'Active';
            case 'operator_passive':
                return 'Passive';
            case 'operator_none_zero':
                return 'None zero';
            case 'operator_zero':
                return 'Zero';
            default:
                return 'Active';
        }
    }

    getFormulaDisplayValue(): string {
        const value = this.stepThreeForm?.get('formula')?.value;
        switch (value) {
            case 'formula_1_5':
                return '[FF space size] 1.5';
            case 'formula_2':
                return '[FF space size] 2';
            case 'formula_3_5':
                return '[FF space size] 3.5';
            default:
                return 'Select Formula';
        }
    }

    getOtherFormulaDisplayValue(): string {
        const value = this.stepThreeForm?.get('otherFormula')?.value;
        switch (value) {
            case 'other_formula_1_5':
                return '[FF space size] 1.2';
            case 'other_formula_2':
                return '[FF space size] 1.2';
            case 'other_formula_3_5':
                return '[FF space size] 1.2';
            default:
                return 'Select Formula';
        }
    }

    getTaxDisplayValue(): string {
        const value = this.stepThreeForm?.get('tax')?.value;
        switch (value) {
            case 'tax_number_no':
                return 'No';
            case 'tax_number_yes':
                return 'Yes';
            default:
                return 'Select Tax';
        }
    }

    getRevenueAccountDisplayValue(): string {
        const value = this.stepFourForm?.get('revenueAccount')?.value;
        switch (value) {
            case 'revenue_account_100':
                return '100';
            case 'revenue_account_200':
                return '200';
            case 'revenue_account_300':
                return '300';
            case 'revenue_account_500':
                return '500';
            default:
                return 'Select Revenue';
        }
    }

    getActivityAccountDisplayValue(): string {
        const value = this.stepFourForm?.get('activityAccount')?.value;
        switch (value) {
            case 'activity_account_18000':
                return '18000';
            case 'activity_account_19000':
                return '19000';
            case 'activity_account_22000':
                return '22000';
            default:
                return '1800';
        }
    }

    getCostCenterDisplayValue(): string {
        const value = this.stepFourForm?.get('costCenter')?.value;
        switch (value) {
            case 'cost_center_1000':
                return '1000';
            case 'cost_center_12000':
                return '12000';
            case 'cost_center_15000':
                return '15000';
            case 'cost_center_16000':
                return '16000';
            default:
                return '1000';
        }
    }

    // Helper methods for conditional logic
    isAndCondition(): boolean {
        return (
            this.stepThreeForm?.get('conditionFunction')?.value ===
            'and_condition_wenn_und'
        );
    }

    isOrCondition(): boolean {
        return (
            this.stepThreeForm?.get('conditionFunction')?.value ===
            'or_condition_wenn_oder'
        );
    }

    isAdvancedCondition(): boolean {
        const value = this.stepThreeForm?.get('conditionFunction')?.value;
        return (
            value === 'and_condition_wenn_und' ||
            value === 'or_condition_wenn_oder'
        );
    }

    // Save form method
    saveForm() {
        if (
            this.stepOneForm.valid &&
            this.stepTwoForm.valid &&
            this.stepThreeForm.valid &&
            this.stepFourForm.valid
        ) {
            // Combine all form values into one object
            const formData = {
                ...this.stepOneForm.value,
                ...this.stepTwoForm.value,
                ...this.stepThreeForm.value,
                ...this.stepFourForm.value,
                calculatedTotal: this.totalAmount, // Include the calculated total
            };

            console.log('Form saved successfully:', formData);
            // Here you would typically send the data to your backend

            // Show success notification or redirect
            alert('Configuration saved successfully!');
        } else {
            // Mark all form controls as touched to trigger validation messages
            this.markFormGroupTouched(this.stepOneForm);
            this.markFormGroupTouched(this.stepTwoForm);
            this.markFormGroupTouched(this.stepThreeForm);
            this.markFormGroupTouched(this.stepFourForm);

            // Navigate to the first invalid step
            if (!this.stepTwoForm.valid) {
                this.stepper.selectedIndex = 1;
            } else if (!this.stepThreeForm.valid) {
                this.stepper.selectedIndex = 2;
            } else if (!this.stepFourForm.valid) {
                this.stepper.selectedIndex = 3;
            }

            console.error(
                'Form has validation errors. Please check all required fields.'
            );
        }
    }

    // Helper method to mark all controls as touched
    private markFormGroupTouched(formGroup: FormGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();

            if ((control as any).controls) {
                this.markFormGroupTouched(control as FormGroup);
            }
        });
    }
}
