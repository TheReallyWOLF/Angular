import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent {
  public readonly buttons = [
    {
      route: 'game-life-component',
      name: 'Игра жизнь'
    }
  ]
}
