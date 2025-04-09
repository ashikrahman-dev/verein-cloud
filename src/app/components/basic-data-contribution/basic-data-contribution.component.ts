import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

// Datepicker imports

@Component({
  selector: 'app-basic-data-contribution',
  standalone: true, // ✅ Mark as standalone
  imports: [
    FormsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    //MatInputModule,
    //MatCheckboxModule,
    //ReactiveFormsModule,
    //MatCardModule,
    //MatDatepickerModule,
    //MatIconModule,
  ], // ✅ Add FormsModule here
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="basic-data-contribution">
      <h4 class="heading pb-28">Create new posts</h4>
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
              {{ selectedValue || 'Membership fee' }}
            </mat-label>
            <mat-select class="font-rubik">
              <mat-option value="membership-fee-1"> Membership fee </mat-option>
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
              {{ selectedValue || 'Normal contribution' }}
            </mat-label>
            <mat-select
              class="font-rubik"
              [(ngModel)]="selectedValue"
              (selectionChange)="onSelectionChange()"
            >
              <mat-option value="normal-contribution">
                Normal contribution
              </mat-option>
              <mat-option value="limited-in-time"> Limited in Time </mat-option>
            </mat-select>
          </mat-form-field>
        </div>
        <!-- Departments  -->
        <div>
          <p class="form-label">Departments</p>
          <mat-form-field class="w-100 bg-white font-rubik">
            <mat-label class="font-rubik d-flex gap-2 align-items-center">
              {{ selectedValue || 'None' }}
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
              {{ selectedValue || 'One time ' }}
            </mat-label>
            <mat-select class="font-rubik">
              <mat-option value="description-one-time"> One time </mat-option>
              <mat-option value="description-weekly"> Weekly </mat-option>
              <mat-option value="description-monthly"> Monthly </mat-option>
              <mat-option value="description-quarters"> Quarters </mat-option>
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
            {{ selectedValue || '1 Months ' }}
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
            cdkStepperNext
            *ngIf="selectedValue === 'limited-in-time'"
          >
            Next
          </button>
          <button
            type="button"
            class="step-button fill"
            cdkStepperNext
            *ngIf="selectedValue !== 'limited-in-time'"
          >
            Save
          </button>
          <button type="button" class="step-button" cdkStepperPrevious>
            Back
          </button>
        </div>
      </div>

      <div
        class="conditional-content"
        *ngIf="selectedValue === 'limited-in-time'"
      >
        lorem Ipsum Dolor
      </div>
    </div>
  `,
  styles: ``, // You can add your styles here
})
export class BasicDataContributionComponent {
  contribution_id: number | null = null;
  post_id: number | null = null;

  numberIcon = 'assets/images/contribution-id-icon.svg';
  calendarDateIcon = 'assets/images/due-date-icon.svg';
  clockIcon = 'assets/images/clock-icon.svg';
  selectedValue: string | null = null;

  onSelectionChange() {
    console.log('Selected option:', this.selectedValue);
  }

  private readonly _formBuilder = inject(FormBuilder);

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
}
