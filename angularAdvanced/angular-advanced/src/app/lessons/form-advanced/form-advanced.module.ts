import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAdvancedRoutingModule } from './form-advanced-routing.module';
import { FormAdvancedComponent } from './form-advanced.component';
import { AngularExampleFormComponent } from './angular-example-form/angular-example-form.component';


@NgModule({
  declarations: [
    FormAdvancedComponent,
    AngularExampleFormComponent
  ],
  imports: [
    CommonModule,
    FormAdvancedRoutingModule
  ]
})
export class FormAdvancedModule { }
