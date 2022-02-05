import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {CountState} from "../../reducers/counter/counter.reducer";
import {Observable} from "rxjs";
import {selectCount} from "../../reducers/counter/counter.selectors";
import {CounterIncreaseActions, CounterDecreaseActions, CounterClearActions} from "../../reducers/counter/counter.actions";

@Component({
  selector: 'app-counter-ngrx',
  templateUrl: './counter-ngrx.component.html',
  styleUrls: ['./counter-ngrx.component.sass']
})
export class CounterNgrxComponent implements OnInit {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));

  constructor(private store$: Store<CountState>) { }

  ngOnInit(): void {
  }

  increase() {
    this.store$.dispatch(new CounterIncreaseActions());
  }

  decrease() {
    this.store$.dispatch(new CounterDecreaseActions());
  }

  clear() {
    this.store$.dispatch(new CounterClearActions());
  }

}
