import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateTodoComponent } from './_template/template-todo/template-todo.component';
import { TemplateTodoFormComponent } from './_template/template-todo-form/template-todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateHeaderComponent,
    TemplateTodoComponent,
    TemplateTodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
