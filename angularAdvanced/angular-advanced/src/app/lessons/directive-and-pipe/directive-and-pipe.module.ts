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


@NgModule({
  declarations: [
    MyColorDirective,
    MyEventDirective,
    DirectiveAndPipeComponent,
    MyColorChangeArgumentsDirective,
    MyRepeatDirective,
    MyConfirmDirective,
    MyCoordsDirective,
    MyClickableElementDirective
  ],
  imports: [
    CommonModule,
    DirectiveAndPipeRoutingModule,
  ]
})
export class DirectiveAndPipeModule { }
