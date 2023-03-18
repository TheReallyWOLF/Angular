import {ChangeDetectionStrategy, Component} from '@angular/core';

export interface INode {
  value: number;
  left?: INode;
  right?: INode;
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
  }];

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
}
