import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
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
              <p class="fs-14 font-normal cc-first-step-content">
                Configures how contributions are calculated, allowing
                flexibility based on dynamic rules and parameters. This ensures
                accurate and customized billing for members.
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
      <mat-step label="Step 2" [stepControl]="stepTwoForm">
        <form [formGroup]="stepTwoForm">
          <div class="basic-data-contribution">
            <h4 class="heading">
              Selecting the Calculation Method
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
            <p class="form-label pt-2 mt-3">Select Calculation Method</p>
            <mat-form-field class="w-100 bg-white font-rubik">
              <mat-label class="font-rubik d-flex gap-2 align-items-center">
                <img [src]="numberIcon" alt="Calendar Icon" class="" />
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
                  Free Field Value - Contribution is determined based on free
                  field variables (e.g. work hours, usage, member status)
                </mat-option>
                <mat-option value="variable-value">
                  Variable Value - Use formulas to calculate contributions
                  dynamically
                </mat-option>
              </mat-select>
              <mat-error
                *ngIf="
                  stepTwoForm.get('calculationMethod')?.hasError('required')
                "
              >
                Calculation method is required
              </mat-error>
            </mat-form-field>

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
        </form>
      </mat-step>

      <!-- Step 3 -->
      <mat-step label="Step 3" [stepControl]="stepThreeForm">
        <form [formGroup]="stepThreeForm">
          <div class="basic-data-contribution">
            <!-- Fixed Value Content - start -->
            <div
              *ngIf="
                stepTwoForm.get('calculationMethod')?.value === 'fixed-value'
              "
              class="fixed-value-content-show"
            >
              <div class="">
                <h4 class="heading pb-3">
                  New Contribution - Basic Amount, Tax, Accounts and Cost Center
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
                    Annual Interval - Due 5 days after the start of the interval
                  </p>
                </div>

                <div class="new-contribution-content-box">
                  <h6>Payment Term and Calculation</h6>
                  <p>Payment Term 7 Days - No Pro-Rata Calculation</p>
                </div>

                <div class="new-contribution-content-box">
                  <h6>Basic Amount, Tax, Accounts and Cost Center</h6>
                  <p>
                    The basic amount determines the contribution amount for the
                    billing period. The tax rate determines whether sales tax is
                    levied on the contribution. The contribution is posted to
                    the specified revenue account. The active account determines
                    from which bank account the contribution is collected.
                    Optionally, a cost center can be assigned.
                  </p>
                </div>

                <div class="new-contribution-content-form-wrap ">
                  <div class="d-flex gap-4">
                    <!-- Basic Amount -->
                    <div class="w-100">
                      <p class="form-label fw-normal">Basic Amount (€)</p>
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
                      <p class="form-label fw-normal">Tax (%)</p>
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
                    <div class="new-contribution-result w-100">
                      <h4>Result :</h4>
                      <p>
                        <span>€</span>
                        {{ totalAmount | number : '1.2-2' }}
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
              <h4 class="heading">
                Selecting the Applying Conditional Logic
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
                      {{ getConditionFunctionDisplayValue() }}
                    </mat-label>
                    <mat-select
                      formControlName="conditionFunction"
                      class="font-rubik"
                    >
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
                  <mat-form-field class="w-100 bg-white font-rubik">
                    <mat-label
                      class="font-rubik d-flex gap-2 align-items-center"
                    >
                      {{ getIfOptionDisplayValue() }}
                    </mat-label>
                    <mat-select class="font-rubik" formControlName="ifOption">
                      <mat-option value="if_option_100"> 100 </mat-option>
                      <mat-option value="if_option_200"> 200 </mat-option>
                      <mat-option value="if_option_300"> 300 </mat-option>
                      <mat-option value="if_option_400"> 400 </mat-option>
                    </mat-select>
                    <mat-error
                      *ngIf="
                        stepThreeForm.get('ifOption')?.hasError('required')
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
                  <mat-form-field class="w-100 bg-white font-rubik">
                    <mat-label
                      class="font-rubik d-flex gap-2 align-items-center"
                    >
                      {{ getOperatorDisplayValue() }}
                    </mat-label>
                    <mat-select class="font-rubik" formControlName="operator">
                      <mat-option value="operator_option_1"> >= </mat-option>
                      <mat-option value="operator_option_2"> > </mat-option>
                      <mat-option value="operator_option_3"> < </mat-option>
                      <mat-option value="operator_option_4"> <= </mat-option>
                      <mat-option value="operator_option_5"> = </mat-option>
                      <mat-option value="operator_option_6"> <> </mat-option>
                    </mat-select>
                    <mat-error
                      *ngIf="
                        stepThreeForm.get('operator')?.hasError('required')
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
                  <mat-form-field class="w-100 bg-white font-rubik">
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
                    stepThreeForm.get('conditionFunction')?.value ===
                    'and_condition_wenn_und'
                  "
                  class="w-100"
                >
                  <p class="form-label fw-normal">
                    And <span class="text-red">*</span>
                  </p>
                  <mat-form-field class="w-100 bg-white font-rubik">
                    <mat-label
                      class="font-rubik d-flex gap-2 align-items-center"
                    >
                      {{ getClubStatusDisplayValue() }}
                    </mat-label>
                    <mat-select class="font-rubik" formControlName="clubStatus">
                      <mat-option value="club_status_1">
                        Club Status
                      </mat-option>
                      <mat-option value="club_status_2">
                        Club Status 1</mat-option
                      >
                      <mat-option value="club_status_3">
                        Club Status 2
                      </mat-option>
                    </mat-select>
                    <mat-error
                      *ngIf="
                        stepThreeForm.get('clubStatus')?.hasError('required') &&
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
                    stepThreeForm.get('conditionFunction')?.value ===
                    'or_condition_wenn_oder'
                  "
                  class="w-100"
                >
                  <p class="form-label fw-normal">
                    Or <span class="text-red">*</span>
                  </p>
                  <mat-form-field class="w-100 bg-white font-rubik">
                    <mat-label
                      class="font-rubik d-flex gap-2 align-items-center"
                    >
                      {{ getOrClubStatusDisplayValue() }}
                    </mat-label>
                    <mat-select
                      class="font-rubik"
                      formControlName="orClubStatus"
                    >
                      <mat-option value="or_club_status_1">
                        Club Status
                      </mat-option>
                      <mat-option value="or_club_status_2">
                        Club Status 1</mat-option
                      >
                      <mat-option value="or_club_status_3">
                        Club Status 2
                      </mat-option>
                    </mat-select>
                    <mat-error
                      *ngIf="
                        stepThreeForm
                          .get('orClubStatus')
                          ?.hasError('required') && isOrCondition()
                      "
                    >
                      Club status is required
                    </mat-error>
                  </mat-form-field>
                </div>

                <!-- 6 Item -->
                <div *ngIf="isAdvancedCondition()" class="w-100">
                  <p class="form-label fw-normal">
                    Operator <span class="text-red">*</span>
                  </p>
                  <mat-form-field class="w-100 bg-white font-rubik">
                    <mat-label
                      class="font-rubik d-flex gap-2 align-items-center"
                    >
                      {{ getSecondOperatorDisplayValue() }}
                    </mat-label>
                    <mat-select
                      class="font-rubik"
                      formControlName="secondOperator"
                    >
                      <mat-option value="operator_active"> Active </mat-option>
                      <mat-option value="operator_passive"> Passive</mat-option>
                      <mat-option value="operator_none_zero">
                        None zero
                      </mat-option>
                      <mat-option value="operator_zero"> Zero </mat-option>
                    </mat-select>
                    <mat-error
                      *ngIf="
                        stepThreeForm
                          .get('secondOperator')
                          ?.hasError('required') && isAdvancedCondition()
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
                  <mat-form-field class="w-100 bg-white font-rubik">
                    <input
                      matInput
                      type="number"
                      formControlName="valueId"
                      placeholder="0"
                    />
                    <mat-error
                      *ngIf="stepThreeForm.get('valueId')?.hasError('required')"
                    >
                      Value is required
                    </mat-error>
                  </mat-form-field>
                </div>

                <!-- 8 Item -->
                <div class="w-100">
                  <p class="form-label fw-normal">
                    Formula <span class="text-red">*</span>
                  </p>
                  <mat-form-field class="w-100 bg-white font-rubik">
                    <mat-label
                      class="font-rubik d-flex gap-2 align-items-center"
                    >
                      {{ getFormulaDisplayValue() }}
                    </mat-label>
                    <mat-select class="font-rubik" formControlName="formula">
                      <mat-option value="formula_1_5">
                        [FF space size] 1.5
                      </mat-option>
                      <mat-option value="formula_2">
                        [FF space size] 2</mat-option
                      >
                      <mat-option value="formula_3_5">
                        [FF space size] 3.5
                      </mat-option>
                    </mat-select>
                    <mat-error
                      *ngIf="stepThreeForm.get('formula')?.hasError('required')"
                    >
                      Formula is required
                    </mat-error>
                  </mat-form-field>
                </div>

                <!-- 9 Item -->
                <div class="w-100">
                  <p class="form-label fw-normal">
                    Other Formula <span class="text-red">*</span>
                  </p>
                  <mat-form-field class="w-100 bg-white font-rubik">
                    <mat-label
                      class="font-rubik d-flex gap-2 align-items-center"
                    >
                      {{ getOtherFormulaDisplayValue() }}
                    </mat-label>
                    <mat-select
                      class="font-rubik"
                      formControlName="otherFormula"
                    >
                      <mat-option value="other_formula_1_5">
                        [FF space size] 1.2
                      </mat-option>
                      <mat-option value="other_formula_2">
                        [FF space size] 1.2</mat-option
                      >
                      <mat-option value="other_formula_3_5">
                        [FF space size] 1.2
                      </mat-option>
                    </mat-select>
                    <mat-error
                      *ngIf="
                        stepThreeForm.get('otherFormula')?.hasError('required')
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
                  <mat-form-field class="w-100 bg-white font-rubik">
                    <mat-label
                      class="font-rubik d-flex gap-2 align-items-center"
                    >
                      {{ getTaxDisplayValue() }}
                    </mat-label>
                    <mat-select class="font-rubik" formControlName="tax">
                      <mat-option value="tax_number_no"> No </mat-option>
                      <mat-option value="tax_number_yes"> Yes</mat-option>
                    </mat-select>
                    <mat-error
                      *ngIf="stepThreeForm.get('tax')?.hasError('required')"
                    >
                      Tax selection is required
                    </mat-error>
                  </mat-form-field>
                </div>
              </div>
            </div>
            <!-- Free field Value Content - end -->

            <!-- Button group -->
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
        </form>
      </mat-step>

      <!-- Step 4 -->
      <mat-step label="Step 4" [stepControl]="stepFourForm">
        <form [formGroup]="stepFourForm">
          <div class="basic-data-contribution">
            <h4 class="heading">
              Assigning Financial Accounts
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
            <h5 class="form-label pt-2 mt-3 fw-medium pb-4">
              Select Financial Accounts
            </h5>

            <div class="calculation-configuration-step">
              <!--  1 Item -->
              <div class="w-100">
                <p class="form-label fw-normal">
                  Revenue Account <span class="text-red">*</span>
                </p>
                <mat-form-field class="w-100 bg-white font-rubik">
                  <mat-label class="font-rubik d-flex gap-2 align-items-center">
                    {{ getRevenueAccountDisplayValue() }}
                  </mat-label>
                  <mat-select
                    class="font-rubik"
                    formControlName="revenueAccount"
                  >
                    <mat-option value="revenue_account_100"> 100 </mat-option>
                    <mat-option value="revenue_account_200"> 200 </mat-option>
                    <mat-option value="revenue_account_300"> 300 </mat-option>
                    <mat-option value="revenue_account_500"> 500 </mat-option>
                  </mat-select>
                  <mat-error
                    *ngIf="
                      stepFourForm.get('revenueAccount')?.hasError('required')
                    "
                  >
                    Revenue account is required
                  </mat-error>
                </mat-form-field>
              </div>

              <!-- 2 Item -->
              <div class="w-100">
                <p class="form-label fw-normal">
                  Activity Account <span class="text-red">*</span>
                </p>
                <mat-form-field class="w-100 bg-white font-rubik">
                  <mat-label class="font-rubik d-flex gap-2 align-items-center">
                    {{ getActivityAccountDisplayValue() }}
                  </mat-label>
                  <mat-select
                    class="font-rubik"
                    formControlName="activityAccount"
                  >
                    <mat-option value="activity_account_18000">
                      18000
                    </mat-option>
                    <mat-option value="activity_account_19000">
                      19000
                    </mat-option>
                    <mat-option value="activity_account_22000">
                      22000
                    </mat-option>
                  </mat-select>
                  <mat-error
                    *ngIf="
                      stepFourForm.get('activityAccount')?.hasError('required')
                    "
                  >
                    Activity account is required
                  </mat-error>
                </mat-form-field>
              </div>

              <!-- 3 Item -->
              <div class="w-100">
                <p class="form-label fw-normal">
                  Cost Centers <span class="text-red">*</span>
                </p>
                <mat-form-field class="w-100 bg-white font-rubik">
                  <mat-label class="font-rubik d-flex gap-2 align-items-center">
                    {{ getCostCenterDisplayValue() }}
                  </mat-label>
                  <mat-select class="font-rubik" formControlName="costCenter">
                    <mat-option value="cost_center_1000"> 1000 </mat-option>
                    <mat-option value="cost_center_12000"> 12000 </mat-option>
                    <mat-option value="cost_center_15000"> 15000 </mat-option>
                    <mat-option value="cost_center_16000"> 16000 </mat-option>
                  </mat-select>
                  <mat-error
                    *ngIf="stepFourForm.get('costCenter')?.hasError('required')"
                  >
                    Cost center is required
                  </mat-error>
                </mat-form-field>
              </div>
            </div>

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
  private _formBuilder = inject(FormBuilder);

  // Setting isLinear to true to ensure step validation
  isLinear = true;

  // Property to store the calculated total amount
  totalAmount: number = 0;

  // Required asset paths
  numberIcon = 'assets/images/due-date-icon.svg';
  intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
  calendarDateIcon = 'assets/images/calendar-edit.svg';
  textalignIcon = 'assets/images/textalign-justifycenter.svg';

  // Form groups for each step
  stepOneForm: FormGroup = this._formBuilder.group({
    // Step 1 doesn't have any required fields in this example,
    // but we need to define it for proper step validation
    introStep: [''],
  });

  stepTwoForm: FormGroup = this._formBuilder.group({
    calculationMethod: ['fixed-value', Validators.required], // Default to 'free-field-value' to show the form
  });

  stepThreeForm: FormGroup = this._formBuilder.group({
    // Moved from stepTwoForm to stepThreeForm
    basicAmount: [69, [Validators.required, Validators.min(0)]], // Default value 69
    taxPercentage: [
      19,
      [Validators.required, Validators.min(0), Validators.max(100)],
    ], // Default value 19%

    // Original stepThreeForm controls
    conditionFunction: ['if_condition_wenn', Validators.required],
    ifOption: ['', Validators.required],
    operator: ['', Validators.required],
    conditionValue: [''],
    clubStatus: [''],
    orClubStatus: [''],
    secondOperator: [''],
    valueId: ['', Validators.required],
    formula: ['', Validators.required],
    otherFormula: ['', Validators.required],
    tax: ['', Validators.required],
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

    // Set up conditional validators based on selected calculation method
    this.stepTwoForm
      .get('calculationMethod')
      ?.valueChanges.subscribe((value) => {
        if (value === 'fixed-value') {
          // Make sure to calculate when showing the form
          this.calculateTotal();
        }
      });

    // Watch for changes in both basic amount and tax fields
    this.stepThreeForm.get('basicAmount')?.valueChanges.subscribe(() => {
      this.calculateTotal();
    });

    this.stepThreeForm.get('taxPercentage')?.valueChanges.subscribe(() => {
      this.calculateTotal();
    });

    // Set up conditional validators based on selected condition function
    this.stepThreeForm
      .get('conditionFunction')
      ?.valueChanges.subscribe((value) => {
        const conditionValueControl = this.stepThreeForm.get('conditionValue');
        const clubStatusControl = this.stepThreeForm.get('clubStatus');
        const orClubStatusControl = this.stepThreeForm.get('orClubStatus');
        const secondOperatorControl = this.stepThreeForm.get('secondOperator');

        if (
          value === 'and_condition_wenn_und' ||
          value === 'or_condition_wenn_oder'
        ) {
          conditionValueControl?.setValidators([Validators.required]);
          secondOperatorControl?.setValidators([Validators.required]);

          if (value === 'and_condition_wenn_und') {
            clubStatusControl?.setValidators([Validators.required]);
            orClubStatusControl?.clearValidators();
          } else if (value === 'or_condition_wenn_oder') {
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
        const stepHeader = document.querySelectorAll('.mat-step-header')[i];
        if (stepHeader) {
          stepHeader.classList.add('previous-step');
        }
      }
    });
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
  }

  // Helper methods for display values in select controls
  getCalculationMethodDisplayValue(): string {
    return (
      this.stepTwoForm?.get('calculationMethod')?.value ||
      'Select Calculation Method'
    );
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
      case 'or_club_status_1':
        return 'Club Status';
      case 'or_club_status_2':
        return 'Club Status 1';
      case 'or_club_status_3':
        return 'Club Status 2';
      default:
        return 'Club Status';
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
      value === 'and_condition_wenn_und' || value === 'or_condition_wenn_oder'
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
