import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FreshnessDatePipe } from "../../shared/pipes/freshness-date-pipe.pipe";


@NgModule({
  declarations: [
    HomeComponent,
    FreshnessDatePipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
