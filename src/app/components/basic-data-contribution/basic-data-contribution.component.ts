import { CommonModule, DOCUMENT } from '@angular/common';
import {
    Component,
    EventEmitter,
    inject,
    Inject,
    Output,
    ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// Add only the necessary translation imports
import {
    TranslateModule,
    TranslatePipe,
    TranslateService,
} from '@ngx-translate/core';
import TranslateDE from '../../../../public/i18n/de.json';
import TranslateEN from '../../../../public/i18n/en.json';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { TabService } from './tab.service';

@Component({
    selector: 'app-basic-data-contribution',
    standalone: true,
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false },
        },
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { hideRequiredMarker: true },
        },
    ],
    imports: [
        FormsModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        // Add translation imports
        TranslateModule,
        TranslatePipe,
    ],
    template: `
        <mat-stepper
            [linear]="isLinear"
            #stepper
            [ngClass]="{
                'contribution-basic-data-step-wrap': true,
                'limited-time-class':
                    selectedContributionType === 'Limited In Time'
            }"
        >
            <mat-step [stepControl]="firstFormGroup" label="Step 1">
                <div class="basic-data-contribution">
                    <h4 class="heading pb-28 d-flex gap-2 align-items-center">
                        {{ 'basic_data.title' | translate }}
                        <img
                            [src]="headingTooltipIcon"
                            alt="Calendar Icon"
                            class=""
                        />
                    </h4>
                    <div class="basic-data-contribution-form">
                        <!-- Contribution ID -->
                        <div>
                            <p class="form-label">
                                {{ 'basic_data.contribution_id' | translate }}
                            </p>
                            <input
                                [(ngModel)]="contribution_id"
                                placeholder="MB0001"
                                [formControl]="contributionIdControl"
                                class="form-input-field font-rubik"
                                (input)="validateContributionId($event)"
                            />
                            <div
                                *ngIf="
                                    contributionIdControl.invalid &&
                                    contributionIdControl.touched &&
                                    contributionIdControl.errors?.['pattern']
                                "
                                class="error-message font-rubik"
                            >
                                Only alphanumeric characters, spaces,
                                underscores, hyphens, and forward slashes are
                                allowed
                            </div>
                            <div
                                *ngIf="
                                    contributionIdControl.invalid &&
                                    contributionIdControl.touched &&
                                    contributionIdControl.errors?.['maxlength']
                                "
                                class="error-message font-rubik"
                            >
                                Maximum length is 10 characters
                            </div>
                        </div>
                        <!-- Designation  -->
                        <div>
                            <p class="form-label">
                                {{ 'basic_data.designation' | translate }}
                            </p>
                            <input
                                [(ngModel)]="designation_id"
                                placeholder="{{
                                    'basic_data.designation' | translate
                                }}"
                                [formControl]="designationIdControl"
                                class="form-input-field font-rubik"
                                (input)="validateDesignationId($event)"
                                maxlength="50"
                            />
                            <div
                                *ngIf="
                                    designationIdControl.invalid &&
                                    designationIdControl.touched &&
                                    designationIdControl.errors?.['pattern']
                                "
                                class="error-message font-rubik"
                            >
                                Contains invalid characters
                            </div>
                            <div
                                *ngIf="
                                    designationIdControl.invalid &&
                                    designationIdControl.touched &&
                                    designationIdControl.errors?.['maxlength']
                                "
                                class="error-message font-rubik"
                            >
                                Maximum length is 50 characters
                            </div>
                        </div>
                        <!-- Type of contribution  -->
                        <div>
                            <p class="form-label">
                                {{
                                    'basic_data.type_of_contribution'
                                        | translate
                                }}
                            </p>
                            <mat-form-field
                                class="w-100 bg-white font-rubik"
                                hideRequiredMarker
                            >
                                <mat-label
                                    class="font-rubik d-flex gap-2 align-items-center"
                                >
                                    {{ 'Normal contribution' }}
                                </mat-label>
                                <mat-select
                                    class="font-rubik"
                                    [(ngModel)]="selectedContributionType"
                                    [formControl]="contributionTypeControl"
                                    (selectionChange)="onSelectionChange()"
                                >
                                    <mat-option value="Normal Contribution">
                                        {{
                                            'basic_data.normal_contribution'
                                                | translate
                                        }}
                                    </mat-option>
                                    <mat-option
                                        value="Age Dependent Contribution"
                                    >
                                        {{
                                            'basic_data.age_dependent_contribution'
                                                | translate
                                        }}
                                    </mat-option>
                                    <mat-option value="Family Contribution">
                                        {{
                                            'basic_data.family_contribution'
                                                | translate
                                        }}
                                    </mat-option>
                                    <mat-option value="Limited In Time">
                                        {{
                                            'basic_data.time_limited_contribution'
                                                | translate
                                        }}
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <!-- Departments  -->
                        <div>
                            <p class="form-label">
                                {{ 'basic_data.departments' | translate }}
                            </p>
                            <mat-form-field
                                class="w-100 bg-white font-rubik"
                                hideRequiredMarker
                            >
                                <mat-label
                                    class="font-rubik d-flex gap-2 align-items-center"
                                >
                                    {{ 'None' }}
                                </mat-label>
                                <mat-select
                                    [formControl]="departmentControl"
                                    [(ngModel)]="selectedDepartmentType"
                                    class="font-rubik"
                                    (selectionChange)="onDepartmentChange()"
                                >
                                    <mat-option value="Department none">
                                        None
                                    </mat-option>
                                    <mat-option value="Others value">
                                        Others value
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>

                        <!-- Anzahl -->
                        <div
                            *ngIf="
                                selectedContributionType === 'Limited In Time'
                            "
                        >
                            <p class="form-label">Anzahl</p>
                            <input
                                [(ngModel)]="anzahl"
                                placeholder="123"
                                [formControl]="anzahlControl"
                                class="form-input-field font-rubik remove-icon-cls"
                                (input)="validateAnzahl($event)"
                            />
                            <div
                                *ngIf="
                                    anzahlControl.invalid &&
                                    anzahlControl.touched
                                "
                                class="error-message font-rubik"
                            >
                                Please enter a number with maximum 3 digits
                            </div>
                        </div>

                        <!-- Duration type  -->
                        <div
                            *ngIf="
                                selectedContributionType === 'Limited In Time'
                            "
                        >
                            <p class="form-label">
                                {{ 'basic_data.duration_time' | translate }}
                            </p>
                            <mat-form-field
                                class="w-100 bg-white font-rubik"
                                hideRequiredMarker
                            >
                                <mat-label
                                    class="font-rubik d-flex gap-2 align-items-center"
                                >
                                    <img
                                        [src]="clockIcon"
                                        alt="Calendar Icon"
                                        class=""
                                    />
                                    {{ 'Days' }}
                                </mat-label>
                                <mat-select
                                    [formControl]="durationTypeControl"
                                    class="font-rubik"
                                >
                                    <mat-option value="duration-month-1">
                                        {{ 'basic_data.days' | translate }}
                                    </mat-option>
                                    <mat-option value="duration-month-2">
                                        {{ 'basic_data.weeks' | translate }}
                                    </mat-option>
                                    <mat-option value="duration-month-3">
                                        {{ 'basic_data.months' | translate }}
                                    </mat-option>
                                    <mat-option value="duration-month-4">
                                        {{ 'basic_data.years' | translate }}
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>

                    <div class="w-100 mt-4">
                        <div
                            class="button-wrap d-flex justify-content-end align-items-end gap-3"
                        >
                            <button
                                type="button"
                                class="step-button fill"
                                matStepperNext
                                *ngIf="
                                    selectedContributionType ===
                                    'Limited In Time'
                                "
                                [disabled]="
                                    contributionIdControl.invalid ||
                                    designationIdControl.invalid ||
                                    (selectedContributionType ===
                                        'Limited In Time' &&
                                        anzahlControl.invalid)
                                "
                            >
                                Next
                            </button>
                            <button
                                type="button"
                                class="step-button fill"
                                *ngIf="
                                    selectedContributionType !==
                                    'Limited In Time'
                                "
                                [disabled]="
                                    contributionIdControl.invalid ||
                                    designationIdControl.invalid
                                "
                                (click)="saveForm()"
                            >
                                {{ 'basic_data.save_button' | translate }}
                            </button>
                            <button
                                type="button"
                                class="step-button"
                                matStepperPrevious
                            >
                                {{ 'basic_data.back_button' | translate }}
                            </button>
                        </div>
                    </div>
                </div>
            </mat-step>

            <mat-step [stepControl]="secondFormGroup" label="Step 2">
                <div class="basic-data-contribution">
                    <h4 class="heading pb-28 d-flex gap-2 align-items-center">
                        Create new posts
                        <img
                            [src]="headingTooltipIcon"
                            alt="Calendar Icon"
                            class=""
                        />
                    </h4>
                    <div class="basic-data-contribution-form">
                        <!-- Interval & Due Date  -->
                        <div class="w-100">
                            <p class="form-label">Interval & Due Date</p>
                            <mat-form-field
                                class="w-100 bg-white font-rubik"
                                hideRequiredMarker
                            >
                                <mat-label
                                    class="font-rubik d-flex gap-2 align-items-center"
                                >
                                    <img
                                        [src]="intervalCalendarIcon"
                                        alt="Calendar Icon"
                                        class=""
                                    />
                                    {{ 'Days ' }}
                                </mat-label>
                                <mat-select
                                    [formControl]="intervalDueDateControl"
                                    class="font-rubik"
                                >
                                    <mat-option value="interval-due-date-1">
                                        1 Day
                                    </mat-option>
                                    <mat-option value="interval-due-date-2">
                                        2 Day's
                                    </mat-option>
                                    <mat-option value="interval-due-date-3">
                                        3 Day's
                                    </mat-option>
                                    <mat-option value="interval-due-date-4">
                                        4 Day's
                                    </mat-option>
                                    <mat-option value="interval-due-date-5">
                                        5 Day's
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>

                    <div class="w-100 mt-4">
                        <div
                            class="button-wrap d-flex justify-content-end align-items-end gap-3"
                        >
                            <button
                                type="button"
                                class="step-button fill"
                                [disabled]="
                                    secondStepContributionTypeControl.invalid ||
                                    intervalDueDateControl.invalid
                                "
                                (click)="saveSecondStepForm()"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                class="step-button"
                                matStepperPrevious
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </mat-step>
        </mat-stepper>
    `,
    styles: `
    .error-message {
      color: #f44336;
      font-size: 12px;
      margin-top: 4px;
    }
    
    /* Hide required indicator asterisk globally */
    ::ng-deep .mat-mdc-form-field-required-marker {
      display: none !important;
    }
  `,
})
export class BasicDataContributionComponent {
    @ViewChild('stepper') stepper!: MatStepper;

    contribution_id: string = '';
    designation_id: string = '';
    post_id: number | null = null;
    anzahl: string = '';

    numberIcon = 'assets/images/contribution-id-icon.svg';
    calendarDateIcon = 'assets/images/due-date-icon.svg';
    clockIcon = 'assets/images/clock-icon.svg';
    profileUser = 'assets/images/profile-2user.svg';
    intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';

    // Separate properties for contribution type and department type
    selectedContributionType: string = 'Normal Contribution';
    selectedDepartmentType: string = 'department-none';

    headingTooltipIcon = 'assets/images/heading-tooltip-icon.svg';

    // Set linear mode (enforces form validation before proceeding to next step)
    isLinear = true;

    // First step form controls
    contributionIdControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9 _\-\/]+$/),
        Validators.maxLength(10),
    ]);

    designationIdControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9 _\-,.!?;":+()\\/'ß]+$/),
        Validators.maxLength(50), // Added maxLength validator for 50 characters
    ]);

    contributionTypeControl = new FormControl('Normal Contribution', [
        Validators.required,
    ]);

    departmentControl = new FormControl('department-none');

    anzahlControl = new FormControl('', [Validators.pattern(/^[0-9]{1,3}$/)]);

    durationTypeControl = new FormControl('duration-month-1');

    // Second step form controls
    secondStepContributionTypeControl = new FormControl('Family Contribution', [
        Validators.required,
    ]);

    intervalDueDateControl = new FormControl('interval-due-date-1', [
        Validators.required,
    ]);

    private _formBuilder = inject(FormBuilder);

    // Inject our TabService and TranslateService
    constructor(
        private tabService: TabService,
        private translate: TranslateService,
        @Inject(DOCUMENT) private document: Document
    ) {
        console.log('BasicDataContributionComponent: constructor');

        // Set up translations the same way as ContributionIntervalComponent
        this.translate.setTranslation('en', TranslateEN);
        this.translate.setTranslation('de', TranslateDE);
        this.translate.setDefaultLang('de');

        // Get the current language from localStorage (if available) or use default
        const savedLang = localStorage.getItem('lang') || 'de';
        this.translate.use(savedLang);
    }

    // Create form groups for the stepper
    firstFormGroup = this._formBuilder.group({
        contributionId: this.contributionIdControl,
        designationId: this.designationIdControl,
        contributionType: this.contributionTypeControl,
        department: this.departmentControl,
        anzahl: this.anzahlControl,
        durationType: this.durationTypeControl,
    });

    secondFormGroup = this._formBuilder.group({
        contributionType: this.secondStepContributionTypeControl,
        intervalDueDate: this.intervalDueDateControl,
    });

    // Changed the event emitters to include methods that will be called only when Save is clicked
    @Output() inputChanged = new EventEmitter<string>();
    @Output() inputDesignationChanged = new EventEmitter<string>();
    @Output() contributionTypeChanged = new EventEmitter<string>();
    @Output() departmentsTypeChanged = new EventEmitter<string>();
    @Output() formSaved = new EventEmitter<{
        id: string;
        designation: string;
        type: string;
        departmentsType: string;
    }>();

    // Method to validate Contribution ID input in real-time
    validateContributionId(event: Event) {
        const input = event.target as HTMLInputElement;
        const value = input.value;

        // Only allow digits, letters, spaces, underscores, hyphens, and forward slashes
        const regex = /^[a-zA-Z0-9 _\-\/]*$/;

        if (!regex.test(value)) {
            // If invalid characters are entered, remove them
            const sanitizedValue = value.replace(/[^a-zA-Z0-9 _\-\/]/g, '');
            input.value = sanitizedValue;

            // Update the form control value
            this.contributionIdControl.setValue(sanitizedValue);
            this.contribution_id = sanitizedValue;
        }

        // Enforce maximum length of 10 characters
        if (value.length > 10) {
            const truncatedValue = value.substring(0, 10);
            input.value = truncatedValue;

            // Update the form control value
            this.contributionIdControl.setValue(truncatedValue);
            this.contribution_id = truncatedValue;
        }
    }

    // Method to validate Designation ID input in real-time
    validateDesignationId(event: Event) {
        const input = event.target as HTMLInputElement;
        const value = input.value;

        // Allow: digits, letters, spaces, underscores, hyphens, commas, periods,
        // exclamation marks, question marks, semicolons, quotation marks, colons,
        // plus signs, parentheses, backslashes, forward slashes, apostrophes, and ß
        const regex = /^[a-zA-Z0-9 _\-,.!?;":+()\\/'ß]*$/;

        if (!regex.test(value)) {
            // If invalid characters are entered, remove them
            const sanitizedValue = value.replace(
                /[^a-zA-Z0-9 _\-,.!?;":+()\\/'ß]/g,
                ''
            );
            input.value = sanitizedValue;

            // Update the form control value
            this.designationIdControl.setValue(sanitizedValue);
            this.designation_id = sanitizedValue;
        }

        // Enforce maximum length of 50 characters
        if (value.length > 50) {
            const truncatedValue = value.substring(0, 50);
            input.value = truncatedValue;

            // Update the form control value
            this.designationIdControl.setValue(truncatedValue);
            this.designation_id = truncatedValue;

            // Mark as touched to trigger validation messages
            this.designationIdControl.markAsTouched();
        }
    }

    // Method to validate Anzahl input in real-time
    validateAnzahl(event: Event) {
        const input = event.target as HTMLInputElement;
        const value = input.value;

        // Only allow digits (0-9)
        const regex = /^[0-9]*$/;

        if (!regex.test(value)) {
            // If invalid characters are entered, remove them
            const sanitizedValue = value.replace(/[^0-9]/g, '');
            input.value = sanitizedValue;

            // Update the form control value
            this.anzahlControl.setValue(sanitizedValue);
            this.anzahl = sanitizedValue;
        }

        // Limit to 3 digits
        if (value.length > 3) {
            const truncatedValue = value.substring(0, 3);
            input.value = truncatedValue;

            // Update the form control value
            this.anzahlControl.setValue(truncatedValue);
            this.anzahl = truncatedValue;
        }
    }

    onSelectionChange() {
        console.log(
            'Selected contribution type:',
            this.selectedContributionType
        );

        if (this.selectedContributionType === 'Limited In Time') {
            // Make anzahl required for Limited In Time type
            this.anzahlControl.setValidators([
                Validators.required,
                Validators.pattern(/^[0-9]{1,3}$/),
            ]);
        } else {
            // Remove validators if not Limited In Time
            this.anzahlControl.clearValidators();
            this.anzahlControl.setValidators([
                Validators.pattern(/^[0-9]{1,3}$/),
            ]);
            this.anzahl = '';
            this.anzahlControl.setValue('');
        }

        // Update validation status
        this.anzahlControl.updateValueAndValidity();
    }

    onDepartmentChange() {
        console.log('Selected department type:', this.selectedDepartmentType);
    }

    saveForm() {
        // Gather all form data
        const formData = {
            contributionId: this.contributionIdControl.value,
            designationId: this.designationIdControl.value,
            contributionType: this.contributionTypeControl.value,
            department: this.departmentControl.value,
            anzahl: this.anzahlControl.value,
            durationType: this.durationTypeControl.value,
        };

        console.log('Form data saved:', formData);

        // First, update the TabService with the form data
        this.tabService.updateFormData({
            id: this.contribution_id,
            designation: this.designation_id,
            type: this.selectedContributionType,
            departmentsType: this.selectedDepartmentType,
        });

        // Then, emit the form data with all three values in one event
        this.formSaved.emit({
            id: this.contribution_id,
            designation: this.designation_id,
            type: this.selectedContributionType,
            departmentsType: this.selectedDepartmentType,
        });

        // After form is saved, navigate to the second tab
        this.tabService.switchToTab('pills-contact-tab');
    }

    saveSecondStepForm() {
        // Gather all form data
        const formData = {
            contributionType: this.secondStepContributionTypeControl.value,
            intervalDueDate: this.intervalDueDateControl.value,
        };

        console.log('Second step form data saved:', formData);

        // First, update the TabService with the form data
        this.tabService.updateFormData({
            id: this.contribution_id,
            designation: this.designation_id,
            type: this.selectedContributionType,
            departmentsType: this.selectedDepartmentType,
        });

        // Also emit the values when saving from step 2
        this.formSaved.emit({
            id: this.contribution_id,
            designation: this.designation_id,
            type: this.selectedContributionType,
            departmentsType: this.selectedDepartmentType,
        });

        // After form is saved, navigate to the third tab
        this.tabService.switchToTab('pills-disabled-tab');
    }
}
