import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() theme!: string;
  @Output() changeTheme = new EventEmitter<string>();

  public selectedBlockId: string = 'main';
  public readonly navigate = [
    {
      id: 'main',
      name: 'Главная'
    }, {
      id: 'about-me',
      name: 'Обо мне'
    }, {
      id: 'career-path',
      name: 'Профессиональный путь'
    }, {
      id: 'education',
      name: 'Образование и сертификаты'
    }, {
      id: 'massage-types',
      name: 'Виды массажа'
    }, {
      id: 'indications-massage',
      name: 'Показания'
    }, {
      id: 'massage-contraindications',
      name: 'Противопоказания'
    }, {
      id: 'contacts',
      name: 'Контакты'
    }
  ];

  public changeThemeEmit(theme: string): void {
    this.changeTheme.emit(theme);
  }

  public goToElementById(id: string): void {
    this.selectedBlockId = id;

    const targetElement = document.getElementById(id);
    targetElement?.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
}
