import {Component, OnInit} from '@angular/core';
import {Actions, CounterState} from "./counter.state";
import {Observable} from "rxjs";
import {Select, Store} from '@ngxs/store';

@Component({
  selector: 'app-counter-ngxs',
  templateUrl: './counter-ngxs.component.html',
  styleUrls: ['./counter-ngxs.component.sass']
})
export class CounterNgxsComponent {

  @Select(CounterState.count$)
  readonly count$!: Observable<number>;

  @Select(CounterState.changeDate$)
  readonly changeDate$!: Observable<number>;

  constructor(private store: Store) {
    this.store.dispatch(new Actions.GetDate())
  }

  increment(): void {
    this.store.dispatch(new Actions.Increment())
  }

  decrement(): void {
    this.store.dispatch(new Actions.Decrement())
  }

  clear(): void {
    this.store.dispatch(new Actions.Clear())
  }
}
