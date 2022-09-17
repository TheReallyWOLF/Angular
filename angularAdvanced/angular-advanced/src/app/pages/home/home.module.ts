import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {FreshnessDatePipe} from "../../shared/pipes/freshness-date-pipe.pipe";
import {MyCustomPipe} from "../../shared/pipes/my-custom.pipe";
import {MyCustomMetricPipe} from "../../shared/pipes/my-custom-metric.pipe";
import {MyImpurePipe, MyPurePipe} from "../../shared/pipes/pure-impure.pipe";
import {FormsModule} from "@angular/forms";
import {UiComponentsModule} from "../../shared/ui-components/ui-components.module";
import {GetArrFromNumPipe} from "../../shared/pipes/get-arr-from-num.pipe";


@NgModule({
  declarations: [
    HomeComponent,
    FreshnessDatePipe,
    MyCustomPipe,
    MyCustomMetricPipe,
    MyPurePipe,
    MyImpurePipe,
    GetArrFromNumPipe
  ],
  exports: [
    FreshnessDatePipe,
    MyCustomPipe,
    MyCustomMetricPipe,
    MyPurePipe,
    MyImpurePipe,
    GetArrFromNumPipe
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        UiComponentsModule
    ]
})
export class HomeModule {
}
