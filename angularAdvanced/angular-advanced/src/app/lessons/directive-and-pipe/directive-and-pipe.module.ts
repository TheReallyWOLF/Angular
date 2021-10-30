import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveAndPipeRoutingModule } from './directive-and-pipe-routing.module';
import { DirectiveAndPipeComponent } from './directive-and-pipe.component';
import {MyColorDirective} from "../../shared/directive/colorDirective/my-color.directive";
import {MyEventDirective} from "../../shared/directive/colorDirective/my-event.directive";
import {MyColorChangeArgumentsDirective} from "../../shared/directive/colorDirective/my-color-change-arguments.directive";
import {MyRepeatDirective} from "../../shared/directive/structureDirective/my-repeat-directive";


@NgModule({
  declarations: [
    MyColorDirective,
    MyEventDirective,
    DirectiveAndPipeComponent,
    MyColorChangeArgumentsDirective,
    MyRepeatDirective
  ],
  imports: [
    CommonModule,
    DirectiveAndPipeRoutingModule,
  ]
})
export class DirectiveAndPipeModule { }
