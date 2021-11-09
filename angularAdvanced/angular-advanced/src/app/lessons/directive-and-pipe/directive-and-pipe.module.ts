import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DirectiveAndPipeRoutingModule} from './directive-and-pipe-routing.module';
import {DirectiveAndPipeComponent} from './directive-and-pipe.component';
import {MyColorDirective} from "../../shared/directive/atributeDirective/my-color.directive";
import {MyEventDirective} from "../../shared/directive/atributeDirective/my-event.directive";
import {MyColorChangeArgumentsDirective} from "../../shared/directive/atributeDirective/my-color-change-arguments.directive";
import {MyRepeatDirective} from "../../shared/directive/atributeDirective/my-repeat-directive";
import {MyConfirmDirective} from "../../shared/directive/atributeDirective/my-confirm-directive";
import {MyCoordsDirective} from "../../shared/directive/atributeDirective/my-coords-directive";
import {MyClickableElementDirective} from "../../shared/directive/atributeDirective/my-clickable-element-directive";
import {SimpleDirectiveComponent} from './simple-directive/simple-directive.component';
import {EventDirectiveComponent} from './event-directive/event-directive.component';
import {PassingFewDirectiveComponent} from './passing-few-directive/passing-few-directive.component';
import {ConfirmSampleDirectiveComponent} from './confirm-sample-directive/confirm-sample-directive.component';
import {MousemoveSampleDirectiveComponent} from './mousemove-sample-directive/mousemove-sample-directive.component';
import {HostBindingSampleDirectiveComponent} from './host-binding-sample-directive/host-binding-sample-directive.component';
import {PassingDataDirectiveComponent} from './passing-data-directive/passing-data-directive.component';
import {MyIfSampleDirectiveComponent} from './my-if-sample-directive/my-if-sample-directive.component';
import {MyDelaySampleDirectiveComponent} from './my-delay-sample-directive/my-delay-sample-directive.component';
import {MyContextSampleDirectiveComponent} from './my-context-sample-directive/my-context-sample-directive.component';
import {MyIfSampleDirective} from "../../shared/directive/structureDirective/my-if-sample-directive";
import {MyDelaySampleDirective} from "../../shared/directive/structureDirective/my-delay-sample-directive";
import {MyContextSampleDirective} from "../../shared/directive/structureDirective/my-context-sample-directive";
import {MyDataFreshessComponent} from "./my-data-freshess/my-data-freshess.component";
import {HomeModule} from "../home/home.module";
import {BuiltinPipesComponent} from './builtin-pipes/builtin-pipes.component';
import {ChainsPipesComponent} from './chains-pipes/chains-pipes.component';
import {AsyncPipesComponent} from './async-pipes/async-pipes.component';
import {SimpleCustomPipesComponent} from './simple-custom-pipes/simple-custom-pipes.component';
import {SimpleCustomPipes2Component} from './simple-custom-pipes2/simple-custom-pipes2.component';
import {PureImpurePipeComponent} from './pure-inpure-pipe/pure-inpure-pipe.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MyColorDirective,
    MyEventDirective,
    MyCoordsDirective,
    MyRepeatDirective,
    MyConfirmDirective,
    MyIfSampleDirective,
    AsyncPipesComponent,
    ChainsPipesComponent,
    BuiltinPipesComponent,
    MyDelaySampleDirective,
    MyDataFreshessComponent,
    EventDirectiveComponent,
    PureImpurePipeComponent,
    SimpleDirectiveComponent,
    MyContextSampleDirective,
    DirectiveAndPipeComponent,
    SimpleCustomPipesComponent,
    SimpleCustomPipes2Component,
    MyClickableElementDirective,
    PassingFewDirectiveComponent,
    MyIfSampleDirectiveComponent,
    PassingDataDirectiveComponent,
    MyColorChangeArgumentsDirective,
    ConfirmSampleDirectiveComponent,
    MyDelaySampleDirectiveComponent,
    MyContextSampleDirectiveComponent,
    MousemoveSampleDirectiveComponent,
    HostBindingSampleDirectiveComponent,
  ],
  imports: [
    CommonModule,
    DirectiveAndPipeRoutingModule,
    HomeModule,
    FormsModule,
  ]
})
export class DirectiveAndPipeModule {
}
