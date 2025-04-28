import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    // MatRadioModule,

    MatDatepickerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
              Configures how contributions are calculated, allowing flexibility
              based on dynamic rules and parameters. This ensures accurate and
              customized billing for members.
            </p>

            <div class="button-wrap d-flex justify-content-center pt-3 mt-2">
              <button type="button" class="step-button fill" matStepperNext>
                Procced
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
              {{ selectedValue || 'None' }}
            </mat-label>
            <mat-select
              class="font-rubik"
              [(ngModel)]="selectedValue"
              (selectionChange)="onSelectionChange()"
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
      </mat-step>

      <!-- Step 3 -->
      <mat-step label="Step 3">
        <div class="basic-data-contribution">
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
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ '"IF" Condition (WENN)' }}
                </mat-label>
                <mat-select
                  [(ngModel)]="selectedConditionValue"
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
              </mat-form-field>
            </div>

            <!--  2 Item -->
            <div class="w-100">
              <p class="form-label fw-normal">
                If <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ selectedValue || 'Select Number' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="if_option_100"> 100 </mat-option>
                  <mat-option value="if_option_200"> 200 </mat-option>
                  <mat-option value="if_option_300"> 300 </mat-option>
                  <mat-option value="if_option_400"> 400 </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- 3 Item -->
            <div class="w-100">
              <p class="form-label fw-normal">
                Operator <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ '>=' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="operator_option_1"> >= </mat-option>
                  <mat-option value="operator_option_2"> > </mat-option>
                  <mat-option value="operator_option_3"> < </mat-option>
                  <mat-option value="operator_option_4"> <= </mat-option>
                  <mat-option value="operator_option_5"> = </mat-option>
                  <mat-option value="operator_option_6"> <> </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- 4 Item -->
            <div
              *ngIf="
                selectedConditionValue === 'and_condition_wenn_und' ||
                selectedConditionValue === 'or_condition_wenn_oder'
              "
            >
              <p class="form-label fw-normal">
                Value <span class="text-red">*</span>
              </p>
              <input
                [(ngModel)]="and_condition_value_id"
                type="number"
                placeholder="0"
                class="form-input-field"
              />
            </div>

            <!-- 5 Item -->
            <div
              *ngIf="selectedConditionValue === 'and_condition_wenn_und'"
              class="w-100"
            >
              <p class="form-label fw-normal">
                And <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'Club Status' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="club_status_1 "> Club Status </mat-option>
                  <mat-option value="club_status_2"> Club Status 1</mat-option>
                  <mat-option value="club_status_3"> Club Status 2 </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- 5 OR Item -->
            <div
              *ngIf="selectedConditionValue === 'or_condition_wenn_oder'"
              class="w-100"
            >
              <p class="form-label fw-normal">
                Or <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'Club Status' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="or_club_status_1 ">
                    Club Status
                  </mat-option>
                  <mat-option value="or_club_status_2">
                    Club Status 1</mat-option
                  >
                  <mat-option value="or_club_status_3">
                    Club Status 2
                  </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- 6 Item -->
            <div
              *ngIf="
                selectedConditionValue === 'and_condition_wenn_und' ||
                selectedConditionValue === 'or_condition_wenn_oder'
              "
              class="w-100"
            >
              <p class="form-label fw-normal">
                Operator <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'Active' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="operator_active"> Active </mat-option>
                  <mat-option value="operator_passive"> Passive</mat-option>
                  <mat-option value="operator_none_zero">
                    None zero
                  </mat-option>
                  <mat-option value="operator_zero"> Zero </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- 7 Item -->
            <div>
              <p class="form-label fw-normal">
                Value <span class="text-red">*</span>
              </p>
              <input
                [(ngModel)]="value_id"
                type="number"
                placeholder="0"
                class="form-input-field"
              />
            </div>

            <!-- 8 Item -->
            <div class="w-100">
              <p class="form-label fw-normal">
                Formula <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'Select Formula' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="formula_1_5">
                    [FF space size] 1.5
                  </mat-option>
                  <mat-option value="formula_2"> [FF space size] 2</mat-option>
                  <mat-option value="formula_3_5">
                    [FF space size] 3.5
                  </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- 9 Item -->
            <div class="w-100">
              <p class="form-label fw-normal">
                Other Formula <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'Select Formula' }}
                </mat-label>
                <mat-select class="font-rubik">
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
              </mat-form-field>
            </div>

            <!-- 10 Item -->
            <div class="w-100">
              <p class="form-label fw-normal">
                Tax <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'Select Tax' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="tax_number_no"> No </mat-option>
                  <mat-option value="tax_number_yos"> yes</mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>

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
      </mat-step>

      <!-- Step 4 -->
      <mat-step label="Step 4">
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
                  {{ selectedValue || 'Select Revenue' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="revenue_account_100"> 100 </mat-option>
                  <mat-option value="revenue_account_200"> 200 </mat-option>
                  <mat-option value="revenue_account_300"> 300 </mat-option>
                  <mat-option value="revenue_account_500"> 500 </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- 2 Item -->
            <div class="w-100">
              <p class="form-label fw-normal">
                Activity Account <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ '1800' }}
                </mat-label>
                <mat-select class="font-rubik">
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
              </mat-form-field>
            </div>

            <!-- 3 Item -->
            <div class="w-100">
              <p class="form-label fw-normal">
                Cost Centers <span class="text-red">*</span>
              </p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ '1000' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="operator_option_1"> 1000 </mat-option>
                  <mat-option value="operator_option_12"> 12000 </mat-option>
                  <mat-option value="operator_option_15"> 15000 </mat-option>
                  <mat-option value="operator_option_16"> 1000 </mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>

          <!-- Button group -->
          <div class="w-100 mt-4">
            <div
              class="button-wrap d-flex justify-content-end align-items-end gap-3"
            >
              <button type="button" class="step-button fill">Save</button>
              <button type="button" class="step-button" matStepperPrevious>
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
  `,
})
export class CalculationConfigurationComponent {
  selectedConditionValue: string | null = null;

  onSelectionConditionChange() {
    console.log('Selected option:', this.selectedValue);
  }

  // Required asset paths
  intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
  textalignIcon = 'assets/images/textalign-justifycenter.svg';

  private _formBuilder = inject(FormBuilder);

  // Only keep the form controls we're actually using
  selectedIntervalControl = this._formBuilder.control('');

  // Method called when radio selection changes
  onIntervalChange() {
    // Empty method but still used in template
  }

  @ViewChild(MatStepper) stepper!: MatStepper;

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

  // Select
  numberIcon = 'assets/images/due-date-icon.svg';
  calendarDateIcon = 'assets/images/calendar-edit.svg';
  selectedValue: string | null = null;

  onSelectionChange() {
    console.log('Selected option:', this.selectedValue);
  }

  // Input
  value_id: number | null = null;
  and_condition_value_id: number | null = null;
}
