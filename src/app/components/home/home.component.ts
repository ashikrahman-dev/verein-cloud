import { Component } from '@angular/core';
import { ContributionIntervalComponent } from '../contribution-interval/contribution-interval.component';

@Component({
  selector: 'app-home',
  imports: [ContributionIntervalComponent],
  template: `
    <div>
      <app-contribution-interval></app-contribution-interval>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
