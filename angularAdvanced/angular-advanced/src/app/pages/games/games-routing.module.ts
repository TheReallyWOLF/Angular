import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';
import {GameLifeComponent} from "./game-life/game-life.component";
import {GamePresentationPageComponent} from "./game-presentation-page/game-presentation-page.component";
import {GameFieldComponent} from "./game-field/game-field.component";

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
        path: 'game-life-component',
        component: GameLifeComponent
      },{
        path: 'game-field',
        component: GameFieldComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
