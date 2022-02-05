import {Action} from "@ngrx/store";

export enum counterActionsType {
  increase = '[COUNTER] increase',
  decrease = '[COUNTER] decrease',
  clear = '[COUNTER] clear',
}

export class CounterIncreaseActions implements Action {
  readonly type = counterActionsType.increase
}

export class CounterDecreaseActions implements Action {
  readonly type = counterActionsType.decrease
}

export class CounterClearActions implements Action {
  readonly type = counterActionsType.clear
}

export type CounterActions = CounterIncreaseActions | CounterDecreaseActions | CounterClearActions;
