import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";


export interface State {
  [name: string]: StateItem;
}

/**
 * StateItem - Описание
 * name - имя алгоритма
 * time - время выполнения в мс
 * count - число тиков - n при формуле -> O(n)
 * result - возращаемое значение
 * shuffle - признак перемешанного массива
 * successfulSearch - искомое значение переменной
 * */

export interface StateItem {
  name: string;
  time: number;
  count: number;
  result: string | number;
  shuffle?: boolean;
  successfulSearch: string;
}


@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlgorithmsComponent implements OnInit {
  public testSortArr: number[] = [];
  public testShuffleArr: number[] = [];
  public form: any;
  public open: string = '';
  public state: State = {
    linearSearchBuffer: {
      name: 'Линейный поиск  O(n)',
      time: 0,
      count: 0,
      result: '',
      successfulSearch: '-',
    },
    binarySearch: {
      name: 'Бинарный поиск  O(log(n))',
      time: 0,
      count: 0,
      result: '',
      successfulSearch: '-',
    },
    selectionSort: {
      name: 'Сортировка выбором  O(n²)',
      time: 0,
      count: 0,
      result: '',
      shuffle: true,
      successfulSearch: 'Сортировка массива',
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      length: [ 100, Validators.maxLength(8)],
    });
  }

  /**
   * Обертка с обработкой статистики
   * */

  algorithmWrapper(name: string): void {
    const stateItem: StateItem = this.state[name];
    const arrLen: number = this.form.get('length').value;
    // заданная длинна массива не равна текушему в памяти (создаем новый)
    if (arrLen !== this.testSortArr.length) {
      this.testSortArr = this.createArr(this.form.get('length').value);
    }
    // заданная длинна перемешанного массива не равна текушему в памяти (копируем и перемешиваем заного)
    if (this.state[name].shuffle && arrLen !== this.testShuffleArr.length) {
      this.testShuffleArr = this.shuffle(this.testSortArr);
    }
    // запускаем таймер
    const start: number = new Date().getTime();

    switch (name) {
      case 'linearSearchBuffer': this.linearSearch(this.testSortArr, name); break;
      case 'binarySearch': this.binarySearch(this.testSortArr, name); break;
      case 'selectionSort': this.selectionSort(this.testShuffleArr, name); break;
    }

    const end: number = new Date().getTime();
    stateItem.time = end - start;
  }

  /**
   * Линейный поиск
   * */

  linearSearch(arr: number[], name: string) {
    // генерация искомого числа
    const item = this.numberGenerate(name);
    // выполнение поиска (линейный)
    for (let i = 0; i < arr.length; i++) {
      this.state[name].count++
      if (arr[i] === item) {
        this.state[name].result = i;
        return;
      }
    }
    // Скрипт с подсчетом статистики при неудачном поиске
    this.unsuccessfulSearch(name);
  }

  /**
   * Бинарный поиск
   * */
  binarySearch(arr: number[], name: string) {
    // генерация искомого числа
    const item = this.numberGenerate(name);
    // выполнение поиска (бинарный)
    let start: number = 0;
    let end: number = arr.length;
    let middle: number;
    let found: boolean = false;
    let position: number = -1;

    while (!found && start <= end) {
      this.state[name].count++
      middle = Math.floor((start + end) / 2);
      if (arr[middle] === item) {
        found = true;
        position = middle;
        this.state[name].result = position;
        return;
      }
      item < arr[middle] ? end = middle - 1 : start = middle + 1;
      this.state[name].result = position;
    }
    // Скрипт с подсчетом статистики при неудачном поиске
    this.unsuccessfulSearch(name);
  }

  /**
   * Сортировка выбором O(n²)
   * */

  selectionSort(arr: number[], name: string): void {
    let array = [...arr];
    for (let i = 0; i < array.length; i++) {
      this.state[name].count++
      let indexMin = i;
      for (let j = i + 1; j < array.length; j++) {
        this.state[name].count++
        if (array[j] < array[indexMin]) {
          indexMin = j;
        }
      }
      [array[i], array[indexMin]] = [array[indexMin], array[i]]
    }
    this.state[name].result = 'Отсортировано !';
  }

  /**
   * Генерация искомого числа
   * */

  numberGenerate(name: string): number {
    const item: number = Math.floor(Math.random()*this.form.get('length').value) + 1;
    // увеличение счетчика цикла алгоритма
    this.state[name].count++;
    this.state[name].successfulSearch = item + '';
    this.state[name].count++;
    return item;
  }

  /**
   * Создаем отфильтрованный по возрастанию тестовый массив
   * */

  createArr(length: number): number[] {
    let arr = [];
    for(let i = 0; i < length; i++) {
      arr.push(i);
    }
    return arr;
  }

  /**
   * Метод для перемешивания упорядоченного массива
   * */

  shuffle(arr: number[]): number[] {
    const cloneArr = arr.slice(0);
    for (let i = cloneArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cloneArr[i], cloneArr[j]] = [cloneArr[j], cloneArr[i]];
    }
    return cloneArr;
  }

  /**
   * Скрипт с подсчетом статистики при неудачном поиске
   * */

  unsuccessfulSearch(name: string) {
    this.state[name].count++;
    this.state[name].result = 'null';
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
      this.state[item] = { ...this.state[item], result: '', count: 0, time: 0,};
    }
  }

}
