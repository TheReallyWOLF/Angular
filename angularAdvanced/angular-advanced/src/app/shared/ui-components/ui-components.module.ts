import { NgModule } from '@angular/core';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { UiPanelComponent } from './ui-panel/ui-panel.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiAlertBoxComponent } from './ui-alert-box/ui-alert-box.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    UiButtonComponent,
    UiInputComponent,
    UiPanelComponent,
    UiCardComponent,
    UiAlertBoxComponent,
    UiModalComponent,
    UiDropdownComponent
  ],
  exports: [
      UiButtonComponent,
      UiInputComponent,
      UiPanelComponent,
      UiCardComponent,
      UiAlertBoxComponent,
      UiModalComponent,
      UiDropdownComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ]
})
export class UiComponentsModule { }
