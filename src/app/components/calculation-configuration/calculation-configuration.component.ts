import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

@Component({
    selector: 'app-calculation-configuration',
    standalone: true,
    imports: [
        MatStepperModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    template: `
        <mat-stepper
            #stepper
            [linear]="isLinear"
            class="contribution-basic-data-step-wrap payment-terms-calculation-wrap calculation-configuration-wrapper"
            (selectionChange)="onStepChange($event)"
        >
            <!-- Step 1 -->
            <mat-step
                label="Step 1"
                [stepControl]="stepOneForm"
                [editable]="isStepEditable(0)"
            >
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
                                    [disabled]="!stepOneForm.valid"
                                >
                                    Proceed
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </mat-step>

            <!-- Step 2 -->
            <mat-step
                label="Step 2"
                [stepControl]="stepTwoForm"
                [editable]="isStepEditable(1)"
            >
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
                                    Free Field Value - Contribution is
                                    determined based on free field variables
                                    (e.g. work hours, usage, member status)
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
                                    [disabled]="!stepTwoForm.valid"
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
            <mat-step
                label="Step 3"
                [stepControl]="stepThreeForm"
                [editable]="isStepEditable(2)"
            >
                <form [formGroup]="stepThreeForm">
                    <div class="basic-data-contribution">
                        <!-- Fixed Value Content - start -->
                        <div
                            *ngIf="selectedCalculationMethod === 'fixed-value'"
                            class=""
                        >
                            <div class="fixed-value-content-show">
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
                                                formControlName="basicAmount"
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
                                                formControlName="taxPercentage"
                                                class="form-input-field font-rubik remove-icon-cls"
                                                placeholder="19"
                                                (input)="calculateResult()"
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
                                                    calculatedResult.toFixed(2)
                                                }}
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
                            *ngIf="
                                selectedCalculationMethod === 'free-field-value'
                            "
                        >
                            <div class="fixed-value-content-show">
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
                                                    formControlName="freeFieldName"
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
                                                formControlName="duration"
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
                            *ngIf="
                                selectedCalculationMethod === 'variable-value'
                            "
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
                                            formControlName="function"
                                            (selectionChange)="
                                                onFunctionChange($event)
                                            "
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
                                        <mat-select
                                            class="font-rubik"
                                            formControlName="ifField"
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
                                    </mat-form-field>
                                </div>

                                <!-- 4 Item -->
                                <div>
                                    <p class="form-label fw-normal">
                                        Value <span class="text-red">*</span>
                                    </p>
                                    <input
                                        matInput
                                        type="number"
                                        class="form-input-field font-rubik"
                                        formControlName="conditionValue"
                                        placeholder="0"
                                    />
                                </div>

                                <!-- 5 Item -->
                                <div
                                    *ngIf="
                                        selectedFunction ===
                                        'and_condition_wenn_und'
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
                                            Select field
                                        </mat-label>
                                        <mat-select class="font-rubik">
                                            <mat-option value="and_club_status">
                                                Club Status
                                            </mat-option>
                                            <mat-option
                                                value="or_member_number"
                                            >
                                                Member number
                                            </mat-option>
                                        </mat-select>
                                    </mat-form-field>
                                </div>

                                <!-- 5 OR Item -->
                                <div
                                    *ngIf="
                                        selectedFunction ===
                                        'or_condition_wenn_oder'
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
                                            Select field
                                        </mat-label>
                                        <mat-select class="font-rubik">
                                            <mat-option
                                                value="or_member_number"
                                            >
                                                Member number
                                            </mat-option>
                                            <mat-option value="and_club_status">
                                                Club Status
                                            </mat-option>
                                        </mat-select>
                                    </mat-form-field>
                                </div>

                                <!-- 6 Item -->
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
                                        <mat-select class="font-rubik">
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
                                    </mat-form-field>
                                </div>

                                <!-- 7 Item -->
                                <div>
                                    <p class="form-label fw-normal">
                                        Value <span class="text-red">*</span>
                                    </p>

                                    <input
                                        type="number"
                                        class="w-100 bg-white font-rubik form-input-field"
                                        placeholder="0"
                                    />
                                </div>

                                <!-- 8 Item -->
                                <div
                                    *ngIf="
                                        selectedFunction === 'if_condition_wenn'
                                    "
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Formula <span class="text-red">*</span>
                                    </p>
                                    <input
                                        matInput
                                        type="text"
                                        formControlName="formula"
                                        class="form-input-field"
                                        placeholder="[FF space size] 1.5"
                                        value="[FF space size] 1.5"
                                    />
                                </div>

                                <!-- 8 Item -->
                                <div
                                    *ngIf="
                                        selectedFunction ===
                                            'and_condition_wenn_und' ||
                                        selectedFunction ===
                                            'or_condition_wenn_oder'
                                    "
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Formula <span class="text-red">*</span>
                                    </p>
                                    <input
                                        matInput
                                        type="text"
                                        class="form-input-field font-rubik"
                                        formControlName="formula"
                                        placeholder="[FF space size] 2.0"
                                        value="[FF space size] 2.0"
                                    />
                                </div>

                                <!-- 9 Item -->
                                <div
                                    *ngIf="
                                        selectedFunction ===
                                            'if_condition_wenn' ||
                                        selectedFunction === null
                                    "
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Other Formula
                                        <span class="text-red">*</span>
                                    </p>
                                    <input
                                        matInput
                                        type="text"
                                        formControlName="otherFormula"
                                        class="form-input-field font-rubik"
                                        placeholder="[FF space size] 1.2"
                                        value="[FF space size] 1.2"
                                    />
                                </div>

                                <!-- 9 Item -->
                                <div
                                    *ngIf="
                                        selectedFunction ===
                                            'and_condition_wenn_und' ||
                                        selectedFunction ===
                                            'or_condition_wenn_oder'
                                    "
                                    class="w-100"
                                >
                                    <p class="form-label fw-normal">
                                        Other Formula
                                        <span class="text-red">*</span>
                                    </p>
                                    <input
                                        matInput
                                        type="text"
                                        formControlName="otherFormula"
                                        class="form-input-field font-rubik"
                                        placeholder="[FF space size] 1.5"
                                        value="[FF space size] 1.5"
                                    />
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
                                            Select Tax
                                        </mat-label>
                                        <mat-select class="font-rubik">
                                            <mat-option value="tax_number_no">
                                                No
                                            </mat-option>
                                            <mat-option value="tax_number_yes">
                                                Yes</mat-option
                                            >
                                        </mat-select>
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
                                    [disabled]="!stepThreeForm.valid"
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
            <mat-step
                label="Step 4"
                [stepControl]="stepFourForm"
                [editable]="isStepEditable(3)"
            >
                <form [formGroup]="stepFourForm">
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
                                <mat-form-field
                                    class="w-100 bg-white font-rubik"
                                >
                                    <mat-label
                                        class="font-rubik d-flex gap-2 align-items-center"
                                    >
                                        {{ '9669 3696 3695' }}
                                    </mat-label>
                                    <mat-select
                                        class="font-rubik"
                                        formControlName="revenueAccount"
                                    >
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
                                <mat-form-field
                                    class="w-100 bg-white font-rubik"
                                >
                                    <mat-label
                                        class="font-rubik d-flex gap-2 align-items-center"
                                    >
                                        {{ '18000' }}
                                    </mat-label>
                                    <mat-select
                                        class="font-rubik"
                                        formControlName="activityAccount"
                                    >
                                        <mat-option
                                            value="activity-account-one"
                                        >
                                            18000
                                        </mat-option>
                                        <mat-option
                                            value="activity-account-two"
                                        >
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
                                    formControlName="costCenter1"
                                    class="form-input-field font-rubik remove-icon-cls"
                                />
                            </div>
                            <!-- Cost Centers 2 -->
                            <div>
                                <p class="form-label">Cost Centers 2</p>
                                <input
                                    placeholder="1000"
                                    formControlName="costCenter2"
                                    class="form-input-field font-rubik remove-icon-cls"
                                />
                            </div>
                        </div>

                        <!-- Booking Text   -->
                        <div class="w-100 mt-4 pt-1">
                            <p class="form-label">Booking Text</p>
                            <input
                                placeholder="[Association]    [Last Name]    [First Name]    [Contribution]    [Period]"
                                formControlName="bookingText"
                                class="form-input-field font-rubik remove-icon-cls"
                            />
                        </div>

                        <!-- Button group -->
                        <div class="w-100 mt-4">
                            <div
                                class="button-wrap d-flex justify-content-end align-items-end gap-3"
                            >
                                <button
                                    type="button"
                                    class="step-button fill"
                                    [disabled]="!stepFourForm.valid"
                                    (click)="saveConfiguration()"
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
    
    .error-message {
      color: red;
      font-size: 12px;
      margin-top: 4px;
    }
    
    .form-input-field.ng-invalid.ng-touched {
      border-color: red;
    }
    
    .mat-form-field.ng-invalid.ng-touched .mat-form-field-outline {
      color: red;
    }
    
    /* Disable pointer events for non-editable steps */
    ::ng-deep .mat-horizontal-stepper-header {
      pointer-events: none !important;
    }
    
    /* Re-enable pointer events for editable steps */
    ::ng-deep .mat-horizontal-stepper-header.editable-step {
      pointer-events: auto !important;
    }
    
    /* Style for disabled step header */
    ::ng-deep .mat-step-header.mat-step-header-disabled {
      opacity: 0.5;
    }
  `,
})
export class CalculationConfigurationComponent implements OnInit {
    // This ensures that a step icon in the header can only be clicked if all previous steps are completed
    @ViewChild('stepper')
    set stepper(stepper: MatStepper) {
        if (stepper) {
            // Use setTimeout to ensure this runs after the view is initialized
            setTimeout(() => {
                // Get all step headers
                const stepHeaders = stepper._stepHeader.toArray();

                // Add click listeners to all step headers
                stepHeaders.forEach((header, index) => {
                    // Get the HTML element
                    const headerElement = header._elementRef.nativeElement;

                    // Check if parentNode exists before trying to use it
                    if (headerElement && headerElement.parentNode) {
                        // Remove existing click listeners
                        const newElement = headerElement.cloneNode(true);
                        headerElement.parentNode.replaceChild(
                            newElement,
                            headerElement
                        );

                        // Add new click listener
                        newElement.addEventListener('click', (event: Event) => {
                            // Check if the step should be clickable
                            if (!this.isStepEditable(index)) {
                                event.preventDefault();
                                event.stopPropagation();

                                // Show message to user
                                alert(
                                    'Please complete the previous steps first.'
                                );
                            } else {
                                // Allow default click behavior
                                stepper.selectedIndex = index;
                            }
                        });
                    }
                });
            }, 0);
        }
    }

    // Required asset paths
    numberIcon = 'assets/images/due-date-icon.svg';
    headingTooltipIcon = 'assets/images/heading-tooltip-icon.svg';

    // Linear stepper
    isLinear = true;

    // Track completed steps
    completedSteps: boolean[] = [false, false, false, false];
    currentStep = 0;

    // Form groups for each step
    stepOneForm: FormGroup;
    stepTwoForm: FormGroup;
    stepThreeForm: FormGroup;
    stepFourForm: FormGroup;

    // Track selected calculation method
    selectedCalculationMethod: string = 'fixed-value';

    // Result calculation
    calculatedResult: number = 0;

    // Track selected function in variable-value mode
    selectedFunction: string = '';

    constructor(private _formBuilder: FormBuilder) {
        // Initialize form groups with validation
        this.stepOneForm = this._formBuilder.group({
            // Step 1 doesn't need controls as it's just informational
            acknowledged: [true, Validators.requiredTrue], // Hidden control to make the step valid
        });

        this.stepTwoForm = this._formBuilder.group({
            calculationMethod: ['fixed-value', Validators.required],
        });

        // Step 3 form with conditional controls based on calculation method
        this.stepThreeForm = this._formBuilder.group({
            // Fixed value controls
            basicAmount: [69, [Validators.required, Validators.min(0)]],
            taxPercentage: [
                19,
                [Validators.required, Validators.min(0), Validators.max(100)],
            ],

            // Free field value controls
            freeFieldName: ['working-hours', Validators.required],
            duration: [8, [Validators.required, Validators.min(0)]],

            // Variable value controls
            function: ['if_condition_wenn', Validators.required],
            ifField: ['if_department', Validators.required],
            operator: ['operator_option_5', Validators.required],
        });

        this.stepFourForm = this._formBuilder.group({
            revenueAccount: ['revenue-account-one', Validators.required],
            activityAccount: ['activity-account-one', Validators.required],
            costCenter1: ['1000'],
            costCenter2: ['1000'],
            bookingText: [
                '[Association] [Last Name] [First Name] [Contribution] [Period]',
            ],
        });
    }

    ngOnInit(): void {
        // Set default calculation method
        this.selectedCalculationMethod = 'fixed-value';

        // Calculate initial result with default values
        this.calculateResult();

        // Subscribe to calculation method changes to update validation
        this.stepTwoForm
            .get('calculationMethod')
            ?.valueChanges.subscribe((value) => {
                this.updateStepThreeValidation(value);
            });

        // Subscribe to form status changes to update step completion status
        this.stepOneForm.statusChanges.subscribe((status) => {
            this.completedSteps[0] = status === 'VALID';
        });

        this.stepTwoForm.statusChanges.subscribe((status) => {
            this.completedSteps[1] = status === 'VALID';
        });

        this.stepThreeForm.statusChanges.subscribe((status) => {
            this.completedSteps[2] = status === 'VALID';
        });

        this.stepFourForm.statusChanges.subscribe((status) => {
            this.completedSteps[3] = status === 'VALID';
        });
    }

    // Handle calculation method selection change
    onCalculationMethodChange(event: any): void {
        this.selectedCalculationMethod = event.value;
        this.updateStepThreeValidation(event.value);

        // Recalculate result when calculation method changes
        if (this.selectedCalculationMethod === 'fixed-value') {
            this.calculateResult();
        }
    }

    // Update step three validation based on selected calculation method
    updateStepThreeValidation(calculationMethod: string): void {
        if (calculationMethod === 'fixed-value') {
            // Make fixed value controls required
            this.stepThreeForm
                .get('basicAmount')
                ?.setValidators([Validators.required]);
            this.stepThreeForm
                .get('taxPercentage')
                ?.setValidators([Validators.required]);

            // Make other controls optional
            this.stepThreeForm.get('freeFieldName')?.clearValidators();
            this.stepThreeForm.get('duration')?.clearValidators();
            this.stepThreeForm.get('function')?.clearValidators();
            this.stepThreeForm.get('ifField')?.clearValidators();
            this.stepThreeForm.get('operator')?.clearValidators();
        } else if (calculationMethod === 'free-field-value') {
            // Make free field controls required
            this.stepThreeForm
                .get('freeFieldName')
                ?.setValidators([Validators.required]);
            this.stepThreeForm
                .get('duration')
                ?.setValidators([Validators.required]);

            // Make other controls optional
            this.stepThreeForm.get('basicAmount')?.clearValidators();
            this.stepThreeForm.get('taxPercentage')?.clearValidators();
            this.stepThreeForm.get('function')?.clearValidators();
            this.stepThreeForm.get('ifField')?.clearValidators();
            this.stepThreeForm.get('operator')?.clearValidators();
        } else if (calculationMethod === 'variable-value') {
            // Make variable value controls required
            this.stepThreeForm
                .get('function')
                ?.setValidators([Validators.required]);
            this.stepThreeForm
                .get('ifField')
                ?.setValidators([Validators.required]);
            this.stepThreeForm
                .get('operator')
                ?.setValidators([Validators.required]);

            // Make other controls optional
            this.stepThreeForm.get('basicAmount')?.clearValidators();
            this.stepThreeForm.get('taxPercentage')?.clearValidators();
            this.stepThreeForm.get('freeFieldName')?.clearValidators();
            this.stepThreeForm.get('duration')?.clearValidators();
        }

        // Update form validation
        this.stepThreeForm.updateValueAndValidity();
    }

    // Calculate result based on formula: Basic Amount + (Basic Amount * Tax / 100)
    calculateResult(): void {
        const basicAmount = this.stepThreeForm.get('basicAmount')?.value || 0;
        const taxPercentage =
            this.stepThreeForm.get('taxPercentage')?.value || 0;

        const taxAmount = (basicAmount * taxPercentage) / 100;
        this.calculatedResult = basicAmount + taxAmount;
    }

    // Handle function selection change in variable-value mode
    onFunctionChange(event: any): void {
        this.selectedFunction = event.value;
    }

    // Track step changes to validate form at each step
    onStepChange(event: any): void {
        const previousStepIndex = event.previouslySelectedIndex;
        const stepIndex = event.selectedIndex;

        this.currentStep = stepIndex;

        // Validate the previous form when moving forward
        if (stepIndex > previousStepIndex) {
            switch (previousStepIndex) {
                case 0: // From Step 1 to Step 2
                    if (this.stepOneForm.valid) {
                        this.completedSteps[0] = true;
                    }
                    break;
                case 1: // From Step 2 to Step 3
                    if (this.stepTwoForm.valid) {
                        this.completedSteps[1] = true;
                    }
                    break;
                case 2: // From Step 3 to Step 4
                    if (this.stepThreeForm.valid) {
                        this.completedSteps[2] = true;
                    }
                    break;
            }
        }

        // Mark form fields as touched to display validation errors
        switch (stepIndex) {
            case 0: // Step 1
                this.markFormGroupTouched(this.stepOneForm);
                break;
            case 1: // Step 2
                this.markFormGroupTouched(this.stepTwoForm);
                break;
            case 2: // Step 3
                this.markFormGroupTouched(this.stepThreeForm);
                break;
            case 3: // Step 4
                this.markFormGroupTouched(this.stepFourForm);
                break;
        }
    }

    // Determine if a step should be editable based on completion status
    isStepEditable(stepIndex: number): boolean {
        // First step is always editable
        if (stepIndex === 0) return true;

        // For subsequent steps, must have completed all previous steps
        for (let i = 0; i < stepIndex; i++) {
            if (!this.completedSteps[i]) {
                return false;
            }
        }

        return true;
    }

    // Handle save action for the last step
    saveConfiguration(): void {
        // Mark all form controls as touched to display validation errors
        this.markFormGroupTouched(this.stepFourForm);

        if (this.stepFourForm.valid) {
            console.log('Configuration saved successfully!');
            // Here you would typically send the data to your backend

            // Set the last step as completed
            this.completedSteps[3] = true;

            // Combine all form values into a single object to send to backend
            const formData = {
                calculationMethod: this.stepTwoForm.value.calculationMethod,
                // Include fields based on the selected calculation method
                ...(this.selectedCalculationMethod === 'fixed-value' && {
                    basicAmount: this.stepThreeForm.value.basicAmount,
                    taxPercentage: this.stepThreeForm.value.taxPercentage,
                    calculatedResult: this.calculatedResult,
                }),
                ...(this.selectedCalculationMethod === 'free-field-value' && {
                    freeFieldName: this.stepThreeForm.value.freeFieldName,
                    duration: this.stepThreeForm.value.duration,
                }),
                ...(this.selectedCalculationMethod === 'variable-value' && {
                    function: this.stepThreeForm.value.function,
                    ifField: this.stepThreeForm.value.ifField,
                    operator: this.stepThreeForm.value.operator,
                }),
                // Include step 4 fields
                ...this.stepFourForm.value,
            };

            console.log('Form data to send:', formData);

            // You would send this data to your backend API
            // this.configurationService.saveConfiguration(formData).subscribe(response => {
            //     console.log('Configuration saved:', response);
            // });

            // Optional: Show success message or navigate to another page
            alert('Configuration saved successfully!');

            // Optional: Reset the stepper after saving
            // this.stepper.reset();
            // this.completedSteps = [false, false, false, false];
        } else {
            console.error('Form is invalid. Please check the form fields.');
            alert('Please complete all required fields before saving.');
        }
    }

    // Helper method to mark all controls in a form group as touched
    markFormGroupTouched(formGroup: FormGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();

            if (control instanceof FormGroup) {
                this.markFormGroupTouched(control);
            }
        });
    }
}
