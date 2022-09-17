import {GameOptions} from "./game-inverse-matrix.state";


export namespace Actions {

  export class gameValue {
    static readonly type = '[NGRX::gameValue] gameValue'
    constructor(readonly gameValue: GameOptions) {}
  }
}
