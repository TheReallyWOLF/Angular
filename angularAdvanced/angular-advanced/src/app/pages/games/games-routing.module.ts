import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import {GameInverseMatrixComponent} from "./game-inverse-matrix/game-inverse-matrix.component";
import {GamePresentationPageComponent} from "./game-presentation-page/game-presentation-page.component";
import {GameFieldComponent} from "./game-field/game-field.component";
import {GameTicTacToeComponent} from "./game-tic-tac-toe/game-tic-tac-toe.component";
import {GameSeaBattleComponent} from "./game-sea-battle/game-sea-battle.component";
import {MemoryGameComponent} from "./memory-game/memory-game.component";
import {IsInternalTransitionGuard} from "./shared/guards/is-internal-transition-guard.guard";

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: '',
        redirectTo: 'game-presentation-page',
        pathMatch: 'prefix',
      },{
        path: 'game-presentation-page',
        component: GamePresentationPageComponent
      },{
        path: 'game-recursive-matrix',
        component: GameInverseMatrixComponent
      },{
        path: 'game-field',
        component: GameFieldComponent,
        canActivate: [IsInternalTransitionGuard],
        data: {guardUrl: '/games/game-recursive-matrix'}
      },{
        path: 'game-tic-tac-toe',
        component: GameTicTacToeComponent
      },{
        path: 'game-sea-​​battle',
        component: GameSeaBattleComponent
      },{
        path: 'memory-game',
        component: MemoryGameComponent,
      },{
        path: 'hero-battle',
        loadChildren: () => import('./game-hero-battle-module/hero-battle-game.module').then(m => m.HeroBattleGameModule)
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
