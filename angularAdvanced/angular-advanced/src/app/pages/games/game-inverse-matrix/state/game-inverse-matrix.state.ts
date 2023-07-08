import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Actions} from "./game-inverse-matrix.actions";
import {GameRule} from "../game-inverse-matrix.component";


export interface GameOptions {
  field: number;
  gameRule: string;
  deathOverpopulation: number;
  deathLoneliness: number;
  newLifeRule: number
}

export interface GameLifeStateModel {
  GameOptions: GameOptions;
}

@State<GameLifeStateModel>({
  name: 'ngxs_gameLife',
  defaults: {
    GameOptions: {
      field: 10,
      gameRule: GameRule.INVERTMATRIX,
      deathOverpopulation: 3,
      deathLoneliness: 1,
      newLifeRule: 3,
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
