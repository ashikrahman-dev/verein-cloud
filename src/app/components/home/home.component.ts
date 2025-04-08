import { Component } from '@angular/core';
import { ContributionIntervalComponent } from '../contribution-interval/contribution-interval.component';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-home',
  imports: [StepperComponent, ContributionIntervalComponent],
  template: `
    <div>
      <app-stepper></app-stepper>
      <app-contribution-interval></app-contribution-interval>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
