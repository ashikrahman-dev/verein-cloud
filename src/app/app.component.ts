import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent,
  ],
  template: `
    <mat-toolbar class="top-bar-area">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>

    <!-- Sidebar -->
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav opened mode="side" class="sidenav" [style.width]="'248px'">
        <app-custom-sidenav></app-custom-sidenav>
      </mat-sidenav>

      <mat-sidenav-content class="content">
        <div class="main-content">
          <router-outlet />
          <h1>Main Content {{ title }}!</h1>
          <!-- <h1>Main Content</h1> -->
          <p>Some content here...</p>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .sidenav-container {
        height: calc(100% - 64px);
      }
      .sidenav {
        background: #393b3d;
        height: 100%;
      }
    `,
  ],
})
export class AppComponent {
  title = 'verein cloud';
}
