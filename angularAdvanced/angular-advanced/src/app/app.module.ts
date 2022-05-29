import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsModule} from "@ngxs/store";
import {RootState} from "./state/root.state";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import {environment} from "../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([RootState], {
      developmentMode: !environment.production,
    }),
    NgxsResetPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: !environment.production,
      maxAge: 50,
    }),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// Генерация ленивой загрузки с модулями (Ангуляр 8+)
// ng new lazy-loading --routing
// создать папку с модулем и добавить рект в корень
// ng g m lessons/directive-and-pipe  --route directive-and-pipe --module app.module
