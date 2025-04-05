import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-contribution-interval',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  template: `
    <form>
      <!-- <h4>native html select</h4> -->
      <mat-form-field class="w-100 bg-white">
        <mat-label
          ><svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33301 1.83398V3.83398"
              stroke="#5A5A5A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.667 1.83398V3.83398"
              stroke="#5A5A5A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.33301 6.56055H13.6663"
              stroke="#5A5A5A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.807 11.0129L10.447 13.3729C10.3537 13.4662 10.267 13.6395 10.247 13.7662L10.1203 14.6662C10.0737 14.9929 10.3004 15.2195 10.627 15.1729L11.527 15.0462C11.6537 15.0262 11.8337 14.9395 11.9204 14.8462L14.2804 12.4862C14.687 12.0795 14.8804 11.6062 14.2804 11.0062C13.687 10.4129 13.2137 10.6062 12.807 11.0129Z"
              stroke="#5A5A5A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.4668 11.3535C12.6668 12.0735 13.2268 12.6335 13.9468 12.8335"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 15.1673H5.33333C3 15.1673 2 13.834 2 11.834V6.16732C2 4.16732 3 2.83398 5.33333 2.83398H10.6667C13 2.83398 14 4.16732 14 6.16732V8.50065"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99666 9.63411H8.00265"
              stroke="#292D32"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.52987 9.63411H5.53585"
              stroke="#292D32"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.52987 11.6341H5.53585"
              stroke="#292D32"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Monthly</mat-label
        >
        <select matNativeControl [(ngModel)]="selectedCar" name="car">
          <option value="" selected></option>
          @for (car of cars; track car) {
          <option [value]="car.value">{{ car.viewValue }}</option>
          }
        </select>
      </mat-form-field>
      <!-- <p>Selected car: {{ selectedCar }}</p> -->
    </form>
  `,
  styles: ``,
})
export class SelectContributionIntervalComponent {
  selectedValue: any;
  selectedCar: any;

  cars: Car[] = [
    { value: 'daily', viewValue: 'Daily' },
    { value: 'monthly', viewValue: 'Monthly' },
    { value: 'yearly', viewValue: 'Yearly' },
  ];
}
