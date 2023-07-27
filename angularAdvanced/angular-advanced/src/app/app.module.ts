import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatAutocompleteModule} from "@angular/material/autocomplete";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsModule} from "@ngxs/store";
import {RootState} from "./state/root.state";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsResetPluginModule} from 'ngxs-reset-plugin';
import {environment} from "../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageConsoleDirective } from './shared/directive/globalDirective/message-console.directive';
import {UiPanelComponent} from "./shared/ui-components/ui-panel/ui-panel.component";
import {UiButtonComponent} from "./shared/ui-components/ui-button/ui-button.component";


/**
 * declarations массив деклараций для импорта компонентов, директив и каналов.
 *
 * imports импорт других модулей.
 *ц
 * providers поставщиков массивов для определения сервисов, которые были украшены декоратором Injectable, что делает их доступными через Angular DI.
 *
 * Exports - это массив, который позволяет объявлениям и объявлениям внутри модуля быть доступными из модулей,
 *           которые импортируют модуль,в котором они определены.
 *
 * Bootstrap также определяет компоненты, скомпилированные при загрузке модуля, и автоматически добавляет их в entryComponents.
 * */
@NgModule({
  declarations: [
    AppComponent,
    MessageConsoleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    NgxsModule.forRoot([RootState], {
      developmentMode: !environment.production,
    }),
    NgxsResetPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: !environment.production,
      maxAge: 50,
    }),
    BrowserAnimationsModule,
    UiPanelComponent,
    UiButtonComponent,
  ],
  providers: [
    // тут сервисы
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// Генерация ленивой загрузки с модулями (Ангуляр 8+)
// ng new lazy-loading --routing
// создать папку с модулем и добавить рект в корень
// ng g m lessons/directive-and-pipe  --route directive-and-pipe --module app.module
