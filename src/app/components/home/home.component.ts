import { Component } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-home',
  imports: [OverviewComponent],
  template: `
    <div>
      <app-overview></app-overview>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
