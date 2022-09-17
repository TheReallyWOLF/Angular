import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormAdvancedRoutingModule} from './form-advanced-routing.module';
import {FormAdvancedComponent} from './form-advanced.component';
import {AngularExampleFormComponent} from './angular-example-form/angular-example-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UiComponentsModule} from "../../shared/ui-components/ui-components.module";


@NgModule({
  declarations: [
    FormAdvancedComponent,
    AngularExampleFormComponent
  ],
  imports: [
    CommonModule,
    FormAdvancedRoutingModule,
    ReactiveFormsModule,
    UiComponentsModule
  ]
})
export class FormAdvancedModule {
}
