import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-basic-data-contribution',
  standalone: true,
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
      [ngClass]="{
        'contribution-basic-data-step-wrap': true,
        'limited-time-class': selectedValue === 'limited-in-time'
      }"
    >
      <mat-step label="Step 1">
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
                class="error-message"
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
                class="error-message"
              >
                Contains invalid characters
              </div>
            </div>
            <!-- Type of contribution  -->
            <div>
              <p class="form-label">Type of contribution</p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'Normal contribution' }}
                </mat-label>
                <mat-select
                  class="font-rubik"
                  [(ngModel)]="selectedValue"
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
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  {{ 'None' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="department-none"> None </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- Post description  -->
            <div>
              <p class="form-label">Post description</p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  <img [src]="calendarDateIcon" alt="Calendar Icon" class="" />
                  {{ 'One time ' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="description-one-time">
                    One time
                  </mat-option>
                  <mat-option value="description-weekly"> Weekly </mat-option>
                  <mat-option value="description-monthly"> Monthly </mat-option>
                  <mat-option value="description-quarters">
                    Quarters
                  </mat-option>
                  <mat-option value="description-years"> Years </mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>

          <!-- Duration type  -->
          <div class="pt-3" *ngIf="selectedValue === 'limited-in-time'">
            <p class="form-label">Duration type</p>
            <mat-form-field class="w-100 bg-white font-rubik">
              <mat-label class="font-rubik d-flex gap-2 align-items-center">
                <img [src]="clockIcon" alt="Calendar Icon" class="" />
                {{ '1 Months ' }}
              </mat-label>
              <mat-select class="font-rubik">
                <mat-option value="duration-month-1"> 1 Months </mat-option>
                <mat-option value="duration-month-2"> 2 Months </mat-option>
                <mat-option value="duration-month-3"> 3 Months </mat-option>
                <mat-option value="duration-month-4"> 4 Months </mat-option>
                <mat-option value="duration-month-5"> 5 Months </mat-option>
              </mat-select>
            </mat-form-field>
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
                  contributionIdControl.invalid || designationIdControl.invalid
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

      <mat-step label="Step 2">
        <!-- Rest of your component remains the same -->
      </mat-step>
    </mat-stepper>
  `,
  styles: `
    .error-message {
      color: #f44336;
      font-size: 12px;
      margin-top: 4px;
    }
  `,
})
export class BasicDataContributionComponent {
  contribution_id: number | null = null;
  designation_id: number | null = null;
  post_id: number | null = null;

  numberIcon = 'assets/images/contribution-id-icon.svg';
  calendarDateIcon = 'assets/images/due-date-icon.svg';
  clockIcon = 'assets/images/clock-icon.svg';
  profileUser = 'assets/images/profile-2user.svg';
  intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
  selectedValue: string | null = null;

  // Contribution ID validation (kept same as before)
  contributionIdControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9 _\-\/]+$/),
  ]);

  // Designation ID validation with more allowed characters
  designationIdControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9 _\-,.!?;":+()\\/']+$/),
  ]);

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
    }
  }

  onSelectionChange() {
    console.log('Selected option:', this.selectedValue);
  }

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
  }

  // Stepper form groups
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
