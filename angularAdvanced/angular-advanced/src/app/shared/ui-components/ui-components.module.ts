import { NgModule } from '@angular/core';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";



@NgModule({
  declarations: [
    UiButtonComponent,
    UiInputComponent
  ],
    exports: [
        UiButtonComponent,
        UiInputComponent
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ]
})
export class UiComponentsModule { }
