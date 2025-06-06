import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    inject,
    ViewChild,
} from '@angular/core';
import {
    FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { StepFourDueDateComponent } from '../step-four-due-date/step-four-due-date.component';

// Add only the necessary translation imports
import {
    TranslateModule,
    TranslatePipe,
    TranslateService,
} from '@ngx-translate/core';
import TranslateDE from '../../../../public/i18n/de.json';
import TranslateEN from '../../../../public/i18n/en.json';

import { FormControl } from '@angular/forms';
import {
    MAT_MOMENT_DATE_ADAPTER_OPTIONS,
    provideMomentDateAdapter,
} from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

// Import the locale for Monday as first day of the week
import 'moment/locale/en-gb';
import { TabService } from '../basic-data-contribution/tab.service';

const moment = _rollupMoment || _moment;

// Customize the day names
moment.updateLocale('en-gb', {
    weekdaysMin: ['S', 'M', 'D', 'M', 'D', 'F', 'S'], // Customize short day names
    // You could also customize weekdaysShort or weekdays if needed

    // Customize month names
    months: [
        'Januar', // January
        'Februar', // February
        'März', // March
        'April', // April
        'Mai', // May
        'Juni', // June
        'Juli', // July
        'August', // August
        'September', // September
        'Oktober', // October
        'November', // November
        'Dezember', // December
    ],
    monthsShort: [
        'Jan', // Jan
        'Feb', // Feb
        'Mär', // Mar
        'Apr', // Apr
        'Mai', // May
        'Jun', // Jun
        'Jul', // Jul
        'Aug', // Aug
        'Sep', // Sep
        'Okt', // Oct
        'Nov', // Nov
        'Dez', // Dec
    ],
});

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
    selector: 'app-interval-due-data-step-one',
    standalone: true,
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false },
        },
        provideMomentDateAdapter(),
        {
            provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
            useValue: { useUtc: false, firstDayOfWeek: 1 }, // Monday
        },
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: 'en-gb' },
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
        MatRadioModule,
        MatDatepickerModule,
        MatCheckboxModule,
        StepFourDueDateComponent,

        TranslateModule,
        TranslatePipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <mat-stepper
            [linear]="isLinear"
            class="contribution-basic-data-step-wrap payment-terms-calculation-wrap calculation-configuration-wrapper"
            #stepper
        >
            <!-- Step 1 -->
            <mat-step [stepControl]="stepOneForm" label="Step 1">
                <form [formGroup]="stepOneForm">
                    <div class="step">
                        <div class="tab-contents text-center font-rubik">
                            <h3 class="fs-4">
                                Proceeding to Contribution Interval and Due Date
                                Settings
                            </h3>
                            <p class="fs-14">
                                Define the interval, billing period, and due
                                date for a structured and automated billing
                                cycle.
                            </p>

                            <div class="button-wrap">
                                <button
                                    type="button"
                                    class="step-button fill"
                                    matStepperNext
                                >
                                    {{ 'buttons.proceed' | translate }}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </mat-step>

            <!-- Step 2 -->
            <mat-step [stepControl]="stepTwoForm" label="Step 2">
                <form [formGroup]="stepTwoForm">
                    <div class="step">
                        <div class="tab-contents font-rubik">
                            <h3 class="fs-6 pb-3 mb-1">
                                Proceeding to Contribution Interval and Due Date
                                Settings
                            </h3>
                            <h6 class="fs-14">
                                Contribution Interval & Due Date
                            </h6>
                            <p class="fs-14 text-dark-2 pb-3 mb-1">
                                Define the interval, billing period, and due
                                date for a structured and automated billing
                                cycle.
                            </p>
                            <p class="fs-14">
                                {{
                                    'interval_due_date.contribution_interval'
                                        | translate
                                }}
                            </p>
                            <div>
                                <mat-form-field
                                    class="w-100 bg-white font-rubik selectedContributionTypeCls"
                                >
                                    <!-- <mat-label
                                        class="font-rubik d-flex gap-2 align-items-center"
                                    >
                                        <img
                                            [src]="calendarIcon"
                                            alt="Calendar Icon"
                                            class=""
                                        />
                                        Choose an option</mat-label
                                    > -->
                                    <mat-select
                                        formControlName="selectedContributionType"
                                        class="font-rubik"
                                    >
                                        <mat-option value="One-off">
                                            {{
                                                'interval_due_date.one_off'
                                                    | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="One-time">
                                            {{
                                                'interval_due_date.one_time'
                                                    | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="Monthly">
                                            {{
                                                'interval_due_date.monthly'
                                                    | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="Quarterly">
                                            {{
                                                'interval_due_date.quarterly'
                                                    | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="Semi-Annually">
                                            {{
                                                'interval_due_date.semi_annually'
                                                    | translate
                                            }}
                                        </mat-option>
                                        <mat-option value="Annually">
                                            {{
                                                'interval_due_date.annually'
                                                    | translate
                                            }}
                                        </mat-option>
                                    </mat-select>
                                    <mat-error
                                        *ngIf="
                                            stepTwoForm
                                                .get('selectedContributionType')
                                                ?.hasError('required')
                                        "
                                    >
                                        Please select a contribution type
                                    </mat-error>
                                </mat-form-field>
                            </div>

                            <div
                                class="d-flex justify-content-end align-items-end w-100"
                            >
                                <div class="button-wrap">
                                    <button
                                        type="button"
                                        class="step-button fill"
                                        matStepperNext
                                    >
                                        {{ 'buttons.next' | translate }}
                                    </button>
                                    <button
                                        type="button"
                                        class="step-button"
                                        matStepperPrevious
                                    >
                                        {{ 'buttons.back' | translate }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </mat-step>

            <!-- Step 3 -->
            <mat-step [stepControl]="stepThreeForm" label="Step 3">
                <form [formGroup]="stepThreeForm">
                    <div class="step">
                        <div class="tab-contents font-rubik">
                            <h3 class="fs-6 pb-3 mb-3">
                                Selecting the Contribution Interval
                            </h3>
                            <h6 class="fs-14 pb-3">
                                Select Contribution Interval
                            </h6>
                            <div class="tab-checkbox-wrap d-flex">
                                <mat-radio-group
                                    class="tab-checkbox-wrap d-flex"
                                    formControlName="selectedInterval"
                                    (change)="onIntervalChange()"
                                >
                                    <mat-radio-button
                                        class="w-100 check-box-item font-rubik"
                                        value="start"
                                    >
                                        <h6>Start</h6>
                                        <p>
                                            The period begins when the
                                            contribution is activated and is
                                            then extended by [one month; three
                                            months; six months; one year]
                                        </p>
                                    </mat-radio-button>
                                    <mat-radio-button
                                        class="w-100 check-box-item font-rubik"
                                        value="interval"
                                    >
                                        <h6>
                                            {{
                                                'interval_due_date.interval'
                                                    | translate
                                            }}
                                        </h6>
                                        <p>
                                            The period begins at the start of
                                            the financial year, ends on the last
                                            day of the financial year and is
                                            then extended by [one month; three
                                            months; six months; one year] in
                                            each case
                                        </p>
                                    </mat-radio-button>
                                    <mat-radio-button
                                        class="w-100 check-box-item font-rubik"
                                        value="predefined"
                                    >
                                        <h6>
                                            {{
                                                'interval_due_date.predefined_date'
                                                    | translate
                                            }}
                                        </h6>
                                        <p>
                                            The period starts on a fixed date,
                                            ends after [one month; three months;
                                            six months; one year], and is then
                                            extended by [one month; three
                                            months; six months; one year] in
                                            each case
                                        </p>
                                    </mat-radio-button>
                                    <mat-radio-button
                                        class="w-100 check-box-item font-rubik"
                                        value="special_case_for_one_off:"
                                        *ngIf="
                                            stepTwoForm.get(
                                                'selectedContributionType'
                                            )?.value === 'One-off'
                                        "
                                    >
                                        <h6>Special case for one-off</h6>
                                        <p>
                                            "The billing period begins when the
                                            contribution is activated and does
                                            not renew."
                                        </p>
                                    </mat-radio-button>
                                </mat-radio-group>
                                <div
                                    *ngIf="
                                        stepThreeForm
                                            .get('selectedInterval')
                                            ?.hasError('required') &&
                                        stepThreeForm.get('selectedInterval')
                                            ?.touched
                                    "
                                    class="error-message"
                                >
                                    Please select an interval option
                                </div>
                            </div>

                            <div
                                *ngIf="
                                    stepThreeForm.get('selectedInterval')
                                        ?.value === 'predefined'
                                "
                                class="selected-date-wrap interval-date-dropdown"
                            >
                                <h6 class="fs-14 selected-date">
                                    {{
                                        'interval_due_date.select_date'
                                            | translate
                                    }}
                                </h6>
                                <mat-form-field
                                    class="example-full-width w-100 font-rubik"
                                    appearance="fill"
                                >
                                    <mat-label class="font-rubik f-14"
                                        >DD/MM</mat-label
                                    >
                                    <input
                                        matInput
                                        [matDatepicker]="dp"
                                        [formControl]="date"
                                        formControlName="predefinedDate"
                                        class="datepicker-input"
                                    />
                                    <mat-hint>DD.MM.YYYY</mat-hint>
                                    <mat-datepicker-toggle
                                        matIconPrefix
                                        [for]="dp"
                                        class="calendar-datepicker-icon"
                                    >
                                        <mat-icon
                                            class="calendar-icon-cls"
                                            matDatepickerToggleIcon
                                            ><img
                                                [src]="calendarDateIcon"
                                                alt="Icon"
                                            />
                                        </mat-icon>
                                    </mat-datepicker-toggle>
                                    <mat-datepicker #dp></mat-datepicker>
                                    <mat-error
                                        *ngIf="
                                            stepThreeForm
                                                .get('predefinedDate')
                                                ?.hasError('required') &&
                                            stepThreeForm.get(
                                                'selectedInterval'
                                            )?.value === 'predefined'
                                        "
                                    >
                                        Please select a date
                                    </mat-error>
                                </mat-form-field>
                            </div>

                            <div
                                class="d-flex justify-content-end align-items-end w-100 mt-4"
                            >
                                <div class="button-wrap">
                                    <button
                                        type="button"
                                        class="step-button fill"
                                        matStepperNext
                                    >
                                        {{ 'buttons.next' | translate }}
                                    </button>
                                    <button
                                        type="button"
                                        class="step-button"
                                        matStepperPrevious
                                    >
                                        {{ 'buttons.back' | translate }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </mat-step>

            <!-- Step 4 -->
            <mat-step [stepControl]="stepFourForm" label="Step 4">
                <form [formGroup]="stepFourForm">
                    <div class="step">
                        <div class="tab-contents font-rubik">
                            <h3 class="fs-6 pb-3 mb-1">
                                Setting the Due Date for Payments
                                <span class="basic-setting">
                                    ( Basic setting )</span
                                >
                            </h3>
                            <app-step-four-due-date
                                [contributionType]="
                                    stepTwoForm.get('selectedContributionType')
                                        ?.value || ''
                                "
                            ></app-step-four-due-date>
                            <div
                                class="d-flex justify-content-end align-items-end w-100"
                            >
                                <div class="button-wrap">
                                    <button
                                        type="button"
                                        class="step-button fill"
                                        (click)="saveSecondStepForm()"
                                    >
                                        {{ 'buttons.save' | translate }}
                                    </button>
                                    <button
                                        type="button"
                                        class="step-button"
                                        matStepperPrevious
                                    >
                                        {{ 'buttons.back' | translate }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </mat-step>
        </mat-stepper>
    `,
    styles: `
    .calendar-icon-cls {
      width: 16px;
      height: 16px;
    }
    .calendar-icon-cls img {
      max-width: 100%;
    }
    .error-message {
      color: #f44336;
      font-size: 12px;
      margin-top: 4px;
    }
    .basic-setting {
      font-size: 12px;
      color: #666;
      font-style: italic;
    }
    .step-button {
      padding: 8px 16px;
      border-radius: 4px;
      margin-left: 8px;
      cursor: pointer;
      border: 1px solid #ddd;
      background-color: white;
      transition: all 0.3s ease;
    }
    .step-button.fill {
      background-color: #3f51b5;
      color: white;
      border: 1px solid #3f51b5;
    }
    .step-button:hover {
      opacity: 0.9;
    }
    .button-wrap {
      margin-top: 24px;
    }
  `,
})
export class IntervalDueDataStepOneComponent {
    readonly date = new FormControl(moment());
    // Required asset paths
    intervalCalendarIcon = 'assets/images/interval-calendar-icon.svg';
    textalignIcon = 'assets/images/textalign-justifycenter.svg';
    calendarIcon = 'assets/images/calendar-edit.svg';
    calendarDateIcon = 'assets/images/calendar-edit.svg';
    numberIcon = 'assets/images/due-date-icon.svg';

    // Form related variables
    isLinear = true;
    private _formBuilder = inject(FormBuilder);

    // Form groups for each step
    stepOneForm = this._formBuilder.group({
        // For step 1, we just need a form group to enable the linear stepper
        // No specific validation needed for this step
        acceptedTerms: [true, Validators.requiredTrue],
    });

    stepTwoForm = this._formBuilder.group({
        selectedContributionType: ['Annually', Validators.required], // Default value set to empty string
    });

    stepThreeForm = this._formBuilder.group({
        selectedInterval: ['interval', Validators.required],
        predefinedDate: [''],
    });

    stepFourForm = this._formBuilder.group({
        // This will be populated based on your StepFourDueDateComponent requirements
        // For now, adding a placeholder field to ensure the form validation works
        dueDateOption: ['', Validators.required],
    });

    @ViewChild(MatStepper) stepper!: MatStepper;

    // Helper getter method to safely return the contribution type as string
    get selectedContributionType(): string {
        return this.stepTwoForm.get('selectedContributionType')?.value || '';
    }

    ngOnInit() {
        // Set conditional validation for predefinedDate based on selectedInterval value
        this.stepThreeForm
            .get('selectedInterval')
            ?.valueChanges.subscribe((value) => {
                const predefinedDateControl =
                    this.stepThreeForm.get('predefinedDate');

                if (value === 'predefined') {
                    predefinedDateControl?.setValidators(Validators.required);
                } else {
                    predefinedDateControl?.clearValidators();
                }

                predefinedDateControl?.updateValueAndValidity();
            });
    }

    ngAfterViewInit() {
        // Set up an observer to watch for step changes
        this.stepper.selectionChange.subscribe((event) => {
            // Remove styling from all steps
            const stepHeaders = document.querySelectorAll('.mat-step-header');
            stepHeaders.forEach((header) => {
                header.classList.remove('previous-step');
            });

            // Add styling to previous steps
            for (let i = 0; i < event.selectedIndex; i++) {
                const stepHeader =
                    document.querySelectorAll('.mat-step-header')[i];
                if (stepHeader) {
                    stepHeader.classList.add('previous-step');
                }
            }
        });
    }

    // Method called when radio selection changes
    onIntervalChange() {
        const intervalValue = this.stepThreeForm.get('selectedInterval')?.value;
        console.log('Selected interval:', intervalValue);

        // If predefined is selected but no date is chosen, mark as touched to show validation
        if (intervalValue === 'predefined') {
            this.stepThreeForm.get('predefinedDate')?.markAsTouched();
        }
    }

    onContributionTypeChange() {
        // Clear the interval selection when contribution type changes
        this.stepThreeForm.get('selectedInterval')?.setValue('');
    }

    // onCompleteForm() {
    //     if (this.stepFourForm.valid) {
    //         // Form is complete, do something with the data
    //         console.log('Form completed successfully!');
    //         console.log('Step 2 data:', this.stepTwoForm.value);
    //         console.log('Step 3 data:', this.stepThreeForm.value);
    //         console.log('Step 4 data:', this.stepFourForm.value);

    //         // You can emit an event here or call a service method
    //         // this.formComplete.emit(this.getAllFormData());
    //     } else {
    //         // Mark all fields as touched to trigger validation messages
    //         this.markFormGroupTouched(this.stepFourForm);
    //     }
    // }

    // Helper method to mark all controls in a form group as touched
    private markFormGroupTouched(formGroup: any) {
        Object.values(formGroup.controls).forEach((control: any) => {
            control.markAsTouched();

            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }

    // Optional: Method to reset the stepper
    resetStepper() {
        this.stepper.reset();
        this.stepOneForm.reset();
        this.stepTwoForm.reset({
            selectedContributionType: '', // Reset to empty string
        });
        this.stepThreeForm.reset();
        this.stepFourForm.reset();
    }

    // Inject our TabService
    constructor(
        private tabService: TabService,
        private translate: TranslateService,
        @Inject(DOCUMENT) private document: Document
    ) {
        // Set up translations the same way as ContributionIntervalComponent
        this.translate.setTranslation('en', TranslateEN);
        this.translate.setTranslation('de', TranslateDE);
        this.translate.setDefaultLang('de');

        // Get the current language from localStorage (if available) or use default
        const savedLang = localStorage.getItem('lang') || 'de';
        this.translate.use(savedLang);
    }

    saveSecondStepForm() {
        if (this.stepFourForm.valid) {
            // Form is complete, do something with the data
            console.log('Form completed successfully!');
            console.log('Step 2 data:', this.stepTwoForm.value);
            console.log('Step 3 data:', this.stepThreeForm.value);
            console.log('Step 4 data:', this.stepFourForm.value);

            // You can emit an event here or call a service method
            // this.formComplete.emit(this.getAllFormData());
        } else {
            // Mark all fields as touched to trigger validation messages
            this.markFormGroupTouched(this.stepFourForm);
        }

        // Gather all form data
        const formData = {
            // contributionType: this.secondStepContributionTypeControl.value,
            // intervalDueDate: this.intervalDueDateControl.value,
        };

        console.log('Second step form data saved:', formData);

        // After form is saved, navigate to the third tab
        this.tabService.switchToTab('pills-disabled-tab');
    }
}
