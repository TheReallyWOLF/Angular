import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'three-dimensional-menu',
  templateUrl: './three-dimensional-menu.component.html',
  styleUrls: ['./three-dimensional-menu.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeDimensionalMenuComponent{
  public readonly menuList: string[] = [
    'Главная',
    'О нас',
    'Отзывы',
    'Карта',
    'Цены',
    'Наши партнеры',
    'Контакты'
  ]
}
