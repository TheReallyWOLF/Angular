import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import {GameInverseMatrixComponent} from "./game-inverse-matrix/game-inverse-matrix.component";
import {GamePresentationPageComponent} from "./game-presentation-page/game-presentation-page.component";
import {GameFieldComponent} from "./game-field/game-field.component";
import {GameTicTacToeComponent} from "./game-tic-tac-toe/game-tic-tac-toe.component";

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
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
