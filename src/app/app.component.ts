import { CdkStepperModule } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { ContributionIntervalComponent } from './components/contribution-interval/contribution-interval.component';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { StepperComponent } from "./components/stepper/stepper.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent,
    ContributionIntervalComponent,
    CdkStepperModule,
    StepperComponent
],
  template: `
    <!-- Sidebar -->
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav opened mode="side" class="sidenav" [style.width]="'248px'">
        <app-custom-sidenav></app-custom-sidenav>
      </mat-sidenav>

      <mat-sidenav-content class="content font-rubik">
        <mat-toolbar class="top-bar-area">
          <!-- <button mat-icon-button>
            <mat-icon>menu</mat-icon>
          </button> -->
          <div class="top-bar-wrapper-area w-100 d-flex justify-space-between">
            <div class="top-bar-left w-100">
              <h3 class="font-rubik">Contributions</h3>
              <input
                type="search"
                placeholder="Search anything here"
                class="header-search font-rubik"
              />
            </div>
            <div class="w-100">
              <div class="text-end">
                <img [src]="userImage" alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </mat-toolbar>
        <div class="main-content">
          <router-outlet>
            <app-stepper></app-stepper>
            <app-contribution-interval></app-contribution-interval>
            <!-- <h1>Main Content {{ title }}!</h1> -->
          </router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
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
    `,
  ],
})
export class AppComponent {
  title = 'verein cloud';

  userImage = 'assets/images/user-image.png';
}
