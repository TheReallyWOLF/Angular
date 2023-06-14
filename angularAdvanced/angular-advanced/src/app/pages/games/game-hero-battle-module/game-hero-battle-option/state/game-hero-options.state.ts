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
    isGetReady: false,
    selectedHero: {
      id: 1,
      type: 'воин',
      description: 'воин такой воин'
    },
    heroesList: [{
      id: 1,
      type: 'воин',
      description: 'воин такой воин'
    },{
      id: 2,
      type: 'маг',
      description: 'маг такой маг'
    }]
  }
})

@Injectable()
export class GameHeroOptionsState {

  @Selector()
  static isGetReady$(state: HeroBattleOptionsState): boolean {
    return state.isGetReady;
  }

  @Selector()
  static getSelectedHero$(state: HeroBattleOptionsState): HeroOptions {
    return state.selectedHero;
  }

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
