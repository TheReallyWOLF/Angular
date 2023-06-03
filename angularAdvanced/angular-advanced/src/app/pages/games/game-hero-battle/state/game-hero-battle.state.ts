import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";

export namespace Actions {

  export class GetHeroState {
    static readonly type = '[NGRX::game-battle] getHeroState'
    constructor(readonly value: number) {

    }
  }

}

export interface GameHeroBattleStateModel {
  hero: any
}

@State<GameHeroBattleStateModel>({
  name: 'ngrx_gameBattle',
  defaults: {
    hero: {
      a: 1
    }
  }
})

@Injectable()
export class GameHeroBattleState {

  @Selector()
  static hero$(state: GameHeroBattleStateModel): number {
    return state.hero;
  }

  @Action(Actions.GetHeroState)
  increment(ctx: StateContext<GameHeroBattleStateModel>, action: Actions.GetHeroState) {
    const state = ctx.getState();
    ctx.patchState({
      hero: {
        a: state.hero.a + action.value
      }
    })
  }

}
