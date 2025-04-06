import { CdkStepperModule } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { SelectContributionIntervalComponent } from '../select-contribution-interval/select-contribution-interval.component';
import { StepperComponent } from '../stepper/stepper.component';

import { ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

// Datepicker imports
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contribution-interval',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    StepperComponent,
    CdkStepperModule,
    SelectContributionIntervalComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="contribution-interval-wrapper">
      <div class="main-dashboard">
        <div class="">
          <div class="tab-menu mb-4">
            <!-- Bootstrap Tab -start -->
            <ul class="step-tab-wrap ps-0 pb-3" id="pills-tab" role="tablist">
              <li class="" role="presentation">
                <button
                  class="active border-0 bg-transparent w-100 h-100"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <div class="tab-a">
                    <div class="tab-link fs-6">
                      <div class="tab-title">
                        <span class="tab-title-pra">Contributions</span>
                        <div class="check"></div>
                      </div>
                      <h6 class="tab-pra ">Overview</h6>
                    </div>
                  </div>
                </button>
              </li>
              <li class="" role="presentation">
                <button
                  class="border-0 bg-transparent w-100 h-100"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <div class="tab-a" data-id="tab2">
                    <div class="tab-link">
                      <div class="tab-title">
                        <p class="tab-title-pra">Create new</p>
                        <div class="check"></div>
                      </div>
                      <p class="tab-pra mb-0">Contribution 1</p>
                      <p class="tab-pra mb-0">Basic data</p>
                    </div>
                  </div>
                </button>
              </li>
              <li class="" role="presentation">
                <button
                  class="border-0 bg-transparent w-100 h-100"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <div class="tab-a" data-id="tab3">
                    <div class="tab-link">
                      <div class="tab-title">
                        <p class="tab-title-pra">Create new</p>
                        <div class="check"></div>
                      </div>
                      <p class="tab-pra mb-0">Contribution 2</p>
                      <p class="tab-pra mb-0">Interval and Due Date</p>
                    </div>
                  </div>
                </button>
              </li>
              <li class="" role="presentation">
                <button
                  class="border-0 bg-transparent w-100 h-100"
                  id="pills-disabled-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-disabled"
                  type="button"
                  role="tab"
                  aria-controls="pills-disabled"
                  aria-selected="false"
                >
                  <div class="tab-a" data-id="tab4">
                    <div class="tab-link">
                      <div class="tab-title">
                        <p class="tab-title-pra">Create new</p>
                        <div class="check"></div>
                      </div>
                      <p class="tab-pra mb-0">Contribution 3</p>
                      <p class="tab-pra mb-0">Payment Terms and Calculation</p>
                    </div>
                  </div>
                </button>
              </li>
              <li class="" role="presentation">
                <button
                  class="border-0 bg-transparent w-100 h-100"
                  id="pills-contribution5-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contribution5"
                  type="button"
                  role="tab"
                  aria-controls="pills-contribution5"
                  aria-selected="false"
                >
                  <div class="tab-a h-100" data-id="tab5">
                    <div class="tab-link">
                      <div class="tab-title">
                        <p class="tab-title-pra">Create new</p>
                        <div class="check"></div>
                      </div>
                      <p class="tab-pra mb-0">Contribution 4</p>
                      <p class="tab-pra mb-0">Calculation Configuration</p>
                    </div>
                  </div>
                </button>
              </li>
              <li class="" role="presentation">
                <button
                  class="border-0 bg-transparent w-100 h-100"
                  id="pills-contribution6-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contribution6"
                  type="button"
                  role="tab"
                  aria-controls="pills-contribution6"
                  aria-selected="false"
                >
                  <div class="tab-a h-100" data-id="tab6">
                    <div class="tab-link">
                      <div class="tab-title">
                        <p class="tab-title-pra">Create new</p>
                        <div class="check"></div>
                      </div>
                      <p class="tab-pra mb-0">Contribution 5</p>
                      <p class="tab-pra mb-0">Finalization step</p>
                    </div>
                  </div>
                </button>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <!-- Step Content -->
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div class="step">
                  <ul class="step-menu-wrap">
                    <li class="testStatus step-item">Step 1</li>
                    <li class="testStatusGood step-item">Step 2</li>
                    <li class="testStatusNoGood step-item">Step 3</li>
                    <li class="testStatus step-item">Step 4</li>
                  </ul>
                  <div class="tab-contents text-center">
                    <h3 class="fs-4">
                      Proceeding to Contribution Interval and Due Date Settings
                    </h3>
                    <p class="fs-14">
                      Define the interval, billing period, and due date for a
                      structured and automated billing cycle.
                    </p>

                    <div class="button-wrap">
                      <button type="button" class="step-button fill">
                        Procced
                      </button>
                      <button type="button" class="step-button">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Step Content -->
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <div class="step">
                  <ul class="step-menu-wrap">
                    <li class="testStatus step-item">Step 1</li>
                    <li class="testStatusGood step-item">Step 2</li>
                    <li class="testStatusNoGood step-item">Step 3</li>
                    <li class="testStatus step-item">Step 4</li>
                  </ul>
                  <div class="tab-contents text-center">
                    <h3 class="fs-4">
                      Proceeding to Contribution Interval and Due Date Settings
                    </h3>
                    <p class="fs-14">
                      Define the interval, billing period, and due date for a
                      structured and automated billing cycle.
                    </p>

                    <div class="button-wrap">
                      <button type="button" class="step-button fill">
                        Procced
                      </button>
                      <button type="button" class="step-button">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                <app-stepper [linearModeSelected]="false" #appStepper>
                  <cdk-step [label]="'Step 1'">
                    <div class="step">
                      <div class="tab-contents text-center">
                        <h3 class="fs-4">
                          Proceeding to Contribution Interval and Due Date
                          Settings
                        </h3>
                        <p class="fs-14">
                          Define the interval, billing period, and due date for
                          a structured and automated billing cycle.
                        </p>

                        <div class="button-wrap">
                          <button
                            type="button"
                            class="step-button fill"
                            cdkStepperNext
                          >
                            Procced
                          </button>
                        </div>
                      </div>
                    </div>
                  </cdk-step>
                  <cdk-step [label]="'Step 2'">
                    <div class="step">
                      <div class="tab-contents">
                        <h3 class="fs-6 pb-3 mb-1">
                          Proceeding to Contribution Interval and Due Date
                          Settings
                        </h3>
                        <h6 class="fs-14">Contribution Interval & Due Date</h6>
                        <p class="fs-14 text-dark-2 pb-3 mb-1">
                          Define the interval, billing period, and due date for
                          a structured and automated billing cycle.
                        </p>
                        <p class="fs-14">Selecting the Contribution Interval</p>
                        <div>
                          <app-select-contribution-interval></app-select-contribution-interval>
                        </div>
                        <div
                          class="d-flex justify-content-end align-items-end w-100"
                        >
                          <div class="button-wrap">
                            <button
                              type="button"
                              class="step-button fill"
                              cdkStepperNext
                            >
                              Next
                            </button>
                            <button
                              type="button"
                              class="step-button"
                              cdkStepperPrevious
                            >
                              Back
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </cdk-step>
                  <cdk-step [label]="'Step 3'">
                    <div class="step">
                      <div class="tab-contents">
                        <h3 class="fs-6 pb-3 mb-3">
                          Selecting the Contribution Interval
                        </h3>
                        <h6 class="fs-14 pb-3">Select Contribution Interval</h6>
                        <div class="tab-checkbox-wrap d-flex">
                          <mat-radio-group
                            class="tab-checkbox-wrap d-flex"
                            [formControl]="selectedIntervalControl"
                            (change)="onIntervalChange()"
                          >
                            <mat-radio-button
                              class="w-100 check-box-item font-rubik"
                              value="start"
                            >
                              <h6>Start</h6>
                              <p>
                                The period begins as soon as the member's
                                contribution is activated and is then extended
                                by one year.
                              </p>
                            </mat-radio-button>
                            <mat-radio-button
                              class="w-100 check-box-item font-rubik"
                              value="interval"
                            >
                              <h6>Interval</h6>
                              <p>
                                The period begins as soon as the member's
                                contribution is activated and is then extended
                                by one year.
                              </p>
                            </mat-radio-button>
                            <mat-radio-button
                              class="w-100 check-box-item font-rubik"
                              value="predefined"
                            >
                              <h6>Predefined Date</h6>
                              <p>
                                The period begins as soon as the member's
                                contribution is activated and is then extended
                                by one year.
                              </p>
                            </mat-radio-button>
                          </mat-radio-group>
                        </div>

                        <div
                          *ngIf="selectedIntervalControl.value === 'predefined'"
                          class="selected-date-wrap"
                        >
                          <h6 class="fs-14 selected-date">Select Date</h6>
                          <mat-form-field
                            class="example-full-width w-100 font-rubik"
                          >
                            <mat-label class="font-rubik f-14">DD/MM</mat-label>
                            <input matInput [matDatepicker]="picker" />
                            <mat-datepicker-toggle
                              matIconPrefix
                              [for]="picker"
                              class="calendar-datepicker-icon"
                            >
                              <mat-icon matDatepickerToggleIcon
                                ><img [src]="calendarDateIcon" alt="Icon" />
                              </mat-icon>
                            </mat-datepicker-toggle>
                            <mat-datepicker #picker></mat-datepicker>
                          </mat-form-field>
                          <!-- Additional predefined date configuration options would go here -->
                        </div>

                        <div
                          class="d-flex justify-content-end align-items-end w-100 mt-4"
                        >
                          <div class="button-wrap">
                            <button
                              type="button"
                              class="step-button fill"
                              cdkStepperNext
                            >
                              Next
                            </button>
                            <button
                              type="button"
                              class="step-button"
                              cdkStepperPrevious
                            >
                              Back
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </cdk-step>
                  <cdk-step [label]="'Step 4'">
                    <div class="step">
                      <div class="tab-contents">
                        <h3 class="fs-6 pb-3 mb-1">
                          Setting the Due Date for Payments
                          <span class="basic-setting"> ( Basic setting )</span>
                        </h3>

                        <div
                          class="d-flex justify-content-end align-items-end w-100"
                        >
                          <div class="button-wrap">
                            <button
                              type="button"
                              class="step-button fill"
                              cdkStepperNext
                            >
                              Next
                            </button>
                            <button
                              type="button"
                              class="step-button"
                              cdkStepperPrevious
                            >
                              Back
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </cdk-step>
                </app-stepper>
              </div>
              <div
                class="tab-pane fade"
                id="pills-disabled"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabindex="0"
              >
                <div class="step">
                  <ul class="step-menu-wrap">
                    <li class="testStatus step-item">Step 1</li>
                    <li class="testStatusGood step-item">Step 2</li>
                    <li class="testStatusNoGood step-item">Step 3</li>
                    <li class="testStatus step-item">Step 4</li>
                  </ul>
                  <div class="tab-contents text-center">
                    <h3 class="fs-4">
                      Proceeding to Contribution Interval and Due Date Settings
                    </h3>
                    <p class="fs-14">
                      Define the interval, billing period, and due date for a
                      structured and automated billing cycle.
                    </p>

                    <div class="button-wrap">
                      <button type="button" class="step-button fill">
                        Procced
                      </button>
                      <button type="button" class="step-button">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contribution5"
                role="tabpanel"
                aria-labelledby="pills-contribution5-tab"
                tabindex="0"
              >
                <div class="step">
                  <ul class="step-menu-wrap">
                    <li class="testStatus step-item">Step 1</li>
                    <li class="testStatusGood step-item">Step 2</li>
                    <li class="testStatusNoGood step-item">Step 3</li>
                    <li class="testStatus step-item">Step 4</li>
                  </ul>
                  <div class="tab-contents text-center">
                    <h3 class="fs-4">
                      Proceeding to Contribution Interval and Due Date Settings
                    </h3>
                    <p class="fs-14">
                      Define the interval, billing period, and due date for a
                      structured and automated billing cycle.
                    </p>

                    <div class="button-wrap">
                      <button type="button" class="step-button fill">
                        Procced
                      </button>
                      <button type="button" class="step-button">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contribution6"
                role="tabpanel"
                aria-labelledby="pills-contribution6-tab"
                tabindex="0"
              >
                <div class="step">
                  <ul class="step-menu-wrap">
                    <li class="testStatus step-item">Step 1</li>
                    <li class="testStatusGood step-item">Step 2</li>
                    <li class="testStatusNoGood step-item">Step 3</li>
                    <li class="testStatus step-item">Step 4</li>
                  </ul>
                  <div class="tab-contents text-center">
                    <h3 class="fs-6">
                      Proceeding to Contribution Interval and Due Date Settings
                    </h3>
                    <p class="fs-14">
                      Define the interval, billing period, and due date for a
                      structured and automated billing cycle.
                    </p>

                    <div class="button-wrap">
                      <button type="button" class="step-button fill">
                        Procced
                      </button>
                      <button type="button" class="step-button">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Bootstrap Tab -end -->
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .result {
      background-color: #f9f9f9;
    }
  `,
})
export class ContributionIntervalComponent {
  calendarDateIcon = 'assets/images/calendar-edit.svg';

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
