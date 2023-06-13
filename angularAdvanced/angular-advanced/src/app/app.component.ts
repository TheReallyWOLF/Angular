import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {MainMenu} from "./app.models";
import {UiDropdownService} from "./shared/ui-components/ui-dropdown/ui-dropdown.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public readonly mainMenu: MainMenu[] = [
    {
      title: 'Домой',
      src: ''
    }, {
      title: 'Развлечения с базовым синтаксисом',
      src: 'basic-syntax'
    }, {
      title: 'Кастомные директивы и пайпы',
      src: 'directive-and-pipe'
    }, {
      title: 'Работа с формами',
      src: 'form-advanced'
    }, {
      title: 'Работа с NGXS',
      src: 'ngxs'
    }, {
      title: 'Скрипты (Алгоритмы, Функции)',
      src: 'functions'
    }, {
      title: 'Примеры верстки',
      src: 'css-layout-examples'
    }, {
      title: 'Игры',
      src: 'games'
    }
  ]

  constructor(private appService: AppService, private uiDropdownService: UiDropdownService) {}

  // глобальный обработчик клика для управления некоторыми механиками
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();

    const element = event?.target as HTMLElement;
    const id = element && element?.id;

    // если клик не по dropdown то закрываем все dropdown
    if (id !== 'iu-dropdown') {
      this.uiDropdownService.closeAll();
      return;
    }
  }

  ngOnInit(): void {
    this.appService.getUser().subscribe(res => {
      console.log(res)
    });
  }
}
