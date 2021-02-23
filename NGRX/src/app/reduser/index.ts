import { ActionReducer} from "@ngrx/store";
import { ActionReducerMap } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store";
import { createSelector } from "@ngrx/store";
import { MetaReducer } from "@ngrx/store";

import { environment } from "../../environments/environment";
import {countNode, countReducer, CountState} from "./countReduser/count.reduser";

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  [countNode] : countReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
