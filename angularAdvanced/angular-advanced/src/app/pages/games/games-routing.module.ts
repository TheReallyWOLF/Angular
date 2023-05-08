import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import {GameInverseMatrixComponent} from "./game-inverse-matrix/game-inverse-matrix.component";
import {GamePresentationPageComponent} from "./game-presentation-page/game-presentation-page.component";
import {GameFieldComponent} from "./game-field/game-field.component";
import {GameTicTacToeComponent} from "./game-tic-tac-toe/game-tic-tac-toe.component";
import {GameSeaBattleComponent} from "./game-sea-battle/game-sea-battle.component";
import {MemoryGameComponent} from "./memory-game/memory-game.component";

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: '',
        redirectTo: 'game-presentation-page'
      },{
        path: 'game-presentation-page',
        component: GamePresentationPageComponent
      },{
        path: 'game-recursive-matrix',
        component: GameInverseMatrixComponent
      },{
        path: 'game-field',
        component: GameFieldComponent
      },{
        path: 'game-tic-tac-toe',
        component: GameTicTacToeComponent
      },{
        path: 'game-sea-​​battle',
        component: GameSeaBattleComponent
      },{
        path: 'memory-game',
        component: MemoryGameComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
