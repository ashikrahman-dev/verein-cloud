import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

export interface PeriodicElement {
  id: number;
  designation: string;
  contribution_type: string;
  basic_amount: number;
  income_tax: string;
  interval: string;
  booking_account: string;
  cost_center: string;
  department: string;
  members: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 3669,
    booking_account: 'Tennis Soccer 3',
    contribution_type: 'Family contribution',
    basic_amount: 6936.36,
    income_tax: '63,369',
    interval: 'Yearly',
    cost_center: 'Club contrib...',
    department: 'Tennis',
    designation: 'John wick',
    members: 2,
  },
  {
    id: 3670,
    contribution_type: 'Family contribution',
    booking_account: 'Tennis Soccer 3',
    basic_amount: 6936.36,
    interval: 'Yearly',
    cost_center: 'Club contrib...',
    designation: 'John wick',
    department: 'Tennis',
    income_tax: '63,369',
    members: 8,
  },
  {
    id: 3671,
    contribution_type: 'Family contribution',
    booking_account: 'Tennis Soccer 3',
    basic_amount: 6936.36,
    interval: 'Yearly',
    cost_center: 'Club contrib...',
    designation: 'John wick',
    department: 'Tennis',
    income_tax: '63,369',
    members: 42,
  },
  {
    id: 3672,
    contribution_type: 'Family contribution',
    booking_account: 'Tennis Soccer 3',
    basic_amount: 6936.36,
    interval: 'Yearly',
    cost_center: 'Club contrib...',
    designation: 'John wick',
    department: 'Tennis',
    income_tax: '63,369',
    members: 7,
  },
  {
    id: 3673,
    contribution_type: 'Family contribution',
    booking_account: 'Tennis Soccer 3',
    basic_amount: 6936.36,
    interval: 'Yearly',
    cost_center: 'Club contrib...',
    designation: 'John wick',
    department: 'Tennis',
    income_tax: '63,369',
    members: 11,
  },
  {
    id: 3674,
    contribution_type: 'Family contribution',
    booking_account: 'Tennis Soccer 3',
    basic_amount: 6936.36,
    interval: 'Yearly',
    cost_center: 'Club contrib...',
    designation: 'John wick',
    department: 'Tennis',
    income_tax: '63,369',
    members: 2,
  },
  {
    id: 3675,
    contribution_type: 'Family contribution',
    booking_account: 'Tennis Soccer 3',
    basic_amount: 6936.36,
    interval: 'Yearly',
    cost_center: 'Club contrib...',
    designation: 'John wick',
    department: 'Tennis',
    income_tax: '63,369',
    members: 2,
  },
  {
    id: 3676,
    contribution_type: 'Family contribution',
    booking_account: 'Tennis Soccer 3',
    basic_amount: 6936.36,
    income_tax: '63,369',
    interval: 'Yearly',
    cost_center: 'Club contrib...',
    designation: 'John wick',
    department: 'Tennis',
    members: 2,
  },
];
/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-overview-data-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <div
      class="d-flex justify-content-between align-items-center mb-3 overview-data-table-header"
    >
      <h5>Overview</h5>
      <a routerLink="/contribution">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 7H10.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 10.5V3.5"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Add New
      </a>
    </div>
    <table
      mat-table
      [dataSource]="dataSource"
      matSort
      (matSortChange)="announceSortChange($event)"
      class="mat-elevation-z8 overview-data-table"
    >
      <!-- id Column -->
      <ng-container matColumnDef="id">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by number"
        >
          ID
        </th>
        <td mat-cell *matCellDef="let element">{{ element.id }}</td>
      </ng-container>

      <!-- Designation Column -->
      <ng-container matColumnDef="designation">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by designation"
        >
          Designation
        </th>
        <td mat-cell *matCellDef="let element">{{ element.designation }}</td>
      </ng-container>

      <!-- Contribution Type Column -->
      <ng-container matColumnDef="contribution_type">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by contribution_type"
        >
          Contribution Type
        </th>
        <td mat-cell *matCellDef="let element">
          {{ element.contribution_type }}
        </td>
      </ng-container>

      <!-- Basic Amount Column -->
      <ng-container matColumnDef="basic_amount">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by basic_amount"
        >
          Basic Amount
        </th>
        <td mat-cell *matCellDef="let element">$ {{ element.basic_amount }}</td>
      </ng-container>

      <!-- Income Account Column -->
      <ng-container matColumnDef="income_tax">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by income_tax"
        >
          VAT
        </th>
        <td mat-cell *matCellDef="let element">$ {{ element.income_tax }}</td>
      </ng-container>

      <!-- Interval Column -->
      <ng-container matColumnDef="interval">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by interval"
        >
          Interval
        </th>
        <td mat-cell *matCellDef="let element">{{ element.interval }}</td>
      </ng-container>

      <!-- Booking Account Column -->
      <ng-container matColumnDef="booking_account">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by booking_account"
        >
          Booking Account
        </th>
        <td mat-cell *matCellDef="let element">
          {{ element.booking_account }}
        </td>
      </ng-container>

      <!-- Cost Center Column -->
      <ng-container matColumnDef="cost_center">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by cost_center"
        >
          Cost Center
        </th>
        <td mat-cell *matCellDef="let element">
          {{ element.cost_center }}
        </td>
      </ng-container>

      <!-- Department(s) Column -->
      <ng-container matColumnDef="department">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by department"
        >
          Department(s)
        </th>
        <td mat-cell *matCellDef="let element" class="text-center">
          {{ element.department }}
        </td>
      </ng-container>

      <!-- Members Column -->
      <ng-container matColumnDef="members">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by members"
        >
          Members
        </th>
        <td mat-cell *matCellDef="let element" class="text-center">
          {{ element.members }}
        </td>
      </ng-container>

      <!-- Actions Column -->
      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let element">
          <button
            mat-icon-button
            [matMenuTriggerFor]="menu"
            aria-label="Actions menu"
            class="table-actions-button"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.0002" cy="4.16667" r="1.66667" fill="#999999" />
              <circle cx="10.0002" cy="10.0007" r="1.66667" fill="#999999" />
              <circle cx="10.0002" cy="15.8327" r="1.66667" fill="#999999" />
            </svg>
          </button>
          <mat-menu #menu="matMenu" class="font-rubik matMenuWrap">
            <button mat-menu-item (click)="onEdit(element)">
              <span class="font-rubik">Edit</span>
            </button>
            <button mat-menu-item (click)="onDelete(element)">
              <span class="font-rubik">Delete</span>
            </button>
            <button mat-menu-item (click)="onViewDetails(element)">
              <span class="font-rubik">View Details</span>
            </button>
          </mat-menu>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styles: `
    .mdc-data-table__cell, .mdc-data-table__header-cell {
      padding: 0 8px;
    }
    
    /* Make three dots menu align center in the cell */
    [mat-cell]:last-of-type {
      text-align: center;
    }
    
    /* Hide actions column header text but keep the space */
    [mat-header-cell]:last-of-type {
      text-align: center;
    }
    .table-actions-button svg {
      width: 20px;
    }


  `,
})
export class OverviewDataTableComponent {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = [
    'id',
    'designation',
    'contribution_type',
    'basic_amount',
    'income_tax',
    'interval',
    'booking_account',
    'cost_center',
    'department',
    'members',
    'actions', // Added new actions column
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onEdit(element: PeriodicElement) {
    console.log('Edit clicked for:', element);
    // Implement your edit logic here
  }

  onDelete(element: PeriodicElement) {
    console.log('Delete clicked for:', element);
    // Implement your delete logic here
  }

  onViewDetails(element: PeriodicElement) {
    console.log('View Details clicked for:', element);
    // Implement your view details logic here
  }
}
