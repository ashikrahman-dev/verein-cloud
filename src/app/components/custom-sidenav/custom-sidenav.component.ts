import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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
    <div class="custom-sidenav-header">
      <div class="logo-area">
        <img src="/assets/images/logo.svg" width="28" height="28" alt="Logo" />
      </div>
    </div>
    <mat-nav-list>
      <a mat-list-item *ngFor="let item of menuItems()" class="nav-item">
        <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
        <span matListItemTitle>{{ item.label }}</span>
      </a>
    </mat-nav-list>
  `,
  styles: `
    .logo-area {
      padding: 20px;
      margin: 0 auto;
      text-align: center;
    }
    .app-custom-sidenav {
      min-height: 100%;
    }
    
  `,
})
export class CustomSidenavComponent {
  menuItems = signal<MenuItem[]>([
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'settings', label: 'Settings', route: '/settings' },
    { icon: 'info', label: 'About', route: '/about' },
    { icon: 'contact_mail', label: 'Contact', route: '/contact' },
    { icon: 'help', label: 'Help', route: '/help' },
    { icon: 'feedback', label: 'Feedback', route: '/feedback' },
  ]);
}
