import { Component } from '@angular/core';


@Component({
  selector: 'app-css-layout-examples',
  templateUrl: './css-layout-examples.component.html',
  styleUrls: ['./css-layout-examples.component.sass']
})
export class CssLayoutExamplesComponent {
  public readonly buttons = [
    {
      route: 'three-dimensional-menu',
      name: '3D меню'
    }, {
      route: 'glowing-button-hover-effects',
      name: 'Яркий ховер эффект для кнопки'
    }, {
      route: 'special-navigation-menu',
      name: 'Интересное меню навигаци'
    }
  ]
}
