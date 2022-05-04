import {Component} from '@angular/core';


export interface State {
  [name: string]: StateItem;
}

export interface StateItem {
  result: string | number;
  count: number;
  time: number;
}


@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.sass']
})

export class AlgorithmsComponent  {
  public state: State = {
    linearSearchBuffer: {
      result: '',
      count: 0,
      time: 0,
    }
  }

  linearSearch(): void {
    const start = new Date().getTime();
    let linearSearch = this.state.linearSearchBuffer;
    linearSearch.count++;
    linearSearch.result = 'результат выполнения';
    const end = new Date().getTime();
    linearSearch.time = end - start
  }

  clear(metric?: string): void {
    const clearObj: StateItem = {result: '', count: 0, time: 0,};
    metric ? this.state[metric] = clearObj : this.clearAll();
  }

  clearAll(): void {
    for (let item in this.state) {
      this.state[item] = {result: '-', count: 0, time: 0,};
    }
  }

}
