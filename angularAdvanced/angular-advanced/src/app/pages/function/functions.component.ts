/**
 * Модуль со скриптами (примерами алгоритмов) который наглядно выводит информацию о скорости выполнения функций
 * с возможностью увидеть код и сравнить данные с другими алгоритмами
 * */
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FunctionsComponent {
  public readonly buttons: {name: string, title:string}[] = [
    {
      name: 'algorithms',
      title: 'Алгоритмы'
    }, {
      name: 'examples',
      title: 'Примеры функций'
    }
  ]
  public active: string = 'algorithms';
}
