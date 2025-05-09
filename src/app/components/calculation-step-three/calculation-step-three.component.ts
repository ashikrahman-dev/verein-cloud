import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-calculation-step-three',
    imports: [MatFormFieldModule, MatSelectModule],
    template: `
        <div class="basic-data-contribution">
            <!-- Fixed Value Content - start -->
            <div class="">
                <div class="fixed-value-content-show">
                    <h4 class="heading pb-3">
                        New Contribution - Basic Amount, Tax, Accounts and Cost
                        Center
                        <img
                            [src]="headingTooltipIcon"
                            alt="Calendar Icon"
                            class=""
                        />
                    </h4>

                    <div class="new-contribution-content-box">
                        <h6>Basic Settings</h6>
                        <p>
                            MB0001 - Membership Fee - Normal Contribution - No
                            Department
                        </p>
                    </div>

                    <div class="new-contribution-content-box">
                        <h6>Interval, billing period and due date</h6>
                        <p>
                            Annual Interval - Due 5 days after the start of the
                            interval
                        </p>
                    </div>

                    <div class="new-contribution-content-box">
                        <h6>Payment Term and Calculation</h6>
                        <p>Payment Term 7 Days - No Pro-Rata Calculation</p>
                    </div>

                    <div class="new-contribution-content-box">
                        <h6>Basic Amount, Tax, Accounts and Cost Center</h6>
                        <p>
                            The basic amount determines the contribution amount
                            for the billing period. The tax rate determines
                            whether sales tax is levied on the contribution. The
                            contribution is posted to the specified revenue
                            account. The active account determines from which
                            bank account the contribution is collected.
                            Optionally, a cost center can be assigned.
                        </p>
                    </div>

                    <div class="new-contribution-content-form-wrap ">
                        <div class="d-flex gap-4">
                            <!-- Basic Amount -->
                            <div class="w-100">
                                <p class="form-label fw-normal">
                                    Basic Amount (€)
                                </p>
                                <input
                                    matInput
                                    type="number"
                                    class="form-input-field font-rubik remove-icon-cls basic-amount-cls"
                                    placeholder="0"
                                />
                            </div>
                            <!-- Tax -->
                            <div class="w-100">
                                <p class="form-label fw-normal">Tax (%)</p>
                                <input
                                    matInput
                                    type="number"
                                    class="form-input-field font-rubik remove-icon-cls"
                                    placeholder="19"
                                />
                            </div>
                        </div>

                        <!-- Result -->
                        <div>
                            <div class="new-contribution-result w-100">
                                <h4>Result :</h4>
                                <p>
                                    <span>€</span>

                                    <!-- {{ totalAmount | number : '1.2-2' }} -->
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
            <div class="">
                <div class="fixed-value-content-show">
                    <h4 class="heading pb-3">
                        New Contribution - Basic Amount, Tax, Accounts and Cost
                        Center
                        <img
                            [src]="headingTooltipIcon"
                            alt="Calendar Icon"
                            class=""
                        />
                    </h4>

                    <div class="new-contribution-content-box">
                        <h6>Basic Settings</h6>
                        <p>
                            MB0001 - Membership Fee - Normal Contribution - No
                            Department
                        </p>
                    </div>

                    <div class="new-contribution-content-box">
                        <h6>Interval, billing period and due date</h6>
                        <p>
                            Annual Interval - Due 5 days after the start of the
                            interval
                        </p>
                    </div>

                    <div class="new-contribution-content-box">
                        <h6>Payment Term and Calculation</h6>
                        <p>Payment Term 7 Days - No Pro-Rata Calculation</p>
                    </div>

                    <div class="new-contribution-content-box">
                        <h6>Basic Amount, Tax, Accounts and Cost Center</h6>
                        <p>
                            The basic amount determines the contribution amount
                            for the billing period. The tax rate determines
                            whether sales tax is levied on the contribution. The
                            contribution is posted to the specified revenue
                            account. The active account determines from which
                            bank account the contribution is collected.
                            Optionally, a cost center can be assigned.
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
                                    <mat-select class="font-rubik">
                                        <mat-option value="working-hours">
                                            Working Hours
                                        </mat-option>
                                        <mat-option value="electricity-usage">
                                            Electricity Usage
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <!-- Duration -->
                            <div class="w-100">
                                <p class="form-label fw-normal">Duration</p>
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
            <div class="fixed-value-content-show">
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
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <mat-label
                                class="font-rubik d-flex gap-2 align-items-center"
                            >
                            </mat-label>
                            <mat-select class="font-rubik">
                                <mat-option value="if_condition_wenn">
                                    "IF" Condition (WENN)
                                </mat-option>
                                <mat-option value="and_condition_wenn_und">
                                    "AND" Condition (WENN UND)
                                </mat-option>
                                <mat-option value="or_condition_wenn_oder">
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
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <mat-label
                                class="font-rubik d-flex gap-2 align-items-center"
                            >
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
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <mat-label
                                class="font-rubik d-flex gap-2 align-items-center"
                            >
                            </mat-label>
                            <mat-select class="font-rubik">
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

                    <!-- 4 Item -->
                    <div>
                        <p class="form-label fw-normal">
                            Value <span class="text-red">*</span>
                        </p>
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <input matInput type="number" placeholder="0" />
                        </mat-form-field>
                    </div>

                    <!-- 5 Item -->
                    <div class="w-100">
                        <p class="form-label fw-normal">
                            And <span class="text-red">*</span>
                        </p>
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <mat-label
                                class="font-rubik d-flex gap-2 align-items-center"
                            >
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
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <mat-label
                                class="font-rubik d-flex gap-2 align-items-center"
                            >
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

                    <!-- 6 Item -->
                    <div class="w-100">
                        <p class="form-label fw-normal">
                            Operator <span class="text-red">*</span>
                        </p>
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <mat-label
                                class="font-rubik d-flex gap-2 align-items-center"
                            >
                            </mat-label>
                            <mat-select class="font-rubik">
                                <mat-option value="operator_active">
                                    Active
                                </mat-option>
                                <mat-option value="operator_passive">
                                    Passive</mat-option
                                >
                                <mat-option value="operator_none_zero">
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
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <input matInput type="number" placeholder="0" />
                        </mat-form-field>
                    </div>

                    <!-- 8 Item -->
                    <div class="w-100">
                        <p class="form-label fw-normal">
                            Formula <span class="text-red">*</span>
                        </p>
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <input
                                matInput
                                type="text"
                                placeholder="[FF space size] 1.5"
                                value="[FF space size] 1.5"
                            />
                        </mat-form-field>
                    </div>

                    <!-- 8 Item -->
                    <div class="w-100">
                        <p class="form-label fw-normal">
                            Formula <span class="text-red">*</span>
                        </p>
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <input
                                matInput
                                type="text"
                                placeholder="[FF space size] 2.0"
                                value="[FF space size] 2.0"
                            />
                        </mat-form-field>
                    </div>

                    <!-- 9 Item -->
                    <div class="w-100">
                        <p class="form-label fw-normal">
                            Other Formula
                            <span class="text-red">*</span>
                        </p>
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <input
                                matInput
                                type="text"
                                placeholder="[FF space size] 1.2"
                                value="[FF space size] 1.2"
                            />
                        </mat-form-field>
                    </div>

                    <!-- 9 Item -->
                    <div class="w-100">
                        <p class="form-label fw-normal">
                            Other Formula
                            <span class="text-red">*</span>
                        </p>
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <input
                                matInput
                                type="text"
                                placeholder="[FF space size] 1.5"
                                value="[FF space size] 1.5"
                            />
                        </mat-form-field>
                    </div>

                    <!-- 10 Item -->
                    <div class="w-100">
                        <p class="form-label fw-normal">
                            Tax <span class="text-red">*</span>
                        </p>
                        <mat-form-field class="w-100 bg-white font-rubik">
                            <mat-label
                                class="font-rubik d-flex gap-2 align-items-center"
                            >
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
        </div>
    `,
    styles: ``,
})
export class CalculationStepThreeComponent {
    // Required asset paths
    numberIcon = 'assets/images/due-date-icon.svg';
    headingTooltipIcon = 'assets/images/heading-tooltip-icon.svg';
}
