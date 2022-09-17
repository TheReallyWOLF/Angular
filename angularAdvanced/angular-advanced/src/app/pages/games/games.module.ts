import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import {UiComponentsModule} from "../../shared/ui-components/ui-components.module";
import { GameLifeComponent } from './game-life/game-life.component';
import { GamePresentationPageComponent } from './game-presentation-page/game-presentation-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GameFieldComponent } from './game-field/game-field.component';
import {NgxsModule} from "@ngxs/store";
import {GameLifeState} from "./game-life/state/game-life.state";


@NgModule({
  declarations: [
    GamesComponent,
    GameLifeComponent,
    GamePresentationPageComponent,
    GameFieldComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    UiComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([
      GameLifeState
    ]),
  ]
})
export class GamesModule { }
