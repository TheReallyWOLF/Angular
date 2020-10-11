import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router"; // маршрутизатор

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';

// маршруты для переключения страниц
const appRoutes: Routes = [
  {path: '', component:CarComponent},
  {path: 'about', component:ContactsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // управляющий объект для роутинга
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
