import { Component } from '@angular/core';

@Component({
  selector: 'animated-vertical-menu',
  templateUrl: './animated-vertical-menu.component.html',
  styleUrls: ['./animated-vertical-menu.component.sass']
})
export class AnimatedVerticalMenuComponent {
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
