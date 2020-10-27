import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { HttpClientModule } from "@angular/common/http";
import {HoverDirective} from "./user-component/hover.directive";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from  "./search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    HoverDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

