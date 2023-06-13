import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBattleGameComponent } from './hero-battle-game.component';
import {GameHeroBattleComponent} from "./game-hero-battle/game-hero-battle.component";
import {IsInternalTransitionGuard} from "../shared/guards/is-internal-transition-guard.guard";
import {GameHeroBattleOptionComponent} from "./game-hero-battle-option/game-hero-battle-option.component";

const routes: Routes = [
  { path: '',
    component: HeroBattleGameComponent,
    children: [
      {
        path: '',
        redirectTo: 'hero-battle-options'
      }, {
        path: 'hero-battle-options',
        component: GameHeroBattleOptionComponent,
      }, {
        path: 'hero-battle-game',
        component: GameHeroBattleComponent,
        canActivate: [IsInternalTransitionGuard],
        data: {guardUrl: '/games/hero-battle/hero-battle-options'}
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroBattleGameRoutingModule { }
