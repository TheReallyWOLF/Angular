import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FreshnessDatePipePipe } from "../../shared/pipes/freshness-date-pipe.pipe";


@NgModule({
  declarations: [
    HomeComponent,
    FreshnessDatePipePipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
