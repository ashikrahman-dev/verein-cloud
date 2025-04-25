import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  provideMomentDateAdapter,
} from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

// Import the locale for Monday as first day of the week
import 'moment/locale/en-gb';

const moment = _rollupMoment || _moment;

// Set the locale globally to en-gb (starts week on Monday)
moment.locale('en-gb');

// Custom date formats
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-datepicker',
  providers: [
    provideMomentDateAdapter(),
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: { useUtc: false, firstDayOfWeek: 1 }, // Monday
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Moment.js datepicker</mat-label>
      <input matInput [matDatepicker]="dp" [formControl]="date" />
      <mat-hint>DD.MM.YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="dp"></mat-datepicker-toggle>
      <mat-datepicker #dp></mat-datepicker>
    </mat-form-field>
  `,
  styles: ``,
})
export class DatepickerComponent {
  readonly date = new FormControl(moment());
}
