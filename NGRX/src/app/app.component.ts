import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {CountState} from "./reduser/countReduser/count.reduser";
import {Observable} from "rxjs";
import {selectCount, selectUpdatedAt} from "./reduser/countReduser/count.selectors";
import {CountClearAction, CountDecreaseAction, CountIncreaseAction} from "./reduser/countReduser/count.actions";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public disableDecrease: Observable<boolean> = this.count$.pipe(map(count => count <= 0))
  public updateAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt))

  constructor(private store$: Store<CountState>) {
  }

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }

  decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }

  clear() {
    this.store$.dispatch(new CountClearAction());
  }
}
