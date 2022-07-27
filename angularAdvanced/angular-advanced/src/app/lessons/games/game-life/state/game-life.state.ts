import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Actions} from "./game-life.actions";


export interface GameLifeOptions {
  field: number;
  dueRule: number;
  lifeRule: number;
}

export interface GameLifeStateModel {
  gameLifeOptions: GameLifeOptions;
}

@State<GameLifeStateModel>({
  name: 'ngxs_gameLife',
  defaults: {
    gameLifeOptions: {
      field: 10,
      dueRule: 1,
      lifeRule: 0,
    }
  }
})

@Injectable()
export class GameLifeState {

  @Selector()
  static gameLifeOptions$(state: GameLifeStateModel): GameLifeOptions {
    return state.gameLifeOptions;
  }

  @Action(Actions.GameLifeValue)
  changeDeathRule(ctx: StateContext<GameLifeStateModel>, action: Actions.GameLifeValue) {
    ctx.patchState({
      gameLifeOptions: {...action.gameLifeValue}
    });
  }
}
