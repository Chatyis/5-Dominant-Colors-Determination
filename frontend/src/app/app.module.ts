import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArrToRgbValuePipe } from './pipes/arrToRgbValue.pipe';
import { FormModule } from './form/form.module';
import { RestApiService } from './rest-api/rest-api.service';
import { ResultsComponent } from './results/results.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCard } from "@angular/material/card";
import { MatSlider, MatSliderThumb } from "@angular/material/slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatButton } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ResultsComponent,
    FormModule,
    HttpClientModule,
    MatCard,
    MatSlider,
    MatSliderThumb,
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatButton,
    MatDivider,
    ReactiveFormsModule
  ],
  providers: [ArrToRgbValuePipe, RestApiService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
