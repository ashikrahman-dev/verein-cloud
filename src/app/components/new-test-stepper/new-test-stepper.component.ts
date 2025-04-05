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
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-new-test-stepper',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: `
    <button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
      {{ !isLinear ? 'Enable linear mode' : 'Disable linear mode' }}
    </button>
    <mat-stepper [linear]="isLinear" #stepper>
      <mat-step [stepControl]="firstFormGroup">
        <form [formGroup]="firstFormGroup">
          <ng-template matStepLabel>Fill out your name</ng-template>
          <mat-form-field>
            <mat-label>Name</mat-label>
            <input
              matInput
              placeholder="Last name, First name"
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
}
  `,
})
export class NewTestStepperComponent {
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
}
