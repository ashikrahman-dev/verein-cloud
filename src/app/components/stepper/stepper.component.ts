import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule], // Import necessary modules
  template: `
    <div class="step">
      <ul class="step-menu-wrap">
        <li
          [class.active]="selectedIndex === i"
          class="testStatus step-item"
          *ngFor="let step of steps; let i = index"
          (click)="onClick(i)"
        >
          {{ step.label || 'Step ' + (i + 1) }}
        </li>
      </ul>

      <div *ngIf="selected">
        <ng-container [ngTemplateOutlet]="selected.content"></ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      .step {
        padding: 10px;
      }
      .step-menu-wrap {
        list-style: none;
        padding: 0;
        display: flex;
      }
      .step-menu-wrap li {
        border: none;
      }
      .step-item {
        cursor: pointer;
        padding: 10px;
        margin-right: 5px;
        border: 0px solid transparent;
        font-size: 14px;
        font-weight: 700;
      }
      .testStatus {
        background-color: #f8f8f8;
      }

      .step .step-menu-wrap .step-item.active {
        background-color: #ffce42;
      }
      .step .step-menu-wrap .step-item.active::after {
        background-color: #ffce42;
      }
      .step .step-menu-wrap .step-item.active::before {
        background-color: #ffce42;
      }
    `,
  ],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
})
export class StepperComponent extends CdkStepper {
  @Input({}) linearModeSelected = true;

  onClick(index: number) {
    this.selectedIndex = index;
  }
}
