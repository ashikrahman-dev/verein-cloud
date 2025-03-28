import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-contribution-interval',
  imports: [StepperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this,
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
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                lorem
                <app-stepper [linearModeSelected]="false" #appStepper>
                  <cdk-step [label]="'Information'"> Step 1 </cdk-step>
                  <cdk-step [label]="'Contact'"> Step 2 </cdk-step>
                  <cdk-step [label]="'Security'"> Step 3 </cdk-step>
                  <cdk-step [label]="'Finish'"> Step 4 </cdk-step>
                </app-stepper>

                <!-- <div *ngIf="selected">
                  <ng-container
                    [ngTemplateOutlet]="selected.content"
                  ></ng-container>
                </div> -->
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
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
            </div>
            <!-- Bootstrap Tab -end -->
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `




    
  `,
})
export class ContributionIntervalComponent {}
