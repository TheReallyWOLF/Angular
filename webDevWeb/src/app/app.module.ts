import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './MyComponents/my-new-component/my-new-component.component';
import { DateComponent } from './MyComponents/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
