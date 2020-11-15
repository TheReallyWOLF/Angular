import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { HttpClientModule } from "@angular/common/http";
import {HoverDirective} from "./user-component/hover.directive";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from  "./search.pipe";
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import {RouterModule} from "@angular/router";

const routes = [ // создание роутинга
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        UserComponentComponent,
        HoverDirective,
        SearchPipe,
        HomePageComponent,
        SetupPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes) // подключение роутов
    ],
    providers: [],
    exports: [
        HomePageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

