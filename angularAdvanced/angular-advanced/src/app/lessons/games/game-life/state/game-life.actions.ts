export namespace Actions {

  export class DeathRule {
    static readonly type = '[NGRX::gameLife] deathRule'
    constructor(readonly deathRule: number) {}
  }
}
