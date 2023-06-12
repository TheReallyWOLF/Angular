import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {HeroBattleOptionsState, HeroOptions} from "../game-hero-battle-options.model";

export namespace Actions {

  export class SetSelectedHero {
    static readonly type = '[NGRX::game-options-battle] SetSelectedHero'
    constructor(readonly hero: HeroOptions) {}
  }
}

@State<HeroBattleOptionsState>({
  name: 'ngrx_gameOptionsBattle',
  defaults: {
    selectedHero: {
      type: 'воин'
    },
    heroesList: [{
      type: 'воин'
    },{
      type: 'маг'
    }]
  }
})

@Injectable()
export class GameHeroOptionsState {

  @Selector()
  static heroList$(state: HeroBattleOptionsState): HeroOptions[] {
    return state.heroesList;
  }

  @Action(Actions.SetSelectedHero)
  increment(ctx: StateContext<HeroBattleOptionsState>, action: Actions.SetSelectedHero) {
    ctx.patchState({
      selectedHero: action.hero
    })
  }
}
