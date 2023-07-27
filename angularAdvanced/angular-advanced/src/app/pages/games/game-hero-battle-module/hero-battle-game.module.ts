import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroBattleGameRoutingModule } from './hero-battle-game-routing.module';
import { HeroBattleGameComponent } from './hero-battle-game.component';
import {NgxsModule} from "@ngxs/store";
import {GameHeroBattleState} from "./game-hero-battle/state/game-hero-battle.state";
import {GameHeroOptionsState} from "./game-hero-battle-option/state/game-hero-options.state";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeModule} from "../../home/home.module";
import {MatIconModule} from "@angular/material/icon";
import {GameHeroBattleComponent} from "./game-hero-battle/game-hero-battle.component";
import {GameHeroBattleOptionComponent} from "./game-hero-battle-option/game-hero-battle-option.component";
import {ClickOutsideDirective} from "../../../shared/directive/globalDirective/click-outside.directive";
import {DirectiveAndPipeModule} from "../../directive-and-pipe/directive-and-pipe.module";
import { HeroSelectStepComponent } from './game-hero-battle-option/hero-select-step/hero-select-step.component';
import {GamesModule} from "../games.module";
import { HeroPerksStepComponent } from './game-hero-battle-option/hero-perks-step/hero-perks-step.component';
import { HeroStatsStepComponent } from './game-hero-battle-option/hero-stats-step/hero-stats-step.component';
import { HeroPeculiaritiesStepComponent } from './game-hero-battle-option/hero-peculiarities-step/hero-peculiarities-step.component';
import { GetHeroEffectStringPipe} from "../../../shared/pipes/get-hero-effect-string.pipe";
import {UiButtonComponent} from "../../../shared/ui-components/ui-button/ui-button.component";


@NgModule({
  declarations: [
    GameHeroBattleComponent,
    HeroBattleGameComponent,
    GameHeroBattleOptionComponent,
    ClickOutsideDirective,
    HeroSelectStepComponent,
    HeroPerksStepComponent,
    HeroStatsStepComponent,
    HeroPeculiaritiesStepComponent,
    GetHeroEffectStringPipe
  ],
  imports: [
    CommonModule,
    HeroBattleGameRoutingModule,
    NgxsModule.forFeature([
      GameHeroBattleState,
      GameHeroOptionsState
    ]),
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    MatIconModule,
    DirectiveAndPipeModule,
    GamesModule,
    UiButtonComponent,
  ]
})
export class HeroBattleGameModule { }
