import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import {UiComponentsModule} from "../../shared/ui-components/ui-components.module";
import { GameInverseMatrixComponent } from './game-inverse-matrix/game-inverse-matrix.component';
import { GamePresentationPageComponent } from './game-presentation-page/game-presentation-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GameFieldComponent } from './game-field/game-field.component';
import {NgxsModule} from "@ngxs/store";
import {GameInverseMatrixState} from "./game-inverse-matrix/state/game-inverse-matrix.state";
import { GameTicTacToeComponent } from './game-tic-tac-toe/game-tic-tac-toe.component';
import {HomeModule} from "../home/home.module";
import {MatIconModule} from "@angular/material/icon";
import { GameSeaBattleComponent } from './game-sea-battle/game-sea-battle.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { MemoryGameDifficultyNamePipe } from './shared/pipe/memory-game-difficulty-name.pipe';
import { GameHeroBattleComponent } from './game-hero-battle/game-hero-battle.component';
import { GameHeroBattleOptionComponent } from './game-hero-battle-option/game-hero-battle-option.component';
import {GameHeroBattleState} from "./game-hero-battle/state/game-hero-battle.state";
import {GameHeroOptionsState} from "./game-hero-battle-option/state/game-hero-options.state";


@NgModule({
  declarations: [
    GamesComponent,
    GameInverseMatrixComponent,
    GamePresentationPageComponent,
    GameFieldComponent,
    GameTicTacToeComponent,
    GameSeaBattleComponent,
    MemoryGameComponent,
    MemoryGameDifficultyNamePipe,
    GameHeroBattleComponent,
    GameHeroBattleOptionComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    UiComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([
      GameInverseMatrixState,
      GameHeroBattleState,
      GameHeroOptionsState
    ]),
    HomeModule,
    MatIconModule,
  ]
})
export class GamesModule { }
