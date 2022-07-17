import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {MainMenu} from "./app.models";

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


  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getUser().subscribe(res => {
      console.log(res)
    });
  }
}
