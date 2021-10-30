import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAdvancedRoutingModule } from './form-advanced-routing.module';
import { FormAdvancedComponent } from './form-advanced.component';


@NgModule({
  declarations: [
    FormAdvancedComponent
  ],
  imports: [
    CommonModule,
    FormAdvancedRoutingModule
  ]
})
export class FormAdvancedModule { }
