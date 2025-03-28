import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent], // Declare components
  imports: [BrowserModule, CdkStepperModule], // Import modules
  exports: [CdkStepperModule],ces
  bootstrap: [AppComponent], // Set bootstrap component
})
export class AppModule {}
