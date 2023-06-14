export interface HeroBattleOptionsState {
  isGetReady: boolean;
  selectedHero: HeroOptions;
  heroesList: HeroOptions[];
}

export interface HeroOptions {
  id: number
  type: string;
  description: string;
}
