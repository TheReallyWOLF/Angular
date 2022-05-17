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
  private length: number = 1000000;
  public open: string = '';
  public state: State = {
    linearSearchBuffer: {
      result: '',
      count: 0,
      time: 0,
    }
  }

  algorithmWrapper(name: string): void {
    const start = new Date().getTime();
    const stateItem: StateItem = this.state[name];
    const testArr: number[] = this.createArr(this.length);

    switch (name) {
      case 'linearSearchBuffer': this.linearSearch(testArr, name); break;
    }

    const end = new Date().getTime();
    stateItem.time = end - start;
  }

  /**
   * Линейный поиск
   * */

  linearSearch(arr: number[], name: string) {
    // генерация искомого числа
    const item: number = Math.floor(Math.random()*this.length);
    // увеличение счетчика цикла алгоритма
    this.state[name].count++;
    // выполнение поиска (линейный)
    for (let i = 0; i < arr.length; i++) {
      this.state[name].count++
      if (arr[i] === item) {
        this.state[name].result = i;
        return;
      }
    }
    this.state[name].count++;
    this.state[name].result = 'null';
  }

  /**
   * Создаем массив
   * */

  createArr(length: number): number[] {
    let arr = [];
    for(let i = 0; i < length; i++) {
      arr.push(i);
    }
    return arr;
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
