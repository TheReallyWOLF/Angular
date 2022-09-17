import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Actions} from "./game-inverse-matrix.actions";


export interface GameOptions {
  field: number;
  dueRule: number;
  lifeRule: number;
}

export interface GameLifeStateModel {
  GameOptions: GameOptions;
}

@State<GameLifeStateModel>({
  name: 'ngxs_gameLife',
  defaults: {
    GameOptions: {
      field: 10,
      dueRule: 1,
      lifeRule: 0,
    }
  }
})

@Injectable()
export class GameInverseMatrixState {

  @Selector()
  static GameOptions$(state: GameLifeStateModel): GameOptions {
    return state.GameOptions;
  }

  @Action(Actions.gameValue)
  changeDeathRule(ctx: StateContext<GameLifeStateModel>, action: Actions.gameValue) {
    ctx.patchState({
      GameOptions: {...action.gameValue}
    });
  }
}
