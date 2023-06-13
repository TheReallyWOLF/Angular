import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Select, Store} from "@ngxs/store";
import { GameHeroOptionsState } from "./state/game-hero-options.state"
import {HeroOptions} from "./game-hero-battle-options.model";
import {Observable} from "rxjs";
import {DropdownType} from "../../../../shared/ui-components/ui-dropdown/ui-dropdown.component";

@Component({
  selector: 'game-hero-battle-option',
  templateUrl: './game-hero-battle-option.component.html',
  styleUrls: ['./game-hero-battle-option.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameHeroBattleOptionComponent implements OnInit {
  DDtype: DropdownType = DropdownType.ENCAPSULATE;
  DDtypeHover: DropdownType = DropdownType.HOVER;

  @Select(GameHeroOptionsState.heroList$)
  readonly heroList$!: Observable<HeroOptions[]>;

  constructor(private router: Router, private store: Store) {}

  iitesm = [{
    id: 1,
    value: '123223232'
  },{
    id: 2,
    value: '13'
  },{
    id: 3,
    value: '121'
  }]


  ngOnInit(): void {}


  itemSelected(item: any) {
    console.log(item)
  }

  onCreateGame(): void {
    this.router.navigateByUrl('/games/hero-battle/hero-battle-game');
  }
}
