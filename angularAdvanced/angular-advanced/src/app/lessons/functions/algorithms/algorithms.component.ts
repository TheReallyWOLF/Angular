import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";


export interface State {
  [name: string]: StateItem;
}

export interface StateItem {
  name: string;
  time: number;
  count: number;
  result: string | number;
  successfulSearch: string;
}


@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.sass']
})

export class AlgorithmsComponent implements OnInit {
  public form: any;
  public open: string = '';
  public state: State = {
    linearSearchBuffer: {
      name: 'Линейный поиск',
      time: 0,
      count: 0,
      result: '',
      successfulSearch: '-',
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      length: [ 100, Validators.maxLength(9)],
    })
  }

  /**
   * Обертка с обработкой статистики
   * */

  algorithmWrapper(name: string): void {
    const start = new Date().getTime();
    const stateItem: StateItem = this.state[name];
    const testArr: number[] = this.createArr(this.form.get('length').value);

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
    const item: number = Math.floor(Math.random()*this.form.get('length').value);
    this.state[name].successfulSearch = item + '';
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
   * Создаем тестовый массив
   * */

  createArr(length: number): number[] {
    let arr = [];
    for(let i = 0; i < length; i++) {
      arr.push(i);
    }
    return arr;
  }

  openCard(algorithmName: string): void {
    this.open === algorithmName ? this.open = '' : this.open = algorithmName;
  }

  clear(metric?: string): void {
    metric ?
      this.state[metric] = { ...this.state[metric], result: '', count: 0, time: 0,} :
      this.clearAll();
  }

  clearAll(): void {
    for (let item in this.state) {
      this.state[item] = { ...this.state[item], result: '-', count: 0, time: 0,};
    }
  }

}
