import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-async-pipes',
  templateUrl: './async-pipes.component.html',
  styleUrls: ['./async-pipes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipesComponent {

  dataFromServer: Promise<string> | null = null;
  resolvePromise!: Function;
  fail!: Function;

  counter: number = 0;
  time!: Observable<number>;

  constructor() {
    this.dataFromServer = new Promise<string>(((resolve, reject) => {
      this.resolvePromise = resolve;
      this.fail = reject;
    }))
  }

  getData() {
    setTimeout(() => {
      this.resolvePromise('Date from server');
    }, 1000);
  }

  start() {
    this.time = new Observable<number>((observer) => {
      setInterval(() => {
        observer.next(this.counter++);
      }, 1000);
    })
  }

}
