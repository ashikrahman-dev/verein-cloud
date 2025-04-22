import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-basic-data-contribution',
  standalone: true,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { hideRequiredMarker: true },
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
      [linear]="isLinear"
      #stepper
      [ngClass]="{
        'contribution-basic-data-step-wrap': true,
        'limited-time-class': selectedValue === 'limited-in-time'
      }"
    >
      <mat-step [stepControl]="firstFormGroup" label="Step 1">
        <div class="basic-data-contribution">
          <h4 class="heading pb-28 d-flex gap-2 align-items-center">
            Create new posts
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
          <div class="basic-data-contribution-form">
            <!-- Contribution ID -->
            <div>
              <p class="form-label">Contribution ID</p>
              <input
                [(ngModel)]="contribution_id"
                placeholder="MB0001"
                [formControl]="contributionIdControl"
                class="form-input-field font-rubik"
                (input)="validateContributionId($event)"
              />
              <div
                *ngIf="
                  contributionIdControl.invalid && contributionIdControl.touched
                "
                class="error-message font-rubik"
              >
                Only alphanumeric characters, spaces, underscores, hyphens, and
                forward slashes are allowed
              </div>
            </div>
            <!-- Designation  -->
            <div>
              <p class="form-label">Designation</p>
              <input
                [(ngModel)]="designation_id"
                placeholder="Designation"
                [formControl]="designationIdControl"
                class="form-input-field font-rubik"
                (input)="validateDesignationId($event)"
              />
              <div
                *ngIf="
                  designationIdControl.invalid && designationIdControl.touched
                "
                class="error-message font-rubik"
              >
                Contains invalid characters
              </div>
            </div>
            <!-- Type of contribution  -->
            <div>
              <p class="form-label">Type of contribution</p>
              <mat-form-field
                class="w-100 bg-white font-rubik"
                hideRequiredMarker
              >
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'Normal contribution' }}
                </mat-label>
                <mat-select
                  class="font-rubik"
                  [(ngModel)]="selectedValue"
                  [formControl]="contributionTypeControl"
                  (selectionChange)="onSelectionChange()"
                >
                  <mat-option value="normal-contribution">
                    Normal contribution
                  </mat-option>
                  <mat-option value="age-dependent-contribution">
                    Age-dependent contribution
                  </mat-option>
                  <mat-option value="family-contribution">
                    Family contribution
                  </mat-option>
                  <mat-option value="limited-in-time">
                    Time-limited contribution
                  </mat-option>
                </mat-select>
              </mat-form-field>
            </div>
            <!-- Departments  -->
            <div>
              <p class="form-label">Departments</p>
              <mat-form-field
                class="w-100 bg-white font-rubik"
                hideRequiredMarker
              >
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'None' }}
                </mat-label>
                <mat-select
                  [formControl]="departmentControl"
                  class="font-rubik"
                >
                  <mat-option value="department-none"> None </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- Anzahl -->
            <div *ngIf="selectedValue === 'limited-in-time'">
              <p class="form-label">Anzahl</p>
              <input
                [(ngModel)]="anzahl"
                placeholder="123"
                [formControl]="anzahlControl"
                class="form-input-field font-rubik remove-icon-cls"
                (input)="validateAnzahl($event)"
              />
              <div
                *ngIf="anzahlControl.invalid && anzahlControl.touched"
                class="error-message font-rubik"
              >
                Please enter a number with maximum 3 digits
              </div>
            </div>

            <!-- Duration type  -->
            <div *ngIf="selectedValue === 'limited-in-time'">
              <p class="form-label">Duration Time</p>
              <mat-form-field
                class="w-100 bg-white font-rubik"
                hideRequiredMarker
              >
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  <img [src]="clockIcon" alt="Calendar Icon" class="" />
                  {{ 'Days' }}
                </mat-label>
                <mat-select
                  [formControl]="durationTypeControl"
                  class="font-rubik"
                >
                  <mat-option value="duration-month-1"> Days </mat-option>
                  <mat-option value="duration-month-2"> Weeks </mat-option>
                  <mat-option value="duration-month-3"> Months </mat-option>
                  <mat-option value="duration-month-4"> Years </mat-option>
                </mat-select>
              </mat-form-field>
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
                *ngIf="selectedValue === 'limited-in-time'"
                [disabled]="
                  contributionIdControl.invalid ||
                  designationIdControl.invalid ||
                  (selectedValue === 'limited-in-time' && anzahlControl.invalid)
                "
              >
                Next
              </button>
              <button
                type="button"
                class="step-button fill"
                *ngIf="selectedValue !== 'limited-in-time'"
                [disabled]="
                  contributionIdControl.invalid || designationIdControl.invalid
                "
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
      </mat-step>

      <mat-step [stepControl]="secondFormGroup" label="Step 2">
        <div class="basic-data-contribution">
          <h4 class="heading pb-28 d-flex gap-2 align-items-center">
            Create new posts
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
          <div class="basic-data-contribution-form">
            <!-- Interval & Due Date  -->
            <div class="w-100">
              <p class="form-label">Interval & Due Date</p>
              <mat-form-field
                class="w-100 bg-white font-rubik"
                hideRequiredMarker
              >
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  <img
                    [src]="intervalCalendarIcon"
                    alt="Calendar Icon"
                    class=""
                  />
                  {{ 'Days ' }}
                </mat-label>
                <mat-select
                  [formControl]="intervalDueDateControl"
                  class="font-rubik"
                >
                  <mat-option value="interval-due-date-1"> 1 Day </mat-option>
                  <mat-option value="interval-due-date-2"> 2 Day's </mat-option>
                  <mat-option value="interval-due-date-3"> 3 Day's </mat-option>
                  <mat-option value="interval-due-date-4"> 4 Day's </mat-option>
                  <mat-option value="interval-due-date-5"> 5 Day's </mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>

          <div class="w-100 mt-4">
            <div
              class="button-wrap d-flex justify-content-end align-items-end gap-3"
            >
              <button
                type="button"
                class="step-button fill"
                [disabled]="
                  secondStepContributionTypeControl.invalid ||
                  intervalDueDateControl.invalid
                "
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
      </mat-step>
    </mat-stepper>
  `,
  styles: `
    .error-message {
      color: #f44336;
      font-size: 12px;
      margin-top: 4px;
    }
    
    /* Hide required indicator asterisk globally */
    ::ng-deep .mat-mdc-form-field-required-marker {
      display: none !important;
    }
  `,
})
export class BasicDataContributionComponent {
  @ViewChild('stepper') stepper!: MatStepper;

  contribution_id: string = '';
  designation_id: string = '';
  post_id: number | null = null;
  anzahl: string = '';

  numberIcon = 'assets/images/contribution-id-icon.svg';
  calendarDateIcon = 'assets/images/due-date-icon.svg';
  clockIcon = 'assets/images/clock-icon.svg';
  profileUser = 'assets/images/profile-2user.svg';
  intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
  selectedValue: string = 'normal-contribution';

  // Set linear mode (enforces form validation before proceeding to next step)
  isLinear = true;

  // First step form controls
  contributionIdControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9 _\-\/]+$/),
  ]);

  designationIdControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9 _\-,.!?;":+()\\/']+$/),
  ]);

  contributionTypeControl = new FormControl('normal-contribution', [
    Validators.required,
  ]);

  departmentControl = new FormControl('department-none');

  anzahlControl = new FormControl('', [Validators.pattern(/^[0-9]{1,3}$/)]);

  durationTypeControl = new FormControl('duration-month-1');

  // Second step form controls
  secondStepContributionTypeControl = new FormControl('family-contribution', [
    Validators.required,
  ]);

  intervalDueDateControl = new FormControl('interval-due-date-1', [
    Validators.required,
  ]);

  private _formBuilder = inject(FormBuilder);

  // Create form groups for the stepper
  firstFormGroup = this._formBuilder.group({
    contributionId: this.contributionIdControl,
    designationId: this.designationIdControl,
    contributionType: this.contributionTypeControl,
    department: this.departmentControl,
    anzahl: this.anzahlControl,
    durationType: this.durationTypeControl,
  });

  secondFormGroup = this._formBuilder.group({
    contributionType: this.secondStepContributionTypeControl,
    intervalDueDate: this.intervalDueDateControl,
  });

  // Method to validate Contribution ID input in real-time
  validateContributionId(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Only allow digits, letters, spaces, underscores, hyphens, and forward slashes
    const regex = /^[a-zA-Z0-9 _\-\/]*$/;

    if (!regex.test(value)) {
      // If invalid characters are entered, remove them
      const sanitizedValue = value.replace(/[^a-zA-Z0-9 _\-\/]/g, '');
      input.value = sanitizedValue;

      // Update the form control value
      this.contributionIdControl.setValue(sanitizedValue);
      this.contribution_id = sanitizedValue;
    }
  }

  // Method to validate Designation ID input in real-time
  validateDesignationId(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Allow: digits, letters, spaces, underscores, hyphens, commas, periods,
    // exclamation marks, question marks, semicolons, quotation marks, colons,
    // plus signs, parentheses, backslashes, forward slashes, and apostrophes
    const regex = /^[a-zA-Z0-9 _\-,.!?;":+()\\/']*$/;

    if (!regex.test(value)) {
      // If invalid characters are entered, remove them
      const sanitizedValue = value.replace(
        /[^a-zA-Z0-9 _\-,.!?;":+()\\/']/g,
        ''
      );
      input.value = sanitizedValue;

      // Update the form control value
      this.designationIdControl.setValue(sanitizedValue);
      this.designation_id = sanitizedValue;
    }
  }

  // Method to validate Anzahl input in real-time
  validateAnzahl(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Only allow digits (0-9)
    const regex = /^[0-9]*$/;

    if (!regex.test(value)) {
      // If invalid characters are entered, remove them
      const sanitizedValue = value.replace(/[^0-9]/g, '');
      input.value = sanitizedValue;

      // Update the form control value
      this.anzahlControl.setValue(sanitizedValue);
      this.anzahl = sanitizedValue;
    }

    // Limit to 3 digits
    if (value.length > 3) {
      const truncatedValue = value.substring(0, 3);
      input.value = truncatedValue;

      // Update the form control value
      this.anzahlControl.setValue(truncatedValue);
      this.anzahl = truncatedValue;
    }
  }

  onSelectionChange() {
    console.log('Selected option:', this.selectedValue);

    if (this.selectedValue === 'limited-in-time') {
      // Make anzahl required for limited-in-time type
      this.anzahlControl.setValidators([
        Validators.required,
        Validators.pattern(/^[0-9]{1,3}$/),
      ]);
    } else {
      // Remove validators if not limited-in-time
      this.anzahlControl.clearValidators();
      this.anzahlControl.setValidators([Validators.pattern(/^[0-9]{1,3}$/)]);
      this.anzahl = '';
      this.anzahlControl.setValue('');
    }

    // Update validation status
    this.anzahlControl.updateValueAndValidity();
  }

  saveForm() {
    // Gather all form data
    const formData = {
      contributionId: this.contributionIdControl.value,
      designationId: this.designationIdControl.value,
      contributionType:
        this.selectedValue === 'limited-in-time'
          ? this.contributionTypeControl.value
          : this.secondStepContributionTypeControl.value,
      department: this.departmentControl.value,
      anzahl: this.anzahlControl.value,
      durationType: this.durationTypeControl.value,
      intervalDueDate: this.intervalDueDateControl.value,
    };

    console.log('Form data saved:', formData);
    // Here you would typically send the data to a service

    // Optionally reset the form after saving
    // this.stepper.reset();
  }
}
