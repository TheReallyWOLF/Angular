import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GameHeroOptionsState, Actions} from "../state/game-hero-options.state";
import {Observable} from "rxjs";
import {CharacteristicsSettings, HeroCharacteristics} from "../game-hero-battle-options.model";

@Component({
  selector: 'hero-stats-step',
  templateUrl: './hero-stats-step.component.html',
  styleUrls: ['./hero-stats-step.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroStatsStepComponent implements OnInit {
  @Select(GameHeroOptionsState.characteristicsSettings$)
  readonly characteristicsSettings$!: Observable<CharacteristicsSettings>;

  @Select(GameHeroOptionsState.characteristicsList$)
  readonly characteristics$!: Observable<HeroCharacteristics[]>;

  characteristicsLimitConst!: number;
  characteristicsLimitView!: number;
  maximumValueCharacteristics!: number;
  minimumValueCharacteristics!: number;

  constructor(private store: Store) {}

  ngOnInit(): void {
   this.getCharacteristicsSettings();
  }

  getCharacteristicsSettings(): void {
    this.characteristicsSettings$.subscribe(characteristicsSettings => {
      this.characteristicsLimitView = this.characteristicsLimitConst = characteristicsSettings.characteristicsLimit;
      this.minimumValueCharacteristics = characteristicsSettings.minimumValueCharacteristics;
      this.maximumValueCharacteristics = characteristicsSettings.maximumValueCharacteristics;
    }).unsubscribe();
  }

  changeHeroCharacteristic(characteristic: HeroCharacteristics, increment: boolean) {
    const newCharacteristic = this.getNewCharacteristic(characteristic, increment);
    const isMinCharacteristicsLimit: boolean = this.characteristicsLimitView < this.minimumValueCharacteristics;
    const isMaxCharacteristicsLimit: boolean = this.characteristicsLimitView === this.characteristicsLimitConst;
    const isMaximumValueCharacteristic: boolean = newCharacteristic.value > this.maximumValueCharacteristics;
    const isMinimumValueCharacteristic: boolean = newCharacteristic.value === 0;

    if ((isMaximumValueCharacteristic || isMinCharacteristicsLimit) && increment) return;
    if ((isMinimumValueCharacteristic || isMaxCharacteristicsLimit) && !increment) return;

    this.characteristicsLimitView = increment ? this.characteristicsLimitView - 1 : this.characteristicsLimitView + 1;
    this.store.dispatch(new Actions.ChangeHeroCharacteristic(newCharacteristic, increment));
  }

  getNewCharacteristic(characteristic: HeroCharacteristics, increment: boolean): HeroCharacteristics {
    return {
      ...characteristic,
      value: increment ? characteristic.value + 1 : characteristic.value - 1
    }
  }
}
