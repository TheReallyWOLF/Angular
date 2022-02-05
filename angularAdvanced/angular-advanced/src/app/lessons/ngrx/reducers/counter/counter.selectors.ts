import {createFeatureSelector, createSelector} from "@ngrx/store";
import {countNode, CountState} from "./counter.reducer";

export const selectCountFeature = createFeatureSelector<CountState>(countNode);

export const selectCount = createSelector(
  selectCountFeature,
  (state: CountState): number => state.count
)
