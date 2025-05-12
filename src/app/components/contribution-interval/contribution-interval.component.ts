import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
import { BasicDataContributionComponent } from '../basic-data-contribution/basic-data-contribution.component';
// import { CalculationConfigurationComponent } from '../calculation-configuration/calculation-configuration.component';
import { CalculationConfigurationComponent } from '../calculation-configuration/calculation-configuration.component';
import { FinalizationStepComponent } from '../finalization-step/finalization-step.component';
import { IntervalDueDataStepOneComponent } from '../interval-due-data-step-one/interval-due-data-step-one.component';
import { PaymentTermsCalculationComponent } from '../payment-terms-calculation/payment-terms-calculation.component';

@Component({
    selector: 'app-contribution-interval',
    standalone: true,
    providers: [provideNativeDateAdapter()],
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
        // CalculationConfigurationComponent,
        FinalizationStepComponent,
        IntervalDueDataStepOneComponent,
        CalculationConfigurationComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="contribution-interval-wrapper">
            <div class="main-dashboard">
                <div class="">
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
                                >
                                    <div class="tab-a" data-id="tab2">
                                        <div class="tab-link">
                                            <div class="tab-title">
                                                <p class="tab-title-pra">
                                                    Create new
                                                </p>
                                                <div class="check"></div>
                                            </div>
                                            <p class="tab-pra mb-0">
                                                Contribution 1
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Basic data
                                            </p>
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
                                >
                                    <div class="tab-a" data-id="tab3">
                                        <div class="tab-link">
                                            <div class="tab-title">
                                                <p class="tab-title-pra">
                                                    Create new
                                                </p>
                                                <div class="check"></div>
                                            </div>
                                            <p class="tab-pra mb-0">
                                                Contribution 2
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Interval and Due Date
                                            </p>
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
                                >
                                    <div class="tab-a" data-id="tab4">
                                        <div class="tab-link">
                                            <div class="tab-title">
                                                <p class="tab-title-pra">
                                                    Create new
                                                </p>
                                                <div class="check"></div>
                                            </div>
                                            <p class="tab-pra mb-0">
                                                Contribution 3
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Payment Terms and Calculation
                                            </p>
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
                                >
                                    <div class="tab-a h-100" data-id="tab5">
                                        <div class="tab-link">
                                            <div class="tab-title">
                                                <p class="tab-title-pra">
                                                    Create new
                                                </p>
                                                <div class="check"></div>
                                            </div>
                                            <p class="tab-pra mb-0">
                                                Contribution 4
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Calculation Configuration
                                            </p>
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
                                >
                                    <div class="tab-a h-100" data-id="tab6">
                                        <div class="tab-link">
                                            <div class="tab-title">
                                                <p class="tab-title-pra">
                                                    Create new
                                                </p>
                                                <div class="check"></div>
                                            </div>
                                            <p class="tab-pra mb-0">
                                                Contribution 5
                                            </p>
                                            <p class="tab-pra mb-0">
                                                Finalization step
                                            </p>
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
                                    <app-basic-data-contribution></app-basic-data-contribution>
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
                                <!-- <app-calculation-configuration></app-calculation-configuration> -->
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
        </div>
    `,
    styles: `
    .result {
      background-color: #f9f9f9;
    }
  `,
})
export class ContributionIntervalComponent {
    calendarDateIcon = 'assets/images/calendar-edit.svg';

    private readonly _formBuilder = inject(FormBuilder);

    // Initialize form controls
    readonly toppings = this._formBuilder.group({
        pepperoni: false,
        extracheese: false,
        mushroom: false,
    });

    // Create a FormControl for radio button group
    selectedIntervalControl = this._formBuilder.control('start');

    // Method called when radio selection changes
    onIntervalChange() {
        // No additional code needed here as we're using the direct value in the template
        // You could add additional logic here if needed
    }
}
