import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DomSanitizer } from '@angular/platform-browser';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, NgFor],
  template: `
    <div class="custom-sidenav-header font-rubik">
      <div class="logo-area">
        <a href="#/home">
          <img
            src="/assets/images/logo.svg"
            width="28"
            height="28"
            alt="Logo"
          />
        </a>
      </div>
    </div>
    <!-- <mat-nav-list>
      <a
        mat-list-item
        *ngFor="let item of menuItems()"
        class="nav-item font-rubik"
      >
        <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
        <span matListItemTitle>{{ item.label }}</span>
      </a>
    </mat-nav-list> -->

    <ul class="navigation-menu-wrap">
      <li>
        <a routerLink="/home" class="custom-nav-item">
          <span>
            <img [src]="menuIcon1" class="img-fluid" alt="" />
          </span>
          <span>Übersicht</span>
        </a>
      </li>
      <li>
        <a routerLink="/home" class="custom-nav-item">
          <span>
            <img [src]="menuIcon2" class="img-fluid" alt="" />
          </span>
          <span>Mitgliederverwaltung</span>
        </a>
      </li>
      <li>
        <a routerLink="/home" class="custom-nav-item">
          <span>
            <img [src]="menuIcon3" class="img-fluid" alt="" />
          </span>
          <span>Mein Verein </span>
        </a>
      </li>
      <li>
        <a routerLink="/home" class="custom-nav-item">
          <span>
            <img [src]="menuIcon4" class="img-fluid" alt="" />
          </span>
          <span>Lizenz bestellen</span>
        </a>
      </li>
      <li>
        <a routerLink="/home" class="custom-nav-item">
          <span>
            <img [src]="menuIcon5" class="img-fluid" alt="" />
          </span>
          <span>Kommunikation</span>
        </a>
      </li>
      <li>
        <a routerLink="/home" class="custom-nav-item">
          <span>
            <img [src]="menuIcon6" class="img-fluid" alt="" />
          </span>
          <span>Service & Support </span>
        </a>
      </li>
      <li>
        <a routerLink="/home" class="custom-nav-item">
          <span>
            <img [src]="menuIcon7" class="img-fluid" alt="" />
          </span>
          <span>Umfrage</span>
        </a>
      </li>
      <li>
        <a routerLink="/home" class="custom-nav-item">
          <span>
            <img [src]="menuIcon8" class="img-fluid" alt="" />
          </span>
          <span>Umfrage</span>
        </a>
      </li>
    </ul>
  `,
  styles: `
  .navigation-menu-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  ul {
    list-style-type: none;
    padding: 0; 
  }
    .logo-area {
      padding: 20px;
      margin: 0 auto;
      text-align: center;
    }
    .custom-nav-item {
      display: flex;
      gap: 12px;
      color: #fff;
      cursor: pointer;
      padding: 12px;
      border-radius: 8px;
      text-decoration: none;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
      }
    }
    .custom-nav-item .mdc-list-item__content {
        display: flex !important;
        flex-direction: row-reverse !important;
        justify-content: start !important;
        gap: 12px !important;
        align-items: center !important;
    }
    .app-custom-sidenav {
      min-height: 100%;
    }
    .nav-item {
      padding: 0px !important;

      border-radius: 8px !important;
      background: rgba(255, 255, 255, 0.0) !important;
      margin-block: 4px !important;

      &:hover {
        background: rgba(255, 255, 255, 0.08) !important;
      }

      .mat-icon  {
        margin-left: 12px !important;
      }
    }
    
  `,
})
export class CustomSidenavComponent {
  menuIcon1 = 'assets/images/menu-ubersicht-icon.svg';
  menuIcon2 = 'assets/images/menu-mitgliederverwaltung-icon.svg';
  menuIcon3 = 'assets/images/menu-mein-verein-icon.svg';
  menuIcon4 = 'assets/images/menu-lizenz-icon.svg';
  menuIcon5 = 'assets/images/menu-kommunikation-icon.svg';
  menuIcon6 = 'assets/images/menu-service-icon.svg';
  menuIcon7 = 'assets/images/menu-umfrage-icon.svg';
  menuIcon8 = 'assets/images/menu-erganzende-icon.svg';

  // menuItems = signal<MenuItem[]>([
  //   {
  //     icon: 'menuIcon1',
  //     label: 'Übersicht',
  //     route: '/home',
  //   },
  //   { icon: 'settings', label: 'Settings', route: '/settings' },
  //   { icon: 'info', label: 'About', route: '/about' },
  //   { icon: 'contact_mail', label: 'Contact', route: '/contact' },
  //   { icon: 'help', label: 'Help', route: '/help' },
  //   { icon: 'feedback', label: 'Feedback', route: '/feedback' },
  // ]);

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // Register your custom home icon
    this.matIconRegistry.addSvgIconLiteral(
      'custom_home',
      this.domSanitizer.bypassSecurityTrustHtml(`
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5.41667C2.5 3.22899 2.52342 2.5 5.41667 2.5C8.30991 2.5 8.33333 3.22899 8.33333 5.41667C8.33333 7.60434 8.34256 8.33333 5.41667 8.33333C2.49077 8.33333 2.5 7.60434 2.5 5.41667Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6665 5.41667C11.6665 3.22899 11.6899 2.5 14.5832 2.5C17.4764 2.5 17.4998 3.22899 17.4998 5.41667C17.4998 7.60434 17.5091 8.33333 14.5832 8.33333C11.6573 8.33333 11.6665 7.60434 11.6665 5.41667Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 14.5827C2.5 12.395 2.52342 11.666 5.41667 11.666C8.30991 11.666 8.33333 12.395 8.33333 14.5827C8.33333 16.7704 8.34256 17.4993 5.41667 17.4993C2.49077 17.4993 2.5 16.7704 2.5 14.5827Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6665 14.5827C11.6665 12.395 11.6899 11.666 14.5832 11.666C17.4764 11.666 17.4998 12.395 17.4998 14.5827C17.4998 16.7704 17.5091 17.4993 14.5832 17.4993C11.6573 17.4993 11.6665 16.7704 11.6665 14.5827Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `)
    );
  }
}
