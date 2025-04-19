import { Component } from '@angular/core';
import { ContributionIntervalComponent } from '../contribution-interval/contribution-interval.component';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-home',
  imports: [ContributionIntervalComponent, OverviewComponent],
  template: `
    <div>
      <app-overview></app-overview>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
