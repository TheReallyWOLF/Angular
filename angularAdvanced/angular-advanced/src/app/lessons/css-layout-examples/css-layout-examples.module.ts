import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssLayoutExamplesRoutingModule } from './css-layout-examples-routing.module';
import { CssLayoutExamplesComponent } from './css-layout-examples.component';
import { ThreeDimensionalMenuComponent } from './three-dimensional-menu/three-dimensional-menu.component';


@NgModule({
  declarations: [
    CssLayoutExamplesComponent,
    ThreeDimensionalMenuComponent
  ],
  imports: [
    CommonModule,
    CssLayoutExamplesRoutingModule
  ]
})
export class CssLayoutExamplesModule { }
