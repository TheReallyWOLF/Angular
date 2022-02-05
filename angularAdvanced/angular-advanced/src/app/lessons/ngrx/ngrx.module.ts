import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxComponent } from './ngrx.component';
import { CounterNgrxComponent } from './counter/counter-ngrx/counter-ngrx.component';


@NgModule({
  declarations: [
    NgrxComponent,
    CounterNgrxComponent
  ],
  imports: [
    CommonModule,
    NgrxRoutingModule
  ]
})
export class NgrxModule { }
