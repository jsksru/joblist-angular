import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { CheckBoxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { RadioListComponent } from './radio-list/radio-list.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
  declarations: [
    InputComponent,
    MultiSelectComponent,
    CheckBoxComponent,
    RadioComponent,
    RadioListComponent,
    IconButtonComponent,
    PaginatorComponent,
  ],
  exports: [
    InputComponent,
    MultiSelectComponent,
    CheckBoxComponent,
    RadioComponent,
    RadioListComponent,
    IconButtonComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ControlsModule { }
