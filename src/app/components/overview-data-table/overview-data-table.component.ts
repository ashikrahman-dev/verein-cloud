import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
  imports: [MatTableModule, MatSortModule, MatCheckboxModule, RouterModule],
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
      <!-- Checkbox Column -->
      <ng-container matColumnDef="select">
        <th mat-header-cell *matHeaderCellDef>
          <mat-checkbox
            (change)="$event ? toggleAllRows() : null"
            [checked]="selection.hasValue() && isAllSelected()"
            [indeterminate]="selection.hasValue() && !isAllSelected()"
            [aria-label]="checkboxLabel()"
          >
          </mat-checkbox>
        </th>
        <td mat-cell *matCellDef="let row">
          <mat-checkbox
            (click)="$event.stopPropagation()"
            (change)="$event ? selection.toggle(row) : null"
            [checked]="selection.isSelected(row)"
            [aria-label]="checkboxLabel(row)"
          >
          </mat-checkbox>
        </td>
      </ng-container>

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

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styles: `
    .mdc-data-table__cell, .mdc-data-table__header-cell {
      padding: 0 8px;
    }
  `,
})
export class OverviewDataTableComponent {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = [
    'select',
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
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
}
