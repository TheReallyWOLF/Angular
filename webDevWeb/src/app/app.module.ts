import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './MyComponents/my-new-component/my-new-component.component';
import { DateComponent } from './MyComponents/date/date.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './MyComponents/home/home.component';
import { NewsComponent } from './MyComponents/news/news.component';
import { NewsaboutComponent } from './MyComponents/newsabout/newsabout.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';
import { NewServiceService } from "./service/new-service.service";
import { HttpClient } from "@angular/common/http";

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'date', component: DateComponent},
  {path:'news', component: NewsComponent},
  {path:'about', component: NewsaboutComponent},
  {path:'**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    DateComponent,
    HomeComponent,
    NewsComponent,
    NewsaboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // возвращет модуль с роутами
    HttpClientModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
