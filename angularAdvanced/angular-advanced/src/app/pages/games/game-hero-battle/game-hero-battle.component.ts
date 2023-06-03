import {ChangeDetectionStrategy, Component} from '@angular/core';
import { Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {GameHeroBattleState, Actions} from "./state/game-hero-battle.state";

@Component({
  selector: 'game-hero-battle',
  templateUrl: './game-hero-battle.component.html',
  styleUrls: ['./game-hero-battle.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameHeroBattleComponent {

  @Select(GameHeroBattleState.hero$)
  readonly hero$!: Observable<any>;

  constructor(private store: Store) {}

  getHero() {
    this.store.dispatch(new Actions.GetHeroState(3))
  }

}
