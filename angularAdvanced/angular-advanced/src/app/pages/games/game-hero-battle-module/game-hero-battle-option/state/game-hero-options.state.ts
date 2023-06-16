import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {HeroBattleOptionsState, HeroOptions, HeroPerk} from "../game-hero-battle-options.model";

export namespace Actions {

  export class SetSelectedHero {
    static readonly type = '[NGRX::game-options-battle] SetSelectedHero'
    constructor(readonly hero: HeroOptions) {}
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
  increment(ctx: StateContext<HeroBattleOptionsState>, action: Actions.SetSelectedHero) {
    ctx.patchState({
      selectedHero: action.hero
    })
  }
}
