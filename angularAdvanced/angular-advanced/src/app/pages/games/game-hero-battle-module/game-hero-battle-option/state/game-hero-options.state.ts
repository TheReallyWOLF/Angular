import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {
  HeroBattleOptionsState,
  HeroOptions,
  HeroPerk,
  HeroCharacteristics,
  CharacteristicsSettings
} from "../game-hero-battle-options.model";
import {patch, updateItem} from "@ngxs/store/operators";

export namespace Actions {

  export class SetSelectedHero {
    static readonly type = '[NGRX::game-options-battle] SetSelectedHero'
    constructor(readonly hero: HeroOptions) {}
  }

  export class ChangeHeroCharacteristic {
    static readonly type = '[NGRX::game-options-battle] ChangeHeroCharacteristic'
    constructor(readonly characteristic: HeroCharacteristics, readonly increment: boolean) {}
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
    characteristicsSettings: {
      characteristicsLimit: 45,
      maximumValueCharacteristics: 25,
      minimumValueCharacteristics: 1,
    },
    characteristicsList: [{
      name: 'robustiness',
      value: 1,
    }, {
      name: 'faith',
      value: 1,
    }, {
      name: 'intelligence',
      value: 1,
    }, {
      name: 'wisdom',
      value: 1,
    }, {
      name: 'strength',
      value: 1,
    }, {
      name: 'perception',
      value: 1,
    }, {
      name: 'endurance',
      value: 1,
    }, {
      name: 'charisma',
      value: 1,
    }, {
      name: 'agility',
      value: 1,
    }, {
      name: 'immunity',
      value: 1,
    }, {
      name: 'resistance',
      value: 1,
    }, {
      name: 'disbelief',
      value: 1,
    }, {
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
    }, {
      id: 2,
      type: 'маг',
      img: 'assets/images/game-hero-battle/game-hero-options/plug.png',
      effects: {
        strength: 1
      },
      description: 'маг тако такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такойг'
    }, {
      id: 3,
      type: 'маг3',
      img: 'assets/images/game-hero-battle/game-hero-options/plug.png',
      effects: {
        charisma: 1
      },
      description: 'маг такой маг й маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такой маг маг такойг'
    }, {
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
  static characteristicsSettings$(state: HeroBattleOptionsState): CharacteristicsSettings {
    return state.characteristicsSettings;
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

  @Action(Actions.ChangeHeroCharacteristic)
  changeHeroCharacteristic(ctx: StateContext<HeroBattleOptionsState>, action: Actions.ChangeHeroCharacteristic) {
     const state = ctx.getState();
     const isMaxValueLimit: boolean = action.characteristic.value > state.characteristicsSettings.maximumValueCharacteristics && action.increment;
     const isMinValueLimit: boolean = action.characteristic.value < state.characteristicsSettings.minimumValueCharacteristics && !action.increment;
     if (isMaxValueLimit || isMinValueLimit) return;

     ctx.setState(
      patch<HeroBattleOptionsState>({
      characteristicsList: updateItem(item =>
        item?.name === action.characteristic.name,
        action.characteristic
      )
    }))
  }
}
