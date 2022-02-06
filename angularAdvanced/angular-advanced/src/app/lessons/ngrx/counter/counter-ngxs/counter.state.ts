import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {CounterService} from "./counter.service";
import {tap} from "rxjs/operators";

export namespace Actions {

  export class Increment {
    static readonly type = '[NGRX::counter] increment'

    constructor() {
    }
  }

  export class Decrement {
    static readonly type = '[NGRX::counter] decrement'

    constructor() {
    }
  }

  export class Clear {
    static readonly type = '[NGRX::counter] clear'

    constructor() {
    }
  }

  export class GetDate {
    static readonly type = '[NGRX::counter] getDate'

    constructor() {
    }
  }

}

export interface CounterModel {
  count: number;
  changeDate: number;
}

@State<CounterModel>({
  name: 'ngrx_counter',
  defaults: {
    count: 0,
    changeDate: 0
  }
})

@Injectable()
export class CounterState {

  @Selector()
  static count$(state: CounterModel): number {
    return state.count;
  }

  @Selector()
  static changeDate$(state: CounterModel): number {
    return state.changeDate;
  }

  constructor(private countBackend: CounterService) {
  }

  @Action(Actions.Increment)
  increment(ctx: StateContext<CounterModel>, action: Actions.Increment) {
    const state = ctx.getState();
    ctx.patchState({
      count: state.count + 1
    })
    ctx.dispatch(new Actions.GetDate());
  }

  @Action(Actions.Decrement)
  decrement(ctx: StateContext<CounterModel>, action: Actions.Increment) {
    const state = ctx.getState();
    ctx.patchState({
      count: state.count - 1
    })
    ctx.dispatch(new Actions.GetDate());
  }

  @Action(Actions.Clear)
  clear(ctx: StateContext<CounterModel>, action: Actions.Increment) {
    const state = ctx.getState();
    ctx.patchState({
      count: 0
    })
    ctx.dispatch(new Actions.GetDate());
  }

  @Action(Actions.GetDate)
  getDate(ctx: StateContext<CounterModel>, action: Actions.GetDate) {
    return this.countBackend.getCounterDate().pipe(
      tap((res) => {
        ctx.patchState({
          changeDate: res
        })
      })
    )
  }

}
