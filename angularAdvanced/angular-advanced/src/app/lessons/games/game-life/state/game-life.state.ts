import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Actions} from "./game-life.actions";



export interface GameLifeStateModel {
  deathRule: number;
}

@State<GameLifeStateModel>({
  name: 'ngxs_gameLife',
  defaults: {
    deathRule: 10
  }
})

@Injectable()
export class GameLifeState {

  @Selector()
  static deathRule$(state: GameLifeStateModel): number {
    return state.deathRule;
  }

  @Action(Actions.DeathRule)
  changeDeathRule(ctx: StateContext<GameLifeStateModel>, action: Actions.DeathRule) {
    ctx.patchState({
      deathRule: action.deathRule
    });
  }
}
