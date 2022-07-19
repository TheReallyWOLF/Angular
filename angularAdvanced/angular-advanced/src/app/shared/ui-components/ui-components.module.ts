import { NgModule } from '@angular/core';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { UiPanelComponent } from './ui-panel/ui-panel.component';
import { UiCardComponent } from './ui-card/ui-card.component';



@NgModule({
  declarations: [
    UiButtonComponent,
    UiInputComponent,
    UiPanelComponent,
    UiCardComponent
  ],
    exports: [
        UiButtonComponent,
        UiInputComponent,
        UiPanelComponent,
        UiCardComponent
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ]
})
export class UiComponentsModule { }
