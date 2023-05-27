import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {takeUntilDestroyed} from "../../../shared/rxjsPipe/takeUntilDestroyed";
import {debounceTime} from "rxjs/operators";

export interface INode {
  value: number;
  left?: INode;
  right?: INode;
}

export interface ExamplesValueTree {
  value: number;
  children?: ExamplesValueTree[];
}

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent {
  public readonly cards = [{
    title: 'Уникальная сортировка',
    subTitle: 'Сортирует числовой массив и удаляет повторяющиеся элементы. Пример: Вход - [4,2,3,4,1], Выход - [1,2,3,4]',
    script: this.sortedUniq
  },{
    title: 'Посчитать количество каждого символа',
    subTitle: 'Считает количество повторений в строке для каждого символа. Пример: Вход - \'aaabbbccc\' Выход -  {a:3, b:3, c:3}',
    script: this.characters
  },{
    title: 'Посчитать сумму всех value в дереве',
    subTitle: 'Считает сумму всех value в дереве INode с неизвестным количеством вложенностей где<br>INode: {<br>&nbsp;&nbsp;&nbsp;value: number;<br>&nbsp;&nbsp;&nbsp;left?: INode;<br>&nbsp;&nbsp;&nbsp;right?: INode;<br>}',
    script: this.sumTree
  },{
    title: 'Факториал рекурсией',
    subTitle: 'Высчитывает факториал рекурсией',
    script: this.recursionFactorial
  },{
    title: 'Факториал циклом',
    subTitle: 'Высчитывает факториал циклом и не забивает стек',
    script: this.cycleFactorial
  },{
    title: 'Палиндром рекурсией',
    subTitle: 'Проверяет палиндром рекурсией',
    script: this.recursionIsPalindrome
  },{
    title: 'Палиндром циклом',
    subTitle: 'Проверяет палиндром циклом и не забивает стек',
    script: this.cycleIsPalindrome
  },{
    title: 'Вхождение строки',
    subTitle: 'Проверка входят ли символы word в состав letters',
    script: this.canConstructWord
  },{
    title: 'Свой debounce',
    subTitle: 'Запускает кол-бек функцию с задержкой',
    script: this.customDebounce
  },{
    title: 'Выбрать все value из дерева',
    subTitle: 'Выбирает все value и возращает массив из дерева с любой вложеностью работает стеком а не рекурсией',
    script: this.getTreeValueFromStack
  },{
    title: 'Полифил на Debounce',
    subTitle: 'Самописный аналог debounce функции для работы с нативным TS',
    script: this.debouncePolyfill
  },{
    title: 'Полифил на Throttle',
    subTitle: 'Throttle пропускает вызов функции если прошлый вызоы еще не завершен (в отличии от дебаунс запускает ф-ю callback сразу)',
    script: this.customThrottle
  },{
    title: 'Полифил на bind',
    subTitle: 'полифил bind с расширением глобального прототипа через apply (так не надо делать)',
    script: this.setBindPolyfill
  }];

  public searchCards = [...this.cards];

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.createForm();
    this.onChangeSearchFieldSubscribe();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      search: [ '',
        [Validators.minLength(3)]
      ],
    });
  }

  onChangeSearchFieldSubscribe(): void {
    this.form.controls['search'].valueChanges
      .pipe(
        takeUntilDestroyed(this),
        debounceTime(500))
      .subscribe(value => this.onSearch(value));
  }

  onSearch(value: string) {
    if (this.form.valid) {
      this.searchCards = this.cards.filter(card => {
        const searchString = (card.subTitle + ' ' + card.title).toLowerCase();
        const searchValue = value.toLowerCase();

        return searchString.indexOf(searchValue) !== -1 ? card : void 0
      });
      this.changeDetectorRef.markForCheck();
    }
  }

//-----------------------------------------------------ФУНКЦИИ-----------------------------------------------------//

  characters(str: string) {
    return str.split('').reduce((acc: {[name: string]: number}, char) => {
      acc[char] ? acc[char]++ : acc[char] = 1
      return acc
    }, {})
  }

  sortedUniq(array: number[]): number[] {
    const sortArr = array.sort((a:number, b:number) => a-b)
    const setArr = new Set(sortArr);

    return Array.from(setArr);
  }

  sumTree(tree: INode): number {
    return tree.value +
      (tree.left ? this.sumTree(tree.left) : 0) +
      (tree.right ? this.sumTree(tree.right) : 0);
  }

  /**
   * Факториал рекурсией
   * */

  recursionFactorial(number: number): number {
    if (number <= 1) return  1;
    return this.recursionFactorial(number - 1) * number;
  }

  /**
   * Факториал циклом
   * */

  cycleFactorial(number: number): number {
    if (number <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result*=i;
    }
    return result;
  }

  /**
   * Палиндром циклом
   * */

  cycleIsPalindrome(word: string): boolean {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] != word[word.length - 1 - i]) {
        return false
      }
    }
    return true;
  }

  /**
   * Палиндром рекурсией
   * */

  recursionIsPalindrome(word: string, increment: number = 0): boolean {
    if (Math.floor(word.length / 2) === increment) return true;
    if (word[increment] !== word[word.length - 1 - increment]) return false;
    return this.recursionIsPalindrome(word, increment + 1)
  }

  /**
   * Проверка входят ли символы word в состав letters
   * */

  canConstructWord(word: string, letters: string): boolean {
    if (word.length > letters.length) return false;
    if (word === letters) return true;

    // очищаем строки
    let currentLetters = letters.toLowerCase().replace(/ /g,'');
    const currentWord = word.toLowerCase().replace(/ /g,'');
    const wordArr = currentWord.split('');

    // собственно сам скрипт ¯\_(ツ)_/¯
    for (let i = 0; i < wordArr.length; i++) {
      const index = currentLetters.indexOf(wordArr[i]);

      if (index === -1) return false;

    // исключаем кейсы с дубликатами (из строки 'abc' нельзя составить 'aabbcc')
      currentLetters = currentLetters.substr(0, index) +  currentLetters.substr(index + 1);
    }

    return true;
  }

  /**
   *  Свой (полифил на ts) Throttle
   *  throttle() решает эту проблему, «пропуская» некоторые вызовы функции-обработчика. Она будет принимать функцию, которую необходимо «попропускать».
   * */

  customThrottle(callback: Function, delay: number): Function {
    // таймер сохраняется в качестве стейта функции при 1 запуске

    let timer: number | null;

    return <T>(...args: T[]) => {

      if (timer) return;

      timer = window.setTimeout(() => {
        callback(...args);

        // По окончании очищаем таймер:
        timer && window.clearTimeout(timer);
        timer = null;
      }, delay);
    }
  }

  /**
   * Кастомный дебаунс
   * */

  // const fetching = customDebounce(foo, 300)
  // fetching(1),  fetching(2),  fetching(3)
  // foo - функция которую надо запустить после задержки

  customDebounce(callback: Function, delay: number): Function {
    // таймер сохраняется в качестве стейта функции при 1 запуске

    let timer: number | null = null;

    return <T>(...args: T[]) => {

      if (timer) window.clearTimeout(timer);

      timer = window.setTimeout(() => {
        callback(...args)
      }, delay);
    }
  }

  /**
   * Свой (полифил на ts) Debounce
   * */

  debouncePolyfill<Params extends unknown[]>(callback: (...args: Params) => unknown, timeout: number,): (...args: Params) => void {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: Params) => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        callback(...args);
      }, timeout);
    }
  }

  /**
   * Выбрать все value с дерева (решение стеком 'очередью')
   * */

  treeValueExample: ExamplesValueTree = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          {value: 3}
        ]
      }, {
        value: 4,
        children: [
          {value: 5},
          {value: 6}
        ]
      },
    ]
  }

  getTreeValueFromStack(tree: ExamplesValueTree): number[] {
    const stack: ExamplesValueTree[] = [tree];
    const result: number[] = [];

    while (stack.length > 0) {
      const node = stack.pop();

      if (node?.value !== undefined) {
        result.push(node.value);
      }

      if (node?.children?.length) {
        stack.push(...node.children);
      }
    }

    return result;
  }

  /**
   * Свой (полифил на ts) Bind foo.myBind(this, 1, 2, 3)
   * */

  setBindPolyfill(): void {
    // @ts-ignore
    Function.prototype.myBind = function (obj: unknown, ...args: unknown[]): Function {
      let func = this;

      return function (...newArgs: unknown[]) {
        func.apply(obj, [...args, ...newArgs]);
      };
    };
  }
}
