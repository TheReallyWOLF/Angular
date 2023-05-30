import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'game-hero-battle',
  templateUrl: './game-hero-battle.component.html',
  styleUrls: ['./game-hero-battle.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameHeroBattleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
