import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxComponent} from './ngrx.component';
import {CounterNgxsComponent} from "./counter/counter-ngxs/counter-ngxs.component";
import {NgxsModule} from "@ngxs/store";
import {CounterState} from "./counter/counter-ngxs/counter.state";
import {NgrxRoutingModule} from "./ngrx-routing.module";


@NgModule({
  declarations: [
    NgrxComponent,
    CounterNgxsComponent,
  ],
  imports: [
    NgxsModule.forFeature([
      CounterState
    ]),
    NgrxRoutingModule,
    CommonModule,
  ]
})
export class NgrxModule {
}
