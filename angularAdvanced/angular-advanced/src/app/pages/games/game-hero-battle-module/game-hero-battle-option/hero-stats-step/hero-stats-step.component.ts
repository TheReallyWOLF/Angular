import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GameHeroOptionsState, Actions} from "../state/game-hero-options.state";
import {Observable} from "rxjs";
import {HeroCharacteristics} from "../game-hero-battle-options.model";
import {takeUntilDestroyed} from "../../../../../shared/rxjsPipe/takeUntilDestroyed";

@Component({
  selector: 'hero-stats-step',
  templateUrl: './hero-stats-step.component.html',
  styleUrls: ['./hero-stats-step.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroStatsStepComponent implements OnInit {
  @Select(GameHeroOptionsState.characteristicsLimit$)
  readonly characteristicsLimit$!: Observable<number>;

  @Select(GameHeroOptionsState.characteristicsList$)
  readonly characteristics$!: Observable<HeroCharacteristics[]>;

  characteristicsLimit!: number;

  constructor(private changeDetectorRef: ChangeDetectorRef, private store: Store) {}

  ngOnInit(): void {
    this.characteristicsLimit$.pipe(takeUntilDestroyed(this)).subscribe(limit => {
      this.characteristicsLimit = limit;
      this.changeDetectorRef.markForCheck();
    })
  }

  changeHeroCharacteristic(characteristic: HeroCharacteristics, increment: boolean) {
    increment ? characteristic.value++ : characteristic.value--;

    this.store.dispatch(new Actions.ChangeHeroCharacteristic(characteristic));
  }
}
