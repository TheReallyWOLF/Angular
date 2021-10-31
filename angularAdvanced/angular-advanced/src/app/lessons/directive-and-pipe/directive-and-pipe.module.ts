import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveAndPipeRoutingModule } from './directive-and-pipe-routing.module';
import { DirectiveAndPipeComponent } from './directive-and-pipe.component';
import {MyColorDirective} from "../../shared/directive/atributeDirective/my-color.directive";
import {MyEventDirective} from "../../shared/directive/atributeDirective/my-event.directive";
import {MyColorChangeArgumentsDirective} from "../../shared/directive/atributeDirective/my-color-change-arguments.directive";
import {MyRepeatDirective} from "../../shared/directive/atributeDirective/my-repeat-directive";
import {MyConfirmDirective} from "../../shared/directive/atributeDirective/my-confirm-directive";
import {MyCoordsDirective} from "../../shared/directive/atributeDirective/my-coords-directive";
import {MyClickableElementDirective} from "../../shared/directive/atributeDirective/my-clickable-element-directive";
import { SimpleDirectiveComponent } from './simple-directive/simple-directive.component';
import { EventDirectiveComponent } from './event-directive/event-directive.component';
import { PassingFewDirectiveComponent } from './passing-few-directive/passing-few-directive.component';
import { ConfirmSampleDirectiveComponent } from './confirm-sample-directive/confirm-sample-directive.component';
import { MousemoveSampleDirectiveComponent } from './mousemove-sample-directive/mousemove-sample-directive.component';
import { HostBindingSampleDirectiveComponent } from './host-binding-sample-directive/host-binding-sample-directive.component';
import { PassingDataDirectiveComponent } from './passing-data-directive/passing-data-directive.component';


@NgModule({
  declarations: [
    MyColorDirective,
    MyEventDirective,
    DirectiveAndPipeComponent,
    MyColorChangeArgumentsDirective,
    MyRepeatDirective,
    MyConfirmDirective,
    MyCoordsDirective,
    MyClickableElementDirective,
    SimpleDirectiveComponent,
    EventDirectiveComponent,
    PassingFewDirectiveComponent,
    ConfirmSampleDirectiveComponent,
    MousemoveSampleDirectiveComponent,
    HostBindingSampleDirectiveComponent,
    PassingDataDirectiveComponent
  ],
  imports: [
    CommonModule,
    DirectiveAndPipeRoutingModule,
  ]
})
export class DirectiveAndPipeModule { }
