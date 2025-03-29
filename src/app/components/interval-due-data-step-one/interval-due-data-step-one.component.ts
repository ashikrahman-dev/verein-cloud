import { Component } from '@angular/core';

@Component({
  selector: 'app-interval-due-data-step-one',
  imports: [],
  template: `
    <div class="step">
      <div class="tab-contents text-center">
        <h3 class="fs-4">
          Proceeding to Contribution Interval and Due Date Settings
        </h3>
        <p class="fs-14">
          Define the interval, billing period, and due date for a structured and
          automated billing cycle.
        </p>

        <div class="button-wrap">
          <button
            type="button"
            class="step-button fill"
            CdkStepperModule
            CdkStepper
            cdkStepperNext
          >
            Procced
          </button>
          <button type="button" class="step-button">Cancel</button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class IntervalDueDataStepOneComponent {}
