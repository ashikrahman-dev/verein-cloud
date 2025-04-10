import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

// Datepicker imports

@Component({
  selector: 'app-basic-data-contribution',
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
  ], // ✅ Add FormsModule here
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
                type="number"
                placeholder="MB0001"
                class="form-input-field"
              />
            </div>
            <!-- Designation  -->
            <div>
              <p class="form-label">Designation</p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  <img [src]="numberIcon" alt="Calendar Icon" class="" />
                  {{ 'Membership fee' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="membership-fee-1">
                    Membership fee
                  </mat-option>
                  <mat-option value="membership-fee-2">
                    Membership fee 2
                  </mat-option>
                </mat-select>
              </mat-form-field>
            </div>
            <!-- Type of contribution  -->
            <div>
              <p class="form-label">Type of contribution</p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  <!-- <img [src]="numberIcon" alt="Calendar Icon" class="" /> -->
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
                  <mat-option value="limited-in-time">
                    Limited in Time
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
                  <mat-option value="department-none-2">
                    Department none
                  </mat-option>
                </mat-select>
              </mat-form-field>
            </div>
            <!-- Post ID -->
            <div>
              <p class="form-label">Post ID</p>
              <input
                [(ngModel)]="post_id"
                type="number"
                placeholder="193683"
                class="form-input-field post-id"
              />
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
              >
                Next
              </button>
              <button
                type="button"
                class="step-button fill"
                *ngIf="selectedValue !== 'limited-in-time'"
              >
                Save
              </button>
              <button type="button" class="step-button" matStepperPrevious>
                Back
              </button>
            </div>
          </div>

          <!-- <div
            class="conditional-content"
            *ngIf="selectedValue === 'limited-in-time'"
          >
            lorem Ipsum Dolor
          </div> -->
        </div>
      </mat-step>

      <mat-step label="Step 2">
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
            <!-- Contribution type  -->
            <div>
              <p class="form-label">Contribution type</p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  <img [src]="profileUser" alt="Calendar Icon" class="" />
                  {{ 'Family contributions' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="personal-contribution">
                    Personal contributions
                  </mat-option>
                  <mat-option value="family-contribution">
                    Family contributions
                  </mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <!-- Interval & Due Date  -->
            <div>
              <p class="form-label">Interval & Due Date</p>
              <mat-form-field class="w-100 bg-white font-rubik">
                <mat-label class="font-rubik d-flex gap-2 align-items-center">
                  <img
                    [src]="intervalCalendarIcon"
                    alt="Calendar Icon"
                    class=""
                  />
                  {{ 'Day’s ' }}
                </mat-label>
                <mat-select class="font-rubik">
                  <mat-option value="interval-due-date-1"> 1 Day </mat-option>
                  <mat-option value="interval-due-date-2"> 2 Day’s </mat-option>
                  <mat-option value="interval-due-date-3"> 3 Day’s </mat-option>
                  <mat-option value="interval-due-date-4"> 4 Day’s </mat-option>
                  <mat-option value="interval-due-date-5"> 5 Day’s </mat-option>
                </mat-select>
              </mat-form-field>
            </div>
          </div>

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

  `, // Added sample style for the new class
})
export class BasicDataContributionComponent {
  contribution_id: number | null = null;
  post_id: number | null = null;

  numberIcon = 'assets/images/contribution-id-icon.svg';
  calendarDateIcon = 'assets/images/due-date-icon.svg';
  clockIcon = 'assets/images/clock-icon.svg';
  profileUser = 'assets/images/profile-2user.svg';
  intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
  selectedValue: string | null = null;

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
