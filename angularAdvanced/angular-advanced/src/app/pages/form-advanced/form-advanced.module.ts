import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormAdvancedRoutingModule} from './form-advanced-routing.module';
import {FormAdvancedComponent} from './form-advanced.component';
import {AngularExampleFormComponent} from './angular-example-form/angular-example-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UiButtonComponent} from "../../shared/ui-components/ui-button/ui-button.component";
import {UiPanelComponent} from "../../shared/ui-components/ui-panel/ui-panel.component";
import { SearchFieldExampleComponent } from './search-field-example/search-field-example.component';


@NgModule({
  declarations: [
    FormAdvancedComponent,
    AngularExampleFormComponent,
    SearchFieldExampleComponent
  ],
  imports: [
    CommonModule,
    FormAdvancedRoutingModule,
    ReactiveFormsModule,
    UiButtonComponent,
    UiPanelComponent,
  ]
})
export class FormAdvancedModule {
}
