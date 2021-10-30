import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveAndPipeRoutingModule } from './directive-and-pipe-routing.module';
import { DirectiveAndPipeComponent } from './directive-and-pipe.component';


@NgModule({
  declarations: [
    DirectiveAndPipeComponent
  ],
  imports: [
    CommonModule,
    DirectiveAndPipeRoutingModule
  ]
})
export class DirectiveAndPipeModule { }
