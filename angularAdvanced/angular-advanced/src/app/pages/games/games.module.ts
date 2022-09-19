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


@NgModule({
  declarations: [
    GamesComponent,
    GameInverseMatrixComponent,
    GamePresentationPageComponent,
    GameFieldComponent,
    GameTicTacToeComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    UiComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([
      GameInverseMatrixState
    ]),
    HomeModule,
    MatIconModule,
  ]
})
export class GamesModule { }
