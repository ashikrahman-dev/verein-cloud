import { Component } from '@angular/core';
import { OverviewDataTableComponent } from '../overview-data-table/overview-data-table.component';

@Component({
  selector: 'app-overview',
  imports: [OverviewDataTableComponent],
  template: `
    <div class="contribution-interval-wrapper">
      <div class="main-dashboard">
        <div class="overview-datatable-wrap">
          <app-overview-data-table></app-overview-data-table>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class OverviewComponent {}
