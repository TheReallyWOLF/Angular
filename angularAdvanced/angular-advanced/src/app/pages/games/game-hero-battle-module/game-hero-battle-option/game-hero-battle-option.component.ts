import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Select, Store} from "@ngxs/store";
import { GameHeroOptionsState } from "./state/game-hero-options.state"
import {HeroOptions} from "./game-hero-battle-options.model";
import {Observable} from "rxjs";
import {DropdownType} from "../../../../shared/ui-components/ui-dropdown/ui-dropdown.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'game-hero-battle-option',
  templateUrl: './game-hero-battle-option.component.html',
  styleUrls: ['./game-hero-battle-option.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeoutSlide', [
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      state('expanded', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition('visible <=> expanded', animate('0.6s ease-in')),
    ])
  ]
})
export class GameHeroBattleOptionComponent implements OnInit {
  DDtype: DropdownType = DropdownType.ENCAPSULATE;
  DDtypeHover: DropdownType = DropdownType.HOVER;

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

  showAnimateNextStep: boolean = false;
  isExpanded: boolean = false;
  stepAnimationRun: boolean = false;
  stepState: 'visible' | 'expanded' = 'visible';
  currentStep: string = 'hero-select-step'

  @Select(GameHeroOptionsState.heroList$)
  readonly heroList$!: Observable<HeroOptions[]>;

  @Select(GameHeroOptionsState.getSelectedHero$)
  readonly getSelectedHero$!: Observable<HeroOptions>;

  @Select(GameHeroOptionsState.isGetReady$)
  readonly isGetReady$!: Observable<boolean>;

  constructor(private router: Router, private store: Store) {}


  ngOnInit(): void {}

  fadeoutSlideStart() {
    this.stepAnimationRun = true;
    console.log('Start');
  }

  fadeoutSlideEnd() {

    if (this.showAnimateNextStep) {
      this.showAnimateNextStep = false;
      this.currentStep = this.currentStep === 'hero-select-step' ? 'hero-perks-step' : 'hero-select-step';
      this.isExpanded = !this.isExpanded;
      this.stepState = !this.isExpanded ? 'visible' : 'expanded';
      return;
    }

    this.stepAnimationRun = false;
    console.log('End');
  }

  nextStep() {
    this.showAnimateNextStep = true;
    this.isExpanded = !this.isExpanded
    this.stepState = !this.isExpanded ? 'visible' : 'expanded'
  }




  itemSelected(item: any) {
    console.log(item)
  }

  onCreateGame(): void {
    this.router.navigateByUrl('/games/hero-battle/hero-battle-game');
  }
}
