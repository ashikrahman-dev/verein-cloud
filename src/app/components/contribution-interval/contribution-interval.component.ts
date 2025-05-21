import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
// Datepicker imports
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { BasicDataContributionComponent } from '../basic-data-contribution/basic-data-contribution.component';
import { TabService } from '../basic-data-contribution/tab.service';
import { CalculationConfigurationComponent } from '../calculation-configuration/calculation-configuration.component';
import { FinalizationStepComponent } from '../finalization-step/finalization-step.component';
import { IntervalDueDataStepOneComponent } from '../interval-due-data-step-one/interval-due-data-step-one.component';
import { PaymentTermsCalculationComponent } from '../payment-terms-calculation/payment-terms-calculation.component';

@Component({
    selector: 'app-contribution-interval',
    standalone: true,
    providers: [provideNativeDateAdapter()], // Provide TabService at component level
    imports: [
        CommonModule,
        CdkStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatRadioModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatIconModule,
        BasicDataContributionComponent,
        PaymentTermsCalculationComponent,
        FinalizationStepComponent,
        IntervalDueDataStepOneComponent,
        CalculationConfigurationComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="contribution-interval-wrapper">
            <div class="main-dashboard">
                <div class="tab-menu mb-4">
                    <!-- Bootstrap Tab -start -->
                    <ul
                        class="step-tab-wrap ps-0 pb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li class="" role="presentation">
                            <button
                                class="active border-0 bg-transparent w-100 h-100"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                                (click)="
                                    tabService.switchToTab('pills-profile-tab')
                                "
                            >
                                <div class="tab-a" data-id="tab2">
                                    <div class="tab-link">
                                        <div class="tab-title">
                                            <p class="tab-title-pra">
                                                Basic Data
                                            </p>
                                            <div class="check"></div>
                                        </div>
                                        <div class="tab-pra-wrap mb-0">
                                            <p class="tab-pra mb-0">
                                                ID:
                                                {{ contributionIdInput }}
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Designation:
                                                {{ designationInput }}
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Type:
                                                {{ contributionTypeInput }}
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Department:
                                                {{
                                                    'The department will be located here.'
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li class="" role="presentation">
                            <button
                                class="border-0 bg-transparent w-100 h-100"
                                id="pills-contact-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contact"
                                type="button"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                                (click)="
                                    tabService.switchToTab('pills-contact-tab')
                                "
                            >
                                <div class="tab-a" data-id="tab3">
                                    <div class="tab-link">
                                        <div class="tab-title">
                                            <p class="tab-title-pra">
                                                Interval and Due Date
                                            </p>
                                            <div class="check"></div>
                                        </div>
                                        <div class="tab-pra-wrap mb-0">
                                            <p class="tab-pra mb-0">
                                                Interval:
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Billing period:
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Due Date:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li class="" role="presentation">
                            <button
                                class="border-0 bg-transparent w-100 h-100"
                                id="pills-disabled-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-disabled"
                                type="button"
                                role="tab"
                                aria-controls="pills-disabled"
                                aria-selected="false"
                                (click)="
                                    tabService.switchToTab('pills-disabled-tab')
                                "
                            >
                                <div class="tab-a" data-id="tab4">
                                    <div class="tab-link">
                                        <div class="tab-title">
                                            <p class="tab-title-pra">
                                                Payment Terms and Calculation
                                            </p>
                                            <div class="check"></div>
                                        </div>
                                        <div class="tab-pra-wrap mb-0">
                                            <p class="tab-pra mb-0">
                                                Payment term:
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Prorata calculation:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li class="" role="presentation">
                            <button
                                class="border-0 bg-transparent w-100 h-100"
                                id="pills-contribution5-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contribution5"
                                type="button"
                                role="tab"
                                aria-controls="pills-contribution5"
                                aria-selected="false"
                                (click)="
                                    tabService.switchToTab(
                                        'pills-contribution5-tab'
                                    )
                                "
                            >
                                <div class="tab-a h-100" data-id="tab5">
                                    <div class="tab-link">
                                        <div class="tab-title">
                                            <p class="tab-title-pra">
                                                Create new
                                            </p>
                                            <div class="check"></div>
                                        </div>
                                        <div class="tab-pra-wrap mb-0">
                                            <p class="tab-pra mb-0">
                                                Basic Amount:
                                            </p>
                                            <p class="tab-pra mb-0">Tax:</p>
                                            <p class="tab-pra mb-0">
                                                Revenue account:
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Active account:
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Cost Center 1:
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Booking Text:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </li>
                        <li class="" role="presentation">
                            <button
                                class="border-0 bg-transparent w-100 h-100"
                                id="pills-contribution6-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contribution6"
                                type="button"
                                role="tab"
                                aria-controls="pills-contribution6"
                                aria-selected="false"
                                (click)="
                                    tabService.switchToTab(
                                        'pills-contribution6-tab'
                                    )
                                "
                            >
                                <div class="tab-a h-100" data-id="tab6">
                                    <div class="tab-link">
                                        <div class="tab-title">
                                            <p class="tab-title-pra">
                                                Finalization Step
                                            </p>
                                            <div class="check"></div>
                                        </div>
                                        <div class="tab-pra-wrap mb-0">
                                            <p class="tab-pra mb-0">Invoice:</p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                        <!-- 1st Tab Content -->
                        <div
                            class="tab-pane fade show active"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                            tabindex="0"
                        >
                            <div class="basic-data-contribution-step">
                                <app-basic-data-contribution
                                    (formSaved)="onFormSaved($event)"
                                ></app-basic-data-contribution>
                            </div>
                        </div>
                        <!-- 2nd Tab Content -->
                        <div
                            class="tab-pane fade"
                            id="pills-contact"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                            tabindex="0"
                        >
                            <div class="basic-data-contribution-step">
                                <app-interval-due-data-step-one></app-interval-due-data-step-one>
                            </div>
                        </div>
                        <!-- 3rd Tab Content -->
                        <div
                            class="tab-pane fade"
                            id="pills-disabled"
                            role="tabpanel"
                            aria-labelledby="pills-disabled-tab"
                            tabindex="0"
                        >
                            <div class="basic-data-contribution-step">
                                <app-payment-terms-calculation></app-payment-terms-calculation>
                            </div>
                        </div>
                        <!-- 4th Tab Content -->
                        <div
                            class="tab-pane fade"
                            id="pills-contribution5"
                            role="tabpanel"
                            aria-labelledby="pills-contribution5-tab"
                            tabindex="0"
                        >
                            <app-calculation-configuration></app-calculation-configuration>
                        </div>
                        <!-- 5th Tab Content -->
                        <div
                            class="tab-pane fade"
                            id="pills-contribution6"
                            role="tabpanel"
                            aria-labelledby="pills-contribution6-tab"
                            tabindex="0"
                        >
                            <app-finalization-step></app-finalization-step>
                        </div>
                    </div>
                    <!-- Bootstrap Tab -end -->
                </div>
            </div>
        </div>
    `,
    styles: `
    .result {
      background-color: #f9f9f9;
    }
    .tab-title-pra {
        text-align: left;
    }
  `,
})
export class ContributionIntervalComponent implements OnInit, OnDestroy {
    calendarDateIcon = 'assets/images/calendar-edit.svg';

    private readonly _formBuilder = inject(FormBuilder);
    private readonly _cdr = inject(ChangeDetectorRef);

    // Subscriptions collection for cleanup
    private subscriptions: Subscription[] = [];

    // Properties to store input values
    contributionIdInput = '';
    designationInput = '';
    contributionTypeInput = '';

    // Create a FormControl for radio button group
    selectedIntervalControl = this._formBuilder.control('start');

    // Inject TabService and make it public to use in template
    constructor(public tabService: TabService) {
        console.log('ContributionIntervalComponent: constructor');
    }

    ngOnInit() {
        console.log('ContributionIntervalComponent: ngOnInit');

        // Subscribe to tab changes
        this.subscriptions.push(
            this.tabService.activeTab$.subscribe((index) => {
                console.log('Tab changed to index:', index);
                this.activateTab(index);
            })
        );

        // Subscribe to form data changes from the service
        this.subscriptions.push(
            this.tabService.contributionId$.subscribe((id) => {
                console.log('Got new contribution ID:', id);
                this.contributionIdInput = id;
                this._cdr.markForCheck(); // Important for OnPush
            })
        );

        this.subscriptions.push(
            this.tabService.designation$.subscribe((designation) => {
                console.log('Got new designation:', designation);
                this.designationInput = designation;
                this._cdr.markForCheck(); // Important for OnPush
            })
        );

        this.subscriptions.push(
            this.tabService.contributionType$.subscribe((type) => {
                console.log('Got new contribution type:', type);
                this.contributionTypeInput = type;
                this._cdr.markForCheck(); // Important for OnPush
            })
        );

        // Load any existing form data from the service
        const currentData = this.tabService.getCurrentFormData();
        if (currentData.id) this.contributionIdInput = currentData.id;
        if (currentData.designation)
            this.designationInput = currentData.designation;
        if (currentData.type) this.contributionTypeInput = currentData.type;

        // Add event listener for Bootstrap tab events if Bootstrap is loaded
        this.setupBootstrapTabListeners();
    }

    ngOnDestroy() {
        // Clean up subscriptions to prevent memory leaks
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }

    // Setup listeners for Bootstrap tab events to sync with our TabService
    setupBootstrapTabListeners() {
        try {
            const tabEl = document.getElementById('pills-tab');
            if (tabEl) {
                // If using Bootstrap 5
                tabEl.addEventListener('shown.bs.tab', (event: any) => {
                    // Get the tab ID that was just shown
                    const tabId = event.target.getAttribute('id');

                    // Update the service without triggering the subscription callback
                    // The service will handle mapping the ID to the correct index
                    this.tabService.switchToTab(tabId);
                });
            }
        } catch (error) {
            console.log('Bootstrap events not available or error:', error);
        }
    }

    // Method to programmatically activate a tab
    activateTab(index: number) {
        // Get all tab buttons
        const tabButtons = document.querySelectorAll('#pills-tab button');
        const tabPanes = document.querySelectorAll('.tab-pane');

        if (tabButtons[index]) {
            try {
                // Try using Bootstrap Tab API first (for Bootstrap 5)
                // @ts-ignore - Bootstrap may not be typed
                if (typeof bootstrap !== 'undefined' && bootstrap.Tab) {
                    // @ts-ignore
                    const tab = new bootstrap.Tab(tabButtons[index]);
                    tab.show();
                    return; // Exit early if Bootstrap handled it
                }
            } catch (error) {
                console.log(
                    'Bootstrap Tab API not available, using manual approach'
                );
            }

            // Fallback to manual approach
            // Remove active class from all buttons and panes
            tabButtons.forEach((button) => {
                button.classList.remove('active');
                button.setAttribute('aria-selected', 'false');
            });

            tabPanes.forEach((pane) => {
                pane.classList.remove('show', 'active');
            });

            // Add active class to selected button and pane
            tabButtons[index].classList.add('active');
            tabButtons[index].setAttribute('aria-selected', 'true');

            if (tabPanes[index]) {
                tabPanes[index].classList.add('show', 'active');
            }
        }
    }

    // Method to handle the form saved event
    onFormSaved(formData: {
        id: string;
        designation: string;
        type: string;
    }): void {
        console.log('Form saved event received:', formData);

        // Update the local properties
        this.contributionIdInput = formData.id;
        this.designationInput = formData.designation;
        this.contributionTypeInput = formData.type;

        // Update the service
        this.tabService.updateFormData(formData);

        // Explicitly trigger change detection
        this._cdr.markForCheck();

        // Log the updated values to verify
        console.log('Updated values in parent component:', {
            id: this.contributionIdInput,
            designation: this.designationInput,
            type: this.contributionTypeInput,
        });
    }
}
