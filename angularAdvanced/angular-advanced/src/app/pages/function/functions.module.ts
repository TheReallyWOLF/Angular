import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {FunctionsRoutingModule} from './functions-routing.module';
import {FunctionsComponent} from './functions.component';
import {AlgorithmsComponent} from './algorithms/algorithms.component';
import {ExamplesComponent} from './examples/examples.component';
import {AlgorithmExampleComponent} from './algorithms/algorithm-example/algorithm-example.component';
import { ExampleCardComponent } from './examples/example-card/example-card.component';
import {PrepareViewObserverDirective} from "../../shared/directive/globalDirective/prepare-view-observer.directive";
import {UiButtonComponent} from "../../shared/ui-components/ui-button/ui-button.component";
import {UiInputComponent} from "../../shared/ui-components/ui-input/ui-input.component";
import {UiCardComponent} from "../../shared/ui-components/ui-card/ui-card.component";


@NgModule({
  declarations: [
    FunctionsComponent,
    AlgorithmsComponent,
    ExamplesComponent,
    AlgorithmExampleComponent,
    ExampleCardComponent,
    PrepareViewObserverDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FunctionsRoutingModule,
    UiButtonComponent,
    UiInputComponent,
    UiCardComponent,
  ]
})
export class FunctionsModule {
}
