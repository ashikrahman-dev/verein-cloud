import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  contribution_type: string;
  id: number;
  department: string;
  payment_method: string;
  basic_amount: number;
  booking_text: string;
  designation: string;
  income_account: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 3669,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Monthly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
  {
    id: 3670,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Monthly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
  {
    id: 3671,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Monthly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
  {
    id: 3672,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Monthly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
  {
    id: 3673,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Yearly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
  {
    id: 3674,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Monthly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
  {
    id: 3675,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Yearly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
  {
    id: 3676,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Yearly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
  {
    id: 3677,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Monthly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
  {
    id: 3678,
    contribution_type: 'Family contribution',
    department: 'Tennis Soccer 3',
    payment_method: 'Monthly',
    basic_amount: 6936.36,
    booking_text: 'Club contrib...',
    designation: 'John wick',
    income_account: '63,369',
  },
];
/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-overview-data-table',
  imports: [MatTableModule, MatSortModule, MatCheckboxModule],
  template: `
    <div
      class="d-flex justify-content-between align-items-center mb-3 overview-data-table-header"
    >
      <h5>Overview</h5>
      <button>
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
      </button>
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
          No.
        </th>
        <td mat-cell *matCellDef="let element">{{ element.id }}</td>
      </ng-container>

      <!-- contribution_type Column -->
      <ng-container matColumnDef="contribution_type">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by contribution_type"
        >
          Contribution type
        </th>
        <td mat-cell *matCellDef="let element">
          {{ element.contribution_type }}
        </td>
      </ng-container>

      <!-- Department Column -->
      <ng-container matColumnDef="department">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by department"
        >
          Department
        </th>
        <td mat-cell *matCellDef="let element">{{ element.department }}</td>
      </ng-container>

      <!-- Payment method Column -->
      <ng-container matColumnDef="payment_method">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by payment_method"
        >
          Payment method
        </th>
        <td mat-cell *matCellDef="let element">{{ element.payment_method }}</td>
      </ng-container>

      <!-- Basic Amount Column -->
      <ng-container matColumnDef="basic_amount">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by basic_amount"
        >
          Basic amount
        </th>
        <td mat-cell *matCellDef="let element">$ {{ element.basic_amount }}</td>
      </ng-container>

      <!-- Booking text Column -->
      <ng-container matColumnDef="booking_text">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by booking_text"
        >
          Booking text
        </th>
        <td mat-cell *matCellDef="let element">{{ element.booking_text }}</td>
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

      <!-- Income account Column -->
      <ng-container matColumnDef="income_account">
        <th
          mat-header-cell
          *matHeaderCellDef
          mat-sort-header
          sortActionDescription="Sort by income_account"
        >
          Income account
        </th>
        <td mat-cell *matCellDef="let element">
          $ {{ element.income_account }}
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styles: ``,
})
export class OverviewDataTableComponent {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = [
    'select',
    'id',
    'contribution_type',
    'department',
    'payment_method',
    'basic_amount',
    'booking_text',
    'designation',
    'income_account',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // Check

  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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
