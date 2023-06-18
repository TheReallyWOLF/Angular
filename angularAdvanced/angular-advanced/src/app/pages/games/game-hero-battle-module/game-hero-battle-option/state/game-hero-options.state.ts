import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {HeroBattleOptionsState, HeroOptions, HeroPerk, HeroCharacteristics} from "../game-hero-battle-options.model";

export namespace Actions {

  export class SetSelectedHero {
    static readonly type = '[NGRX::game-options-battle] SetSelectedHero'
    constructor(readonly hero: HeroOptions) {}
  }

  export class ChangeHeroCharacteristic {
    static readonly type = '[NGRX::game-options-battle] ChangeHeroCharacteristic'
    constructor(readonly characteristic: HeroCharacteristics) {}
  }
}

@State<HeroBattleOptionsState>({
  name: 'ngrx_gameOptionsBattle',
  defaults: {
    isGetReady: false,
    selectedHero: {
      id: 1,
      img: 'assets/images/game-hero-battle/game-hero-options/plug.png',
      type: 'воин',
      effects: {
        intelligence: 1
      },
      description: 'воин такой воин воин та воин такой воин воин такой воин воин такой воин воин такой воин воин такой воин воин такой воин воин такой воин воин воин такой воин воин такой воин воин такой воин воин такой воин воин'
    },
    characteristicsLimit: 45,
    maximumValueCharacteristics: 25,
    minimumValueCharacteristics: 1,
    characteristicsList: [{
      name: 'robustiness',
      value: 1,
    },{
      name: 'faith',
      value: 1,
    },{
      name: 'intelligence',
      value: 1,
    },{
      name: 'wisdom',
      value: 1,
    },{
      name: 'strength',
      value: 1,
    },{
      name: 'perception',
      value: 1,
    },{
      name: 'endurance',
      value: 1,
    },{
      name: 'charisma',
      value: 1,
    },{
      name: 'agility',
      value: 1,
    },{
      name: 'immunity',
      value: 1,
    },{
      name: 'resistance',
      value: 1,
    },{
      name: 'disbelief',
      value: 1,
    },{
      name: 'knowledge',
      value: 1,
    }],
    perksList: [{
      name: 'Живчик',
      img: 'assets/images/game-hero-battle/game-hero-options/plug.png',
      description: 'описание описание описание описание',
      effects: {
////// придумать эффекты....
      }
    }],
    heroesList: [{
      id: 1,
      type: 'воин',
      img: 'assets/images/game-hero-battle/game-hero-options/plug.png',
      effects: {
        intelligence: 1
      },
      description: 'воин такойин такой воин воин такой воин воин такой воин воин такой воин воин такой воин воин такой воин воин такой воин воин такой воин воин воин такой воин воин такой воин воин такой воин воин такой воин воин'
    },{
      id: 2,
      type: 'маг',
      img: 'assets/images/game-hero-battle/game-hero-options/plug.png',
      effects: {
        strength: 1
      },
      description: 'маг тако такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такойг'
    },{
      id: 3,
      type: 'маг3',
      img: 'assets/images/game-hero-battle/game-hero-options/plug.png',
      effects: {
        charisma: 1
      },
      description: 'маг такой маг й маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такойг'
    },{
      id: 4,
      type: 'маг4',
      img: 'assets/images/game-hero-battle/game-hero-options/plug.png',
      effects: {
        agility: -1,
        charisma: 1,
        strength: 1
      },
      description: 'такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такойг'
    }]
  }
})

@Injectable()
export class GameHeroOptionsState {

  @Selector()
    static perksList$(state: HeroBattleOptionsState): HeroPerk[] {
    return state.perksList;
  }

  @Selector()
  static characteristicsList$(state: HeroBattleOptionsState): HeroCharacteristics[] {
    return state.characteristicsList;
  }

  @Selector()
  static characteristicsLimit$(state: HeroBattleOptionsState): number {
    return state.characteristicsLimit;
  }

  @Selector()
  static isGetReady$(state: HeroBattleOptionsState): boolean {
    return state.isGetReady;
  }

  @Selector()
  static getSelectedHero$(state: HeroBattleOptionsState): HeroOptions {
    return state.selectedHero;
  }

  @Selector()
  static heroList$(state: HeroBattleOptionsState): HeroOptions[] {
    return state.heroesList;
  }

  @Action(Actions.SetSelectedHero)
  setSelectedHero(ctx: StateContext<HeroBattleOptionsState>, action: Actions.SetSelectedHero) {
    ctx.patchState({
      selectedHero: action.hero
    })
  }

 /* @Action(Actions.ChangeHeroCharacteristic)
  changeHeroCharacteristic(ctx: StateContext<HeroBattleOptionsState>, action: Actions.ChangeHeroCharacteristic) {
    const state = ctx.getState();
    const increment: boolean = action.increment;
    const maxValue: number = state.maximumValueCharacteristics;
    const minValue: number = state.minimumValueCharacteristics;

    let characteristicsLimit: number = state.characteristicsLimit;

    ctx.patchState({
      characteristicsList: [...state.characteristicsList.map(characteristic => {
        if (characteristic.name !== action.characteristicKey) return characteristic;

        const maxValueStop: boolean = characteristic.value === maxValue && increment;
        const minValueStop: boolean = characteristic.value === minValue && !increment;

        if (maxValueStop || minValueStop) return characteristic;

        characteristicsLimit = increment ? state.characteristicsLimit - 1 : state.characteristicsLimit + 1;

        return {
          ...characteristic,
          value: increment ? characteristic.value + 1 : characteristic.value - 1
        }

      })],
      characteristicsLimit: characteristicsLimit
    });
  }*/

  @Action(Actions.ChangeHeroCharacteristic)
  changeHeroCharacteristic(ctx: StateContext<HeroBattleOptionsState>, action: Actions.ChangeHeroCharacteristic) {
    const state = ctx.getState();
    ctx.patchState({
      characteristicsList: [...state.characteristicsList, action.characteristic]
    });
  }


}
