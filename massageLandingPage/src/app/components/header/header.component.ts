import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public selectedBlockId: string = 'main';
  public readonly navigate = [
    {
      id: 'main',
      name: 'Главная'
    }, {
      id: 'about-me',
      name: 'Немного обо мне'
    }, {
      id: 'career-path',
      name: 'Профессиональный путь'
    }, {
      id: 'education',
      name: 'Образование и сертификаты'
    }, {
      id: 'massage-types',
      name: 'Виды массажа'
    }
  ];

  public goToElementById(id: string): void {
    this.selectedBlockId = id;
    const targetElement = document.getElementById(id);
    targetElement?.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
}
