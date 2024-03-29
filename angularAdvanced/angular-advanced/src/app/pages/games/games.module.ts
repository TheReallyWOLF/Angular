import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
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
import { SeaBattleFieldComponent } from './game-sea-battle/sea-battle-field/sea-battle-field.component';
import { SeaBattleShipComponent } from './game-sea-battle/sea-battle-ship/sea-battle-ship.component';
import {UiModalComponent} from "../../shared/ui-components/ui-modal/ui-modal.component";
import {UiButtonComponent} from "../../shared/ui-components/ui-button/ui-button.component";
import {UiInputComponent} from "../../shared/ui-components/ui-input/ui-input.component";
import {UiDropdownComponent} from "../../shared/ui-components/ui-dropdown/ui-dropdown.component";
import {UiAlertBoxComponent} from "../../shared/ui-components/ui-alert-box/ui-alert-box.component";



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
    SeaBattleFieldComponent,
    SeaBattleShipComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([
      GameInverseMatrixState,
    ]),
    HomeModule,
    MatIconModule,
    UiModalComponent,
    UiButtonComponent,
    UiInputComponent,
    UiDropdownComponent,
    UiAlertBoxComponent,
  ]
})
export class GamesModule { }
