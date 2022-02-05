import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {metaReducers, reducers} from "./redusers";
import {AppEffects} from "./app.effects";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: { // настройка для разработки
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Генерация ленивой загрузки с модулями (Ангуляр 8+)
// ng new lazy-loading --routing
// создать папку с модулем и добавить рокт в корень
// ng g m lessons/directive-and-pipe  --route directive-and-pipe --module app.module

// Как установить стор
// ng add @ngrx/store@latest  - сам ngrx стор
// ng add @ngrx/store-devtools@latest - вспомогательная утилита для проверки состояний
// ng add @ngrx/effects@latest - эффекты
// ng add @ngrx/router-store@latest - информация о том на кокой странице стора ты находишься
