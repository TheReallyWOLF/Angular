import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'game-hero-battle-option',
  templateUrl: './game-hero-battle-option.component.html',
  styleUrls: ['./game-hero-battle-option.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameHeroBattleOptionComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCreateGame(): void {
    this.router.navigateByUrl('/games/hero-battle-game');
  }
}
