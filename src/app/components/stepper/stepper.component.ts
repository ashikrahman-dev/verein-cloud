import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule], // Import necessary modules
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
  template: `
    <div class="step">
      <ul class="step-menu-wrap">
        <li
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
      .step-item {
        cursor: pointer;
        padding: 10px;
        margin-right: 5px;
        border: 1px solid #ccc;
      }
      .testStatus {
        background-color: #f8f8f8;
      }
    `,
  ],
})
export class StepperComponent extends CdkStepper {
  @Input() linearModeSelected: boolean = false;

  onClick(index: number) {
    this.selectedIndex = index;
  }
}
