import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TabService {
    constructor(@Inject(DOCUMENT) private document: Document) {}

    switchToTab(tabId: string) {
        const tabElement = this.document.getElementById(tabId);
        if (tabElement) {
            // Manually trigger click event on the tab button
            tabElement.click();
        }
    }
}
