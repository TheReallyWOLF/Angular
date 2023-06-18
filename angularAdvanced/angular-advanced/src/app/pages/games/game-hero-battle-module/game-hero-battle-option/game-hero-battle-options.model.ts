export interface HeroBattleOptionsState {
  isGetReady: boolean;
  characteristicsSettings: CharacteristicsSettings;
  characteristicsList: HeroCharacteristics[]
  perksList: HeroPerk[];
  selectedHero: HeroOptions;
  heroesList: HeroOptions[];
}

export interface CharacteristicsSettings {
  characteristicsLimit: number;
  maximumValueCharacteristics: number;
  minimumValueCharacteristics: number;
}

export interface HeroPerk {
  [key: string]: any;
  effects: Effects;
}

export interface HeroCharacteristics {
  name: string;
  value: number;
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
