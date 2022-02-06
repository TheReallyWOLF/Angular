import { Injectable } from '@angular/core';
import {State, Action, StateContext, StateToken, Selector} from '@ngxs/store';

export namespace RootActions {
  export class AddRootItem {
    static readonly type = '[Root] Add item';
    constructor(readonly item: string) { }
  }
}

export interface RootStateModel {
  items: string[];
}

const defaults = {
  items: []
};

const ROOT_STATE_TOKEN = new StateToken<RootStateModel>('root');

@State<RootStateModel>({
  name: ROOT_STATE_TOKEN,
  defaults: {
    items: []
  }
})

@Injectable()
export class RootState {

  @Selector()
  static rootItems(state: RootStateModel): string[] {
    return state.items
  }

  @Action(RootActions.AddRootItem)
  addRootItem(ctx: StateContext<RootStateModel>, action: RootActions.AddRootItem) {
    const store = ctx.getState();
    ctx.patchState({
      items: [...store.items, action.item ]
    });
  }
}
