export interface HeroBattleOptionsState {
  isGetReady: boolean;
  selectedHero: HeroOptions;
  heroesList: HeroOptions[];
}

export interface HeroOptions {
  id: number;
  img: string;
  type: string;
  description: string;
}
