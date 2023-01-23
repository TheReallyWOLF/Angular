import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public selectedNavigateLink: string = 'home-page';
  public readonly navigate = [
    {
      route: 'home-page',
      name: 'Главная'
    }, {
      route: 'services',
      name: 'Услуги'
    }
  ]
}
