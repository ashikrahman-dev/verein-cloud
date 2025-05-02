import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    OnInit,
    ViewChild,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

@Component({
    selector: 'app-calculation-configuration-variable-value',
    standalone: true,
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false },
        },
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatStepperModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="fixed-value-content-show">
            <h4 class="heading">
                Selecting the Applying Conditional Logic
                <img [src]="headingTooltipIcon" alt="Calendar Icon" class="" />
            </h4>
            <h5 class="form-label pt-2 mt-3 fw-medium">
                Select Calculation Method
            </h5>

            <div class="calculation-configuration-step">
                <!-- 1 Item -->
                <div class="w-100">
                    <p class="form-label fw-normal">
                        Function <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            {{ getConditionFunctionDisplayValue() }}
                        </mat-label>
                        <mat-select
                            formControlName="conditionFunction"
                            class="font-rubik"
                            (selectionChange)="onConditionFunctionChange()"
                            [value]="'if_condition_wenn'"
                        >
                            <mat-option value="if_condition_wenn">
                                "IF" Condition (WENN)
                            </mat-option>
                            <mat-option value="and_condition_wenn_und">
                                "AND" Condition (WENN UND)
                            </mat-option>
                            <mat-option value="or_condition_wenn_oder">
                                "OR" Condition (WENN ODER)
                            </mat-option>
                        </mat-select>
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('conditionFunction')
                                    ?.hasError('required')
                            "
                        >
                            Function is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!--  2 Item -->
                <div class="w-100">
                    <p class="form-label fw-normal">
                        If <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            {{ getIfOptionDisplayValue() }}
                        </mat-label>
                        <mat-select
                            class="font-rubik"
                            formControlName="ifOption"
                        >
                            <mat-option value="if_department">
                                Department
                            </mat-option>
                            <mat-option value="if_option_200"> 200 </mat-option>
                            <mat-option value="if_option_300"> 300 </mat-option>
                            <mat-option value="if_option_400"> 400 </mat-option>
                        </mat-select>
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('ifOption')
                                    ?.hasError('required')
                            "
                        >
                            If value is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!-- 3 Item -->
                <div class="w-100">
                    <p class="form-label fw-normal">
                        Operator <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            {{ getOperatorDisplayValue() }}
                        </mat-label>
                        <mat-select
                            class="font-rubik"
                            formControlName="operator"
                        >
                            <mat-option value="operator_option_1">
                                >=
                            </mat-option>
                            <mat-option value="operator_option_2">
                                >
                            </mat-option>
                            <mat-option value="operator_option_3">
                                <
                            </mat-option>
                            <mat-option value="operator_option_4">
                                <=
                            </mat-option>
                            <mat-option value="operator_option_5">
                                =
                            </mat-option>
                            <mat-option value="operator_option_6">
                                <>
                            </mat-option>
                        </mat-select>
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('operator')
                                    ?.hasError('required')
                            "
                        >
                            Operator is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!-- 4 Item -->
                <div *ngIf="isAdvancedCondition()">
                    <p class="form-label fw-normal">
                        Value <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <input
                            matInput
                            type="number"
                            formControlName="conditionValue"
                            placeholder="0"
                        />
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('conditionValue')
                                    ?.hasError('required')
                            "
                        >
                            Value is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!-- 5 Item -->
                <div *ngIf="isAndCondition()" class="w-100">
                    <p class="form-label fw-normal">
                        And <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            {{ getClubStatusDisplayValue() }}
                        </mat-label>
                        <mat-select
                            class="font-rubik"
                            formControlName="clubStatus"
                        >
                            <mat-option value="club_status_1">
                                Club Status
                            </mat-option>
                            <mat-option value="club_status_2">
                                Club Status 1</mat-option
                            >
                            <mat-option value="club_status_3">
                                Club Status 2
                            </mat-option>
                        </mat-select>
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('clubStatus')
                                    ?.hasError('required') && isAndCondition()
                            "
                        >
                            Club status is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!-- 5 OR Item -->
                <div *ngIf="isOrCondition()" class="w-100">
                    <p class="form-label fw-normal">
                        Or <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            {{ getOrClubStatusDisplayValue() }}
                        </mat-label>
                        <mat-select
                            class="font-rubik"
                            formControlName="orClubStatus"
                        >
                            <mat-option value="or_club_status_1">
                                Club Status
                            </mat-option>
                            <mat-option value="or_club_status_2">
                                Club Status 1</mat-option
                            >
                            <mat-option value="or_club_status_3">
                                Club Status 2
                            </mat-option>
                        </mat-select>
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('orClubStatus')
                                    ?.hasError('required') && isOrCondition()
                            "
                        >
                            Club status is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!-- 6 Item -->
                <div *ngIf="isAdvancedCondition()" class="w-100">
                    <p class="form-label fw-normal">
                        Operator <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            {{ getSecondOperatorDisplayValue() }}
                        </mat-label>
                        <mat-select
                            class="font-rubik"
                            formControlName="secondOperator"
                        >
                            <mat-option value="operator_active">
                                Active
                            </mat-option>
                            <mat-option value="operator_passive">
                                Passive</mat-option
                            >
                            <mat-option value="operator_none_zero">
                                None zero
                            </mat-option>
                            <mat-option value="operator_zero">
                                Zero
                            </mat-option>
                        </mat-select>
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('secondOperator')
                                    ?.hasError('required') &&
                                isAdvancedCondition()
                            "
                        >
                            Operator is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!-- 7 Item -->
                <div>
                    <p class="form-label fw-normal">
                        Value <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <input
                            matInput
                            type="number"
                            formControlName="valueId"
                            placeholder="0"
                        />
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('valueId')
                                    ?.hasError('required')
                            "
                        >
                            Value is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!-- 8 Item -->
                <div class="w-100">
                    <p class="form-label fw-normal">
                        Formula <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <input
                            matInput
                            type="text"
                            formControlName="formula"
                            placeholder="[FF space size] 1.5"
                        />
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('formula')
                                    ?.hasError('required')
                            "
                        >
                            Formula is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!-- 9 Item -->
                <div class="w-100">
                    <p class="form-label fw-normal">
                        Other Formula
                        <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <input
                            matInput
                            type="text"
                            formControlName="otherFormula"
                            placeholder="[FF space size] 1.2"
                        />
                        <mat-error
                            *ngIf="
                                stepThreeForm
                                    .get('otherFormula')
                                    ?.hasError('required')
                            "
                        >
                            Other formula is required
                        </mat-error>
                    </mat-form-field>
                </div>

                <!-- 10 Item -->
                <div class="w-100">
                    <p class="form-label fw-normal">
                        Tax <span class="text-red">*</span>
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            {{ getTaxDisplayValue() }}
                        </mat-label>
                        <mat-select class="font-rubik" formControlName="tax">
                            <mat-option value="tax_number_no"> No </mat-option>
                            <mat-option value="tax_number_yes"> Yes</mat-option>
                        </mat-select>
                        <mat-error
                            *ngIf="
                                stepThreeForm.get('tax')?.hasError('required')
                            "
                        >
                            Tax selection is required
                        </mat-error>
                    </mat-form-field>
                </div>
            </div>

            <!-- Show conditional show content -start -->
            <!-- Added *ngIf to only show this content when AND condition is selected -->
            <div
                *ngIf="isAndCondition()"
                class="variable-value-cond-show-content"
            >
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatibus
            </div>
            <!-- Show conditional show content -end -->
        </div>
    `,
    styles: `
        .calculation-configuration-step {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }
        
        .text-red {
            color: red;
        }
    `,
})
export class CalculationConfigurationVariableValueComponent implements OnInit {
    private _formBuilder = inject(FormBuilder);
    private _cdr = inject(ChangeDetectorRef);

    // Required asset paths
    headingTooltipIcon = 'assets/images/heading-tooltip-icon.svg';

    // Main form group
    stepThreeForm: FormGroup = this._formBuilder.group({
        // For fixed-value calculation
        basicAmount: [69, [Validators.required, Validators.min(0)]],
        taxPercentage: [
            19,
            [Validators.required, Validators.min(0), Validators.max(100)],
        ],

        // For conditional logic - Initialize with default values
        conditionFunction: ['if_condition_wenn', [Validators.required]],
        ifOption: ['if_department', [Validators.required]],
        operator: ['operator_option_1', [Validators.required]],
        conditionValue: [0],
        clubStatus: [null],
        orClubStatus: [null],
        secondOperator: [null],
        valueId: [0, [Validators.required]],
        formula: ['[FF space size] 1.5', [Validators.required]],
        otherFormula: ['[FF space size] 1.2', [Validators.required]],
        tax: ['tax_number_no', [Validators.required]],
    });

    // For stepper reference
    @ViewChild(MatStepper) stepper!: MatStepper;

    ngOnInit() {
        // Initialize form validators based on the default selected condition function
        this.updateConditionValidators(
            this.stepThreeForm.get('conditionFunction')?.value
        );

        // Set up conditional validators based on selected condition function
        this.stepThreeForm
            .get('conditionFunction')
            ?.valueChanges.subscribe((value) => {
                this.updateConditionValidators(value);
                this._cdr.markForCheck(); // Trigger change detection
            });
    }

    // Method to handle condition function change from the UI
    onConditionFunctionChange() {
        // Force change detection to update the DOM
        this._cdr.detectChanges();
    }

    // Helper method to update condition validators
    private updateConditionValidators(conditionFunction: string) {
        const conditionValueControl = this.stepThreeForm.get('conditionValue');
        const clubStatusControl = this.stepThreeForm.get('clubStatus');
        const orClubStatusControl = this.stepThreeForm.get('orClubStatus');
        const secondOperatorControl = this.stepThreeForm.get('secondOperator');

        if (
            conditionFunction === 'and_condition_wenn_und' ||
            conditionFunction === 'or_condition_wenn_oder'
        ) {
            conditionValueControl?.setValidators([Validators.required]);
            secondOperatorControl?.setValidators([Validators.required]);

            if (conditionFunction === 'and_condition_wenn_und') {
                clubStatusControl?.setValidators([Validators.required]);
                clubStatusControl?.setValue(
                    clubStatusControl?.value || 'club_status_1'
                );

                orClubStatusControl?.clearValidators();
                orClubStatusControl?.setValue(null);
            } else if (conditionFunction === 'or_condition_wenn_oder') {
                orClubStatusControl?.setValidators([Validators.required]);
                orClubStatusControl?.setValue(
                    orClubStatusControl?.value || 'or_club_status_1'
                );

                clubStatusControl?.clearValidators();
                clubStatusControl?.setValue(null);
            }

            // Set default values for advanced condition fields if they're empty
            conditionValueControl?.setValue(conditionValueControl?.value || 0);
            secondOperatorControl?.setValue(
                secondOperatorControl?.value || 'operator_active'
            );
        } else {
            // Basic condition, clear advanced validators
            conditionValueControl?.clearValidators();
            clubStatusControl?.clearValidators();
            orClubStatusControl?.clearValidators();
            secondOperatorControl?.clearValidators();
        }

        // Update validity and trigger change detection
        conditionValueControl?.updateValueAndValidity({ emitEvent: false });
        clubStatusControl?.updateValueAndValidity({ emitEvent: false });
        orClubStatusControl?.updateValueAndValidity({ emitEvent: false });
        secondOperatorControl?.updateValueAndValidity({ emitEvent: false });

        // Force change detection
        this._cdr.markForCheck();
    }

    // Display value methods
    getConditionFunctionDisplayValue(): string {
        const value = this.stepThreeForm?.get('conditionFunction')?.value;
        switch (value) {
            case 'if_condition_wenn':
                return '"IF" Condition (WENN)';
            case 'and_condition_wenn_und':
                return '"AND" Condition (WENN UND)';
            case 'or_condition_wenn_oder':
                return '"OR" Condition (WENN ODER)';
            default:
                return 'Select Function';
        }
    }

    getIfOptionDisplayValue(): string {
        const value = this.stepThreeForm?.get('ifOption')?.value;
        switch (value) {
            case 'if_department':
                return 'Department';
            case 'if_option_200':
                return '200';
            case 'if_option_300':
                return '300';
            case 'if_option_400':
                return '400';
            default:
                return 'Select Number';
        }
    }

    getOperatorDisplayValue(): string {
        const value = this.stepThreeForm?.get('operator')?.value;
        switch (value) {
            case 'operator_option_1':
                return '>=';
            case 'operator_option_2':
                return '>';
            case 'operator_option_3':
                return '<';
            case 'operator_option_4':
                return '<=';
            case 'operator_option_5':
                return '=';
            case 'operator_option_6':
                return '<>';
            default:
                return 'Select Operator';
        }
    }

    getClubStatusDisplayValue(): string {
        const value = this.stepThreeForm?.get('clubStatus')?.value;
        switch (value) {
            case 'club_status_1':
                return 'Club Status';
            case 'club_status_2':
                return 'Club Status 1';
            case 'club_status_3':
                return 'Club Status 2';
            default:
                return 'Club Status';
        }
    }

    getOrClubStatusDisplayValue(): string {
        const value = this.stepThreeForm?.get('orClubStatus')?.value;
        switch (value) {
            case 'or_club_status_1':
                return 'Club Status';
            case 'or_club_status_2':
                return 'Club Status 1';
            case 'or_club_status_3':
                return 'Club Status 2';
            default:
                return 'Club Status';
        }
    }

    getSecondOperatorDisplayValue(): string {
        const value = this.stepThreeForm?.get('secondOperator')?.value;
        switch (value) {
            case 'operator_active':
                return 'Active';
            case 'operator_passive':
                return 'Passive';
            case 'operator_none_zero':
                return 'None zero';
            case 'operator_zero':
                return 'Zero';
            default:
                return 'Active';
        }
    }

    getTaxDisplayValue(): string {
        const value = this.stepThreeForm?.get('tax')?.value;
        switch (value) {
            case 'tax_number_no':
                return 'No';
            case 'tax_number_yes':
                return 'Yes';
            default:
                return 'Select Tax';
        }
    }

    // Helper methods for conditional logic
    isAndCondition(): boolean {
        return (
            this.stepThreeForm?.get('conditionFunction')?.value ===
            'and_condition_wenn_und'
        );
    }

    isOrCondition(): boolean {
        return (
            this.stepThreeForm?.get('conditionFunction')?.value ===
            'or_condition_wenn_oder'
        );
    }

    isAdvancedCondition(): boolean {
        const value = this.stepThreeForm?.get('conditionFunction')?.value;
        return (
            value === 'and_condition_wenn_und' ||
            value === 'or_condition_wenn_oder'
        );
    }
}
