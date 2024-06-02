import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ImageInputComponent } from './image-input/image-input.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { MatButton } from "@angular/material/button";
import { MatSlider, MatSliderThumb } from "@angular/material/slider";
import { MatCheckbox } from "@angular/material/checkbox";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButton,
    MatSlider,
    MatSliderThumb,
    MatCheckbox
  ],
  declarations: [
    ImageInputComponent,
    InputComponent,
    RadioComponent,
  ],
  exports: [
    ImageInputComponent,
    InputComponent,
    RadioComponent,
  ]
})
export class FormModule {
}
