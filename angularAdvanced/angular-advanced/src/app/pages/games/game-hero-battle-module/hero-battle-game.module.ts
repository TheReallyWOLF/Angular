import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroBattleGameRoutingModule } from './hero-battle-game-routing.module';
import { HeroBattleGameComponent } from './hero-battle-game.component';
import {NgxsModule} from "@ngxs/store";
import {GameHeroBattleState} from "./game-hero-battle/state/game-hero-battle.state";
import {GameHeroOptionsState} from "./game-hero-battle-option/state/game-hero-options.state";
import {UiComponentsModule} from "../../../shared/ui-components/ui-components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeModule} from "../../home/home.module";
import {MatIconModule} from "@angular/material/icon";
import {GameHeroBattleComponent} from "./game-hero-battle/game-hero-battle.component";
import {GameHeroBattleOptionComponent} from "./game-hero-battle-option/game-hero-battle-option.component";
import {ClickOutsideDirective} from "../../../shared/directive/globalDirective/click-outside.directive";
import {DirectiveAndPipeModule} from "../../directive-and-pipe/directive-and-pipe.module";
import { HeroSelectStepComponent } from './game-hero-battle-option/hero-select-step/hero-select-step.component';


@NgModule({
  declarations: [
    GameHeroBattleComponent,
    HeroBattleGameComponent,
    GameHeroBattleOptionComponent,
    ClickOutsideDirective,
    HeroSelectStepComponent,
  ],
  imports: [
    CommonModule,
    HeroBattleGameRoutingModule,
    NgxsModule.forFeature([
      GameHeroBattleState,
      GameHeroOptionsState
    ]),
    UiComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    MatIconModule,
    DirectiveAndPipeModule,
  ]
})
export class HeroBattleGameModule { }
