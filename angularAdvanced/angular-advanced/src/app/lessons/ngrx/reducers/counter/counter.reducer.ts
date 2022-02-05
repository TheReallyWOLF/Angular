import {CounterActions, counterActionsType} from "./counter.actions";

export const countNode = "count";

export interface CountState {
  count: number;
}

const initialState = {
  count: 0,
}

export const countReducer = (state = initialState, action: CounterActions) => {
  switch (action.type) {
    case counterActionsType.increase:
      return {
        ...state,
        count: state.count + 1
      };
    case counterActionsType.decrease:
      return {
        ...state,
        count: state.count - 1
      }
    case counterActionsType.clear:
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }
}
