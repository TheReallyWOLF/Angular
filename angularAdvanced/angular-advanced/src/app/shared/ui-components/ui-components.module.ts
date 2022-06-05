import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button/ui-button.component';



@NgModule({
  declarations: [
    UiButtonComponent
  ],
  exports: [
    UiButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiComponentsModule { }
