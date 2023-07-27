import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxComponent} from './ngrx.component';
import {CounterNgxsComponent} from "./counter/counter-ngxs/counter-ngxs.component";
import {NgxsModule} from "@ngxs/store";
import {CounterState} from "./counter/counter-ngxs/counter.state";
import {NgrxRoutingModule} from "./ngrx-routing.module";
import {UiButtonComponent} from "../../shared/ui-components/ui-button/ui-button.component";


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
    UiButtonComponent,
  ]
})
export class NgrxModule {
}
