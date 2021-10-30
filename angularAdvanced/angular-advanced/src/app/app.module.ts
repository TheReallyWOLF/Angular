import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Генерация ленивой загрузки с модулями (Ангуляр 8+)
// ng new lazy-loading --routing
// создать папку с модулем и добавить рокт в корень
// ng g m lesson/directive-and-pipe  --route directive-and-pipe --module app.module
