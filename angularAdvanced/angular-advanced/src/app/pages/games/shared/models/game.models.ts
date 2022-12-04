export interface PlayersButton {
  players: number;
  name: string;
}

export interface FieldOptions {
  name: string;
  value: number;
}

export interface CheckingWinningCombinations {
  leftDiagonal: Combinations;
  verticalLine: Combinations;
  rightDiagonal: Combinations;
  horizontalLine: Combinations;
}

export interface Combinations {
  left: boolean;
  right: boolean;
  line: number[][];
}

export interface OptionsGame {
  players: number;
  field: number;
  move: number;
  icons: string[];
  computer: boolean;
  winLine: number;
  winner: boolean;
  winningStreak: number[][];
}

export type ShipDeck = 'fiveDeck' | 'fourDeck' | 'threeDeck' | 'twoDeck' | 'oneDeck';
