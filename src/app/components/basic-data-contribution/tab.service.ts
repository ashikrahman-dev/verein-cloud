import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TabService {
    // Current active tab index
    private activeTabIndex = new BehaviorSubject<number>(0);

    // Observable to subscribe to active tab changes
    activeTab$ = this.activeTabIndex.asObservable();

    // Map of tab IDs to their indexes for easier reference
    private tabIdMap: { [key: string]: number } = {
        'pills-profile-tab': 0,
        'pills-contact-tab': 1,
        'pills-disabled-tab': 2,
        'pills-contribution5-tab': 3,
        'pills-contribution6-tab': 4,
    };

    // Adding form data behavior subjects
    private contributionIdSource = new BehaviorSubject<string>('');
    contributionId$ = this.contributionIdSource.asObservable();

    private designationSource = new BehaviorSubject<string>('');
    designation$ = this.designationSource.asObservable();

    private contributionTypeSource = new BehaviorSubject<string>('');
    contributionType$ = this.contributionTypeSource.asObservable();

    private departmentsTypeSource = new BehaviorSubject<string>('');
    departmentsType$ = this.departmentsTypeSource.asObservable();

    constructor() {}

    // Set the active tab by index
    setActiveTab(index: number): void {
        // Only emit if the value is changing
        if (this.activeTabIndex.getValue() !== index) {
            console.log(`Changing tab to index: ${index}`);
            this.activeTabIndex.next(index);
        }
    }

    // Switch to tab by ID (the method your component is trying to use)
    switchToTab(tabId: string): void {
        if (this.tabIdMap[tabId] !== undefined) {
            this.setActiveTab(this.tabIdMap[tabId]);

            // Also try direct DOM manipulation as a fallback
            try {
                const tabElement = document.getElementById(tabId);
                if (tabElement) {
                    // Create and dispatch click event
                    const clickEvent = new MouseEvent('click', {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                    });
                    tabElement.dispatchEvent(clickEvent);

                    // For Bootstrap, we may need to use the Tab API
                    try {
                        // @ts-ignore - Bootstrap may not be typed
                        const bsTab = new bootstrap.Tab(tabElement);
                        bsTab.show();
                    } catch (error) {
                        console.log(
                            'Bootstrap Tab API not available, using fallback.'
                        );
                    }
                }
            } catch (error) {
                console.log('Error switching tabs:', error);
            }
        } else {
            console.warn(`Tab ID not found: ${tabId}`);
        }
    }

    // Get the current active tab
    getActiveTab(): number {
        return this.activeTabIndex.getValue();
    }

    // Navigate to next tab
    nextTab(): void {
        const currentIndex = this.getActiveTab();
        this.setActiveTab(currentIndex + 1);
    }

    // Navigate to previous tab
    previousTab(): void {
        const currentIndex = this.getActiveTab();
        if (currentIndex > 0) {
            this.setActiveTab(currentIndex - 1);
        }
    }

    // Methods to update form data (new methods)
    updateContributionId(id: string) {
        console.log('TabService: Updating contribution ID to', id);
        this.contributionIdSource.next(id);
    }

    updateDesignation(designation: string) {
        console.log('TabService: Updating designation to', designation);
        this.designationSource.next(designation);
    }

    updateContributionType(type: string) {
        console.log('TabService: Updating contribution type to', type);
        this.contributionTypeSource.next(type);
    }

    updateDepartmentsType(departmentsType: string) {
        console.log(
            'TabService: Updating contribution type to',
            departmentsType
        );
        this.departmentsTypeSource.next(departmentsType);
    }

    // Method to update all form data at once
    updateFormData(formData: {
        id: string;
        designation: string;
        type: string;
        departmentsType: string;
    }) {
        console.log('TabService: Updating form data:', formData);
        this.contributionIdSource.next(formData.id);
        this.designationSource.next(formData.designation);
        this.contributionTypeSource.next(formData.type);
        this.departmentsTypeSource.next(formData.departmentsType);
    }

    // Method to get current form data values
    getCurrentFormData() {
        return {
            id: this.contributionIdSource.getValue(),
            designation: this.designationSource.getValue(),
            type: this.contributionTypeSource.getValue(),
            departmentsType: this.departmentsTypeSource.getValue(),
        };
    }
}
