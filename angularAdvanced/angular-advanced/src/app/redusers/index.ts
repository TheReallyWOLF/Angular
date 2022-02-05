import {
  ActionReducerMap,
  MetaReducer
} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {countNode, countReducer, CountState} from "../lessons/ngrx/reducers/counter/counter.reducer";

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  // @ts-ignore
  [countNode]: countReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
