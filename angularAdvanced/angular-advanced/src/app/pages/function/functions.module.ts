import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {FunctionsRoutingModule} from './functions-routing.module';
import {FunctionsComponent} from './functions.component';
import {AlgorithmsComponent} from './algorithms/algorithms.component';
import {ExamplesComponent} from './examples/examples.component';
import {AlgorithmExampleComponent} from './algorithms/algorithm-example/algorithm-example.component';
import {UiComponentsModule} from "../../shared/ui-components/ui-components.module";
import { ExampleCardComponent } from './examples/example-card/example-card.component';


@NgModule({
  declarations: [
    FunctionsComponent,
    AlgorithmsComponent,
    ExamplesComponent,
    AlgorithmExampleComponent,
    ExampleCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FunctionsRoutingModule,
    UiComponentsModule,
  ]
})
export class FunctionsModule {
}
