import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import {UiComponentsModule} from "../../shared/ui-components/ui-components.module";
import { GameLifeComponent } from './game-life/game-life.component';
import { GamePresentationPageComponent } from './game-presentation-page/game-presentation-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GamesComponent,
    GameLifeComponent,
    GamePresentationPageComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    UiComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GamesModule { }
