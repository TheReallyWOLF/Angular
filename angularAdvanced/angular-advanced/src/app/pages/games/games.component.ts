import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent {
  public readonly buttons = [
    {
      route: 'game-recursive-matrix',
      name: 'Игра: инверсная матрица'
    }, {
      route: 'game-tic-tac-toe',
      name: 'Игра: крестики нолики !!BETA!!'
    }, {
      route: 'game-sea-​​battle',
      name: 'Игра: Морской бой !!ALFA!!'
    }, {
      route: 'memory-game',
      name: 'Игра: Карточки с запоминанием'
    }, {
      route: 'hero-battle',
      name: 'Игра: Автобатлер героем'
    }
  ]
}
