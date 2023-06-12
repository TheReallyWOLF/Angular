import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Select, Store} from "@ngxs/store";
import { GameHeroOptionsState } from "./state/game-hero-options.state"
import {HeroOptions} from "./game-hero-battle-options.model";
import {Observable} from "rxjs";

@Component({
  selector: 'game-hero-battle-option',
  templateUrl: './game-hero-battle-option.component.html',
  styleUrls: ['./game-hero-battle-option.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameHeroBattleOptionComponent implements OnInit {

  @Select(GameHeroOptionsState.heroList$)
  readonly heroList$!: Observable<HeroOptions[]>;

  constructor(private router: Router, private store: Store) {}





  ngOnInit(): void {}


  itemSelected(item: any) {
    console.log(item)
  }

  onCreateGame(): void {
    this.router.navigateByUrl('/games/hero-battle-game');
  }
}
