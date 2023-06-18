import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GameHeroOptionsState, Actions} from "../state/game-hero-options.state";
import {Observable} from "rxjs";
import {CharacteristicsSettings, HeroCharacteristics} from "../game-hero-battle-options.model";
import {takeUntilDestroyed} from "../../../../../shared/rxjsPipe/takeUntilDestroyed";

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
      this.maximumValueCharacteristics = characteristicsSettings.maximumValueCharacteristics;
      this.minimumValueCharacteristics = characteristicsSettings.minimumValueCharacteristics;
    }).unsubscribe();
  }

  changeHeroCharacteristic(characteristic: HeroCharacteristics, increment: boolean) {
    const newCharacteristic = this.getNewCharacteristic(characteristic, increment);

    this.setCharacteristicsLimitView(increment, characteristic.value);
    this.store.dispatch(new Actions.ChangeHeroCharacteristic(newCharacteristic));
  }

  setCharacteristicsLimitView(increment: boolean, value: number): void {
    const isOverLimit = !increment && this.characteristicsLimitView === this.characteristicsLimitConst;
    const isLimitOver = increment && this.characteristicsLimitView === 0 || value === this.maximumValueCharacteristics;

    if (isOverLimit || isLimitOver) return;

    this.characteristicsLimitView = increment ? this.characteristicsLimitView - 1 : this.characteristicsLimitView + 1;
  }

  getNewCharacteristic(characteristic: HeroCharacteristics, increment: boolean): HeroCharacteristics {
    const isMaxValueLimit: boolean = characteristic.value === this.maximumValueCharacteristics && increment;
    const isMinValueLimit: boolean = characteristic.value === this.minimumValueCharacteristics && !increment;

    if (isMaxValueLimit || isMinValueLimit) return characteristic;

    return {
      ...characteristic,
      value: increment ? characteristic.value + 1 : characteristic.value - 1
    }
  }
}
