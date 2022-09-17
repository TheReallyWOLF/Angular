import {GameLifeOptions} from "./game-life.state";


export namespace Actions {

  export class GameLifeValue {
    static readonly type = '[NGRX::gameLife] gameLifeValue'
    constructor(readonly gameLifeValue: GameLifeOptions) {}
  }
}
