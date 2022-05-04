import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionsRoutingModule } from './functions-routing.module';
import { FunctionsComponent } from './functions.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { ExamplesComponent } from './examples/examples.component';


@NgModule({
  declarations: [
    FunctionsComponent,
    AlgorithmsComponent,
    ExamplesComponent
  ],
  imports: [
    CommonModule,
    FunctionsRoutingModule
  ]
})
export class FunctionsModule { }
