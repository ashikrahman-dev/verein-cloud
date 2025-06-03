import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// Add translation imports
import {
    TranslateModule,
    TranslatePipe,
    TranslateService,
} from '@ngx-translate/core';
import TranslateDE from '../../../../public/i18n/de.json';
import TranslateEN from '../../../../public/i18n/en.json';

@Component({
    selector: 'app-step-four-due-date',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatIconModule,
        // Add translation imports
        TranslateModule,
        TranslatePipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            <h6 class="due-date">
                {{ 'interval_due_date.due_date' | translate }}
            </h6>

            <mat-form-field
                class="w-100 bg-white font-rubik due-date-select-field"
            >
                <!-- <mat-label class="font-rubik d-flex gap-2 align-items-center">
                    <img [src]="numberIcon" alt="Calendar Icon" class="" />
                    {{ selectedValue || 'None' }}
                </mat-label> -->
                <mat-select
                    class="font-rubik"
                    [(ngModel)]="selectedValue"
                    (selectionChange)="onSelectionChange()"
                >
                    <mat-option value="no-due-date">
                        {{ 'interval_due_date.no_due_date' | translate }}
                    </mat-option>
                    <mat-option value="relative-to-start">
                        {{ 'interval_due_date.relative_to_start' | translate }}
                    </mat-option>
                    <mat-option value="relative-to-end">
                        {{ 'interval_due_date.relative_to_end' | translate }}
                    </mat-option>
                    <mat-option value="fixed-date">
                        {{ 'interval_due_date.fixed_date' | translate }}
                    </mat-option>
                </mat-select>
            </mat-form-field>

            <!-- Conditional show hide content -->
            <!-- Condition for  relative to start & end -->
            <div class="d-flex gap-3 pt-3">
                <div
                    class="conditional-content w-100"
                    *ngIf="
                        selectedValue === 'relative-to-start' ||
                        selectedValue === 'relative-to-end'
                    "
                >
                    <!-- Due Date Anzahl -->
                    <div>
                        <p class="form-label">Anzahl</p>
                        <input
                            [(ngModel)]="dueDateAnzahl"
                            placeholder="123"
                            class="form-input-field font-rubik remove-icon-cls"
                            maxlength="3"
                            (keydown)="validateDueDateAnzahl($event)"
                        />
                    </div>
                </div>
                <div
                    class="conditional-content w-100"
                    *ngIf="
                        selectedValue === 'relative-to-start' ||
                        selectedValue === 'relative-to-end'
                    "
                >
                    <p class="form-label">Anzahl</p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <!-- <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            <img
                                [src]="calendarIcon"
                                alt="Calendar Icon"
                                class=""
                            />
                            {{
                                'interval_due_date.choose_an_option' | translate
                            }}
                        </mat-label> -->
                        <mat-select
                            [(ngModel)]="selectedAnzahlInterval"
                            (selectionChange)="onSelectionChange()"
                        >
                            <mat-option value="days">{{
                                'interval_due_date.days' | translate
                            }}</mat-option>
                            <mat-option value="weeks">{{
                                'interval_due_date.weeks' | translate
                            }}</mat-option>
                            <mat-option value="months">{{
                                'interval_due_date.months' | translate
                            }}</mat-option>
                            <mat-option value="quarters">{{
                                'interval_due_date.quarters' | translate
                            }}</mat-option>
                            <mat-option value="halfYears">{{
                                'interval_due_date.half_years' | translate
                            }}</mat-option>
                            <mat-option value="years">{{
                                'interval_due_date.years' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>

                <!-- relative to start -->
                <div
                    class="conditional-content w-100"
                    *ngIf="selectedValue === 'relative-to-start'"
                >
                    <p class="form-label">
                        {{ 'interval_due_date.interval' | translate }}
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <!-- <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            <img
                                [src]="calendarIcon"
                                alt="Calendar Icon"
                                class=""
                            />
                            {{
                                'interval_due_date.interval' | translate
                            }}</mat-label
                        > -->
                        <mat-select
                            [(ngModel)]="selectedInterval"
                            (selectionChange)="onSelectionChange()"
                        >
                            <mat-option
                                value="before-the-start-current-interval"
                                >{{
                                    'interval_due_date.before_the_end'
                                        | translate
                                }}</mat-option
                            >
                            <mat-option
                                value="after-the-start-current-interval"
                                >{{
                                    'interval_due_date.after_the_end'
                                        | translate
                                }}</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>

                <!-- relative to end -->
                <div
                    class="conditional-content w-100"
                    *ngIf="selectedValue === 'relative-to-end'"
                >
                    <p class="form-label">
                        {{ 'interval_due_date.interval' | translate }}
                    </p>
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <!-- <mat-label
                            class="font-rubik d-flex gap-2 align-items-center"
                        >
                            <img
                                [src]="calendarIcon"
                                alt="Calendar Icon"
                                class=""
                            />
                            {{
                                'interval_due_date.choose_an_option' | translate
                            }}</mat-label
                        > -->
                        <mat-select
                            [(ngModel)]="selectedInterval"
                            (selectionChange)="onSelectionChange()"
                        >
                            <mat-option
                                value="Before the end of the current interval"
                                >{{
                                    'interval_due_date.before_the_end'
                                        | translate
                                }}</mat-option
                            >
                            <mat-option
                                value="After the end of the current interval"
                                >{{
                                    'interval_due_date.after_the_end'
                                        | translate
                                }}</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <!-- Condition for  relative to start & end -->
            <div class="d-flex gap-3">
                <div
                    class="conditional-content w-100"
                    *ngIf="selectedValue === 'fixed-date'"
                >
                    <!-- Due Date Tage -->
                    <div>
                        <p class="form-label">Tage</p>
                        <input
                            [(ngModel)]="dueDateTage"
                            placeholder="12"
                            class="form-input-field font-rubik remove-icon-cls"
                            maxlength="2"
                            (keydown)="validateDueDateTage($event)"
                        />
                    </div>
                </div>
            </div>

            <!-- when selected quarterly then show this content -->
            <div
                class="selected-quarterly-content"
                *ngIf="contributionType === 'monthly'"
            >
                <h4 class="fs-14 mt-4">Quarterly Payment Configuration</h4>
                <div class="quarterly-options mt-3">
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label class="font-rubik">Of the month</mat-label>
                        <mat-select [(ngModel)]="quarterStartMonth">
                            <mat-option value="ofTheMonth"
                                >Of the month</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <!-- when selected quarterly then show this content -->

            <!-- when selected quarterly then show this content -->
            <div
                class="selected-quarterly-content"
                *ngIf="contributionType === 'quarterly'"
            >
                <h4 class="fs-14 mt-4">Quarterly Payment Configuration</h4>
                <div class="quarterly-options mt-3">
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label class="font-rubik">Select</mat-label>
                        <mat-select [(ngModel)]="quarterStartMonth">
                            <mat-option value="ofFirstMonth"
                                >Of 1st month</mat-option
                            >
                            <mat-option value="ofSecondMonth"
                                >Of 2nd month</mat-option
                            >
                            <mat-option value="ofThirdMonth"
                                >Of 3rd month</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <!-- when selected quarterly then show this content -->

            <!-- when selected quarterly then show this content -->
            <div
                class="selected-quarterly-content"
                *ngIf="contributionType === 'semi-annually'"
            >
                <h4 class="fs-14 mt-4">Quarterly Payment Configuration</h4>
                <div class="quarterly-options mt-3">
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label class="font-rubik">Select</mat-label>
                        <mat-select [(ngModel)]="quarterStartMonth">
                            <mat-option value="firstMonthToSixthMonth"
                                >"of 1st month" up to "of 6th month"</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <!-- when selected quarterly then show this content -->

            <!-- when selected quarterly then show this content -->
            <div
                class="selected-quarterly-content"
                *ngIf="contributionType === 'annually'"
            >
                <h4 class="fs-14 mt-4">Quarterly Payment Configuration</h4>
                <div class="quarterly-options mt-3">
                    <mat-form-field class="w-100 bg-white font-rubik">
                        <mat-label class="font-rubik">Select</mat-label>
                        <mat-select [(ngModel)]="quarterStartMonth">
                            <mat-option value="firstMonthToTwelveMonth"
                                >"of 1st month" up to "of 12th
                                month"</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <!-- when selected quarterly then show this content -->
        </div>
    `,
    styles: `
    .due-date {
      margin-bottom: 8px;
      font-weight: 500;
    }
    

  `,
})
export class StepFourDueDateComponent {
    @Input() contributionType: string = '';

    numberIcon = 'assets/images/due-date-icon.svg';
    calendarDateIcon = 'assets/images/calendar-edit.svg';
    calendarIcon = 'assets/images/calendar-edit.svg';

    selectedValue: string | null = 'no-due-date'; // Changed from null to 'no-due-date'
    selectedAnzahlInterval: string | null = 'quarters'; // Changed from null to 'quarters'
    selectedInterval: string | null = null;
    dueDateAnzahl: string = '';
    dueDateTage: string = '';

    // Quarterly specific properties
    quarterStartMonth: string = 'january';
    proRateFirstQuarter: boolean = false;

    // Inject TranslateService
    constructor(private translate: TranslateService) {
        // console.log('StepFourDueDateComponent: constructor');

        // Set up translations the same way as ContributionIntervalComponent
        this.translate.setTranslation('en', TranslateEN);
        this.translate.setTranslation('de', TranslateDE);
        this.translate.setDefaultLang('de');

        // Get the current language from localStorage (if available) or use default
        const savedLang = localStorage.getItem('lang') || 'de';
        this.translate.use(savedLang);
    }

    onSelectionChange() {
        // console.log('Selected option:', this.selectedValue);
    }

    validateDueDateAnzahl(event: KeyboardEvent) {
        // Allow: Backspace, Delete, Tab, Escape, Enter, Arrow keys
        if (
            [
                'Backspace',
                'Delete',
                'Tab',
                'Escape',
                'Enter',
                'ArrowLeft',
                'ArrowRight',
                'ArrowUp',
                'ArrowDown',
            ].indexOf(event.key) !== -1
        ) {
            return true;
        }

        // Block input if not a number (0-9)
        if (!/^[0-9]$/.test(event.key)) {
            event.preventDefault();
            return false;
        }

        return true;
    }

    validateDueDateTage(event: KeyboardEvent) {
        // Allow: Backspace, Delete, Tab, Escape, Enter, Arrow keys
        if (
            [
                'Backspace',
                'Delete',
                'Tab',
                'Escape',
                'Enter',
                'ArrowLeft',
                'ArrowRight',
                'ArrowUp',
                'ArrowDown',
            ].indexOf(event.key) !== -1
        ) {
            return true;
        }

        // Block input if not a number (0-9)
        if (!/^[0-9]$/.test(event.key)) {
            event.preventDefault();
            return false;
        }

        return true;
    }
}
