import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'special-navigation-menu',
  templateUrl: './special-navigation-menu.component.html',
  styleUrls: ['./special-navigation-menu.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecialNavigationMenuComponent {
  public active: number = 0;
  public readonly menuItems: {name:string; icon:string}[] = [
    {
      name: 'Домой',
      icon: 'home_outline'
    }, {
      name: 'Профиль',
      icon: 'person'
    }, {
      name: 'Сообщения',
      icon: 'mail'
    }, {
      name: 'Фотографии',
      icon: 'portrait'
    }, {
      name: 'Настройки',
      icon: 'settings'
    }
  ]
}
