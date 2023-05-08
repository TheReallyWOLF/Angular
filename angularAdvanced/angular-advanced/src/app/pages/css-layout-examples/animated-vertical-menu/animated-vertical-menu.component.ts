import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'animated-vertical-menu',
  templateUrl: './animated-vertical-menu.component.html',
  styleUrls: ['./animated-vertical-menu.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimatedVerticalMenuComponent {
  public active: number = 0;
  public readonly menuItems: {name:string; icon:string; color: string}[] = [
    {
      name: 'Домой',
      icon: 'home_outline',
      color: '#f53b57'
    }, {
      name: 'Профиль',
      icon: 'person',
      color: '#3c40c6'
    }, {
      name: 'Сообщения',
      icon: 'mail',
      color: '#05c46b'
    }, {
      name: 'Фотографии',
      icon: 'portrait',
      color: '#0fbcf9'
    }, {
      name: 'Настройки',
      icon: 'settings',
      color: '#ffa801'
    }
  ]
}
