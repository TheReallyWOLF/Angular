export interface HeroBattleOptionsState {
  isGetReady: boolean;
  perksList: HeroPerk[];
  selectedHero: HeroOptions;
  heroesList: HeroOptions[];
}

export interface HeroPerk {
  [key: string]: any;
  effects: Effects;
}

export interface Effects {
  [key: string]: string | number;
}

export interface HeroOptions {
  id: number;
  img: string;
  type: string;
  effects: Effects;
  description: string;
}

/*
* Живучесть (англ. Robustiness)
        Иммунитет (англ. Immunity)
        Вера (англ. Faith)
        Мудрость (англ. Intelligence)
        Стойкость (англ. Endurance)
        Strength, Perception, Endurance, Charisma, Intelligence, Agility, Luck
* */
