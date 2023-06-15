import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Actions, GameHeroOptionsState} from "../state/game-hero-options.state";
import {Observable} from "rxjs";
import {HeroOptions} from "../game-hero-battle-options.model";

@Component({
  selector: 'hero-select-step',
  templateUrl: './hero-select-step.component.html',
  styleUrls: ['./hero-select-step.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSelectStepComponent {

  @Select(GameHeroOptionsState.heroList$)
  readonly heroList$!: Observable<HeroOptions[]>;

  @Select(GameHeroOptionsState.getSelectedHero$)
  readonly getSelectedHero$!: Observable<HeroOptions>

  constructor(private store: Store) {}

  selectHero(hero: HeroOptions): void {
    this.store.dispatch(new Actions.SetSelectedHero(hero))
  }
}
