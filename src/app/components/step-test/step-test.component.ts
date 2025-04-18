import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-step-test',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  template: `
    <mat-stepper [linear]="isLinear" #stepper>
      <mat-step [stepControl]="firstFormGroup">
        <form [formGroup]="firstFormGroup">
          <!-- <ng-template matStepLabel>Fill out your name</ng-template> -->
          <!-- <h4 matStepLabel>Fiil out your name</h4> -->
          <mat-form-field>
            <!-- <mat-label>Name</mat-label>
            <span>Your Name:</span> -->
            <input
              matInput
              placeholder="First name"
              formControlName="firstCtrl"
              required
            />
          </mat-form-field>
          <div>
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step [stepControl]="secondFormGroup" label="Fill out your address">
        <form [formGroup]="secondFormGroup">
          <mat-form-field>
            <mat-label>Address</mat-label>
            <input
              matInput
              formControlName="secondCtrl"
              placeholder="Ex. 1 Main St, New York, NY"
              required
            />
          </mat-form-field>
          <mat-form-field>
            <mat-label>State</mat-label>
            <mat-select formControlName="stateCtrl" required>
              <mat-option value="AL">Alabama</mat-option>
              <mat-option value="AK">Alaska</mat-option>
              <mat-option value="AZ">Arizona</mat-option>
              <mat-option value="AR">Arkansas</mat-option>
              <mat-option value="CA">California</mat-option>
              <mat-option value="CO">Colorado</mat-option>
              <mat-option value="CT">Connecticut</mat-option>
              <mat-option value="DE">Delaware</mat-option>
              <mat-option value="FL">Florida</mat-option>
              <mat-option value="GA">Georgia</mat-option>
              <!-- You can add more states here -->
            </mat-select>
          </mat-form-field>
          <div>
            <button mat-button matStepperPrevious>Back</button>
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Done</ng-template>
        <p>You are now done.</p>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button (click)="stepper.reset()">Reset</button>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  styles: `
  
  .mat-stepper-horizontal {
    margin-top: 8px;
  }

  .mat-mdc-form-field {
    margin-top: 16px;
    display: block;
    width: 100%;
  }

  `,
})
export class StepTestComponent {
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
  });
  // Setting isLinear to false to disable linear mode by default
  isLinear = true;
}
