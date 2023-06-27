export interface SeaGameOptions {
  oneDeck: number;
  twoDeck:  number;
  threeDeck:  number;
  fourDeck:  number;
  fiveDeck:  number;
  field: SeaGameField;
}

export interface SeaGameField {
  name: string;
  value: number;
}
