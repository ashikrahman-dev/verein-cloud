import { CdkStepperModule } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import {
    TranslateModule,
    // TranslatePipe,
    TranslateService,
} from '@ngx-translate/core';
import TranslateDE from '../../public/i18n/de.json';
import TranslateEN from '../../public/i18n/en.json';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';

// <--- standalone only

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        CustomSidenavComponent,
        CdkStepperModule,
        TranslateModule,

        MatMenuModule,
        // TranslatePipe,
    ],
    template: `
        <!-- Sidebar -->
        <mat-sidenav-container class="sidenav-container">
            <mat-sidenav
                opened
                mode="side"
                class="sidenav"
                [style.width]="'248px'"
            >
                <app-custom-sidenav></app-custom-sidenav>
            </mat-sidenav>

            <mat-sidenav-content class="content font-rubik">
                <mat-toolbar class="top-bar-area">
                    <div
                        class="top-bar-wrapper-area w-100 d-flex justify-space-between"
                    >
                        <div class="top-bar-left w-100">
                            <h3 class="font-rubik">Create new posts</h3>
                            <input
                                type="search"
                                placeholder="Search anything here"
                                class="header-search font-rubik"
                            />
                        </div>
                        <div
                            class="w-100 d-flex align-items-center justify-content-end gap-2"
                        >
                            <!-- Language switch btn -->
                            <select
                                class="form-select languageSelect"
                                aria-label="Default select example"
                                (change)="SwitchLang($event)"
                            >
                                <option [selected]="lang === 'en'" value="en">
                                    EN
                                </option>
                                <option [selected]="lang === 'de'" value="de">
                                    DE
                                </option>
                            </select>

                            <!-- Language switch btn -->
                            <!-- Settings Button -->
                            <button class="font-rubik border-0 header-btn">
                                <span class="header-btn-icon">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 0.75L16.125 4.875V13.125L9 17.25L1.875 13.125V4.875L9 0.75ZM9 11.25C10.2427 11.25 11.25 10.2427 11.25 9C11.25 7.75733 10.2427 6.75 9 6.75C7.75733 6.75 6.75 7.75733 6.75 9C6.75 10.2427 7.75733 11.25 9 11.25Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                                Settings
                            </button>
                            <!-- Settings Button -->
                            <!-- Notification Button -->
                            <button class="font-rubik border-0 header-btn">
                                <span class="header-btn-icon">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 1.5C12.728 1.5 15.75 4.53261 15.75 8.27355V15H2.25V8.27355C2.25 4.53261 5.27208 1.5 9 1.5ZM7.125 15.75H10.875C10.875 16.7855 10.0355 17.625 9 17.625C7.96448 17.625 7.125 16.7855 7.125 15.75Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                                Notification
                            </button>
                            <!-- Notification Button -->
                            <!-- Profile button -->
                            <button
                                class="text-end border-0 bg-transparent p-0"
                            >
                                <img
                                    [src]="userImage"
                                    alt="Image"
                                    class="img-fluid"
                                />
                            </button>
                        </div>
                    </div>
                </mat-toolbar>
                <div class="main-content">
                    <router-outlet>
                        <!-- <h1>Main Content {{ title }}!</h1> -->
                    </router-outlet>
                </div>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    styles: [
        `
            .languageSelect {
                background: url('data:image/svg+xml,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6199 5.2207L7.81655 9.02404C7.36738 9.4732 6.63238 9.4732 6.18322 9.02404L2.37988 5.2207" stroke="%23292D32" stroke-width="0.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
                    #f2f2f2;
                background-repeat: no-repeat;
                background-position: right 12px center;
                border-radius: 999px;
                color: #5a5a5a;
                font-size: 14px;
                font-weight: 400;
                line-height: 156%; /* 21.84px */
                font-family: 'Rubik', sans-serif;
                position: relative;

                &:focus {
                    outline: none;
                    box-shadow: none;
                    border: none;
                }
                &:focus-within {
                    outline: none;
                    box-shadow: none;
                }
            }
            .header-btn {
                color: var(--Dark-Colors-Dark-2, #5a5a5a);
                font-size: 14px;
                font-weight: 400;
                line-height: 156%;
                background: #f2f2f2;
                border-radius: 999px;
                display: flex;
                align-items: center;
                gap: 7px;
                padding-right: 12px;
                padding-left: 0px;
            }
            .header-btn-icon {
                background: #5a5a5a;
                padding: 7px;
                border-radius: 999px;
                width: 32px;
                height: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .top-bar-wrapper-area {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .top-bar-left {
                display: flex;
                align-items: center;
                gap: 24px;
            }
            .header-search {
                padding: 8px 14px 8px 46px;
                border-radius: 8px;
                border: 1px solid #999;
                background: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0271 13.8486L18.5961 17.4176L17.4176 18.5961L13.8486 15.0271C12.5654 16.0538 10.938 16.668 9.16797 16.668C5.02797 16.668 1.66797 13.308 1.66797 9.16797C1.66797 5.02797 5.02797 1.66797 9.16797 1.66797C13.308 1.66797 16.668 5.02797 16.668 9.16797C16.668 10.938 16.0538 12.5654 15.0271 13.8486ZM13.3552 13.2303C14.3742 12.1801 15.0013 10.7476 15.0013 9.16797C15.0013 5.94505 12.3909 3.33464 9.16797 3.33464C5.94505 3.33464 3.33464 5.94505 3.33464 9.16797C3.33464 12.3909 5.94505 15.0013 9.16797 15.0013C10.7476 15.0013 12.1801 14.3742 13.2303 13.3552L13.3552 13.2303Z" fill="%235A5A5A"/></svg>')
                    no-repeat 12px center;
                min-width: 472px;
                width: 100%;
                color: #000;
                font-size: 14px;
                &:placeholder {
                    color: #b3b3b3;
                }
                &:focus {
                    outline: none;
                }
            }
            .sidenav-container {
                height: 100svh;
            }
            .sidenav {
                background: #393b3d;
                height: 100%;
                border-radius: 0;
                padding-inline: 12px;
            }
            .content h3 {
                font-size: 24px;
                font-weight: 700;
                line-height: 1.41;
                color: #000;
            }

            .languageSelect {
                max-width: 92px;
                padding-right: 2px !important;
                --bs-form-select-bg-img: none !important;
            }
        `,
    ],
})
export class AppComponent implements OnInit {
    lang: string = '';
    title = 'verein cloud';

    userImage = 'assets/images/user-image.png';

    ngOnInit(): void {
        // Get saved language from localStorage, default to 'en'
        this.lang = localStorage.getItem('lang') || 'en';

        // Apply the saved language to the translate service
        this.translate.use(this.lang);
        this.currentLang = this.lang;
    }

    // Replace your current SwitchLang method with this:
    SwitchLang(event: any) {
        const selectedLanguage = event.target.value;

        // Save to localStorage
        localStorage.setItem('lang', selectedLanguage);

        // Actually change the language using translate service
        this.translate.use(selectedLanguage);
        this.currentLang = selectedLanguage;

        // Update the lang property to reflect current selection
        this.lang = selectedLanguage;
    }

    // constructor(private translate: TranslateService) {
    //     this.translate.addLangs(['de', 'en']);
    //     this.translate.setDefaultLang('en');
    //     this.translate.use('en');
    // }

    public currentLang = 'en';

    constructor(private translate: TranslateService) {
        this.translate.setTranslation('en', TranslateEN);
        this.translate.setTranslation('de', TranslateDE);
        this.translate.setDefaultLang('de');
    }

    // public changeLang(lang: string): void {
    //     this.translate.use(lang);
    //     this.currentLang = lang === 'en' ? 'en' : 'de';
    // }
}
