import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {FunctionsRoutingModule} from './functions-routing.module';
import {FunctionsComponent} from './functions.component';
import {AlgorithmsComponent} from './algorithms/algorithms.component';
import {ExamplesComponent} from './examples/examples.component';
import {AlgorithmExampleComponent} from './algorithms/algorithm-example/algorithm-example.component';


@NgModule({
  declarations: [
    FunctionsComponent,
    AlgorithmsComponent,
    ExamplesComponent,
    AlgorithmExampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FunctionsRoutingModule,
  ]
})
export class FunctionsModule {
}
