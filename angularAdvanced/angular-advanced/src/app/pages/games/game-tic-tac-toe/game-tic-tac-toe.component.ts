// todo Сделать компьютера + оповещение победы

import {ChangeDetectionStrategy, Component} from '@angular/core';

interface PlayersButton {
  players: number;
  name: string;
}

interface FieldOptions {
  name: string;
  value: number;
}

interface CheckingWinningCombinations {
  leftDiagonal: Combinations;
  verticalLine: Combinations;
  rightDiagonal: Combinations;
  horizontalLine: Combinations;
}

interface Combinations {
  left: boolean;
  right: boolean;
  line: number[][];
}

interface OptionsGame {
  players: number;
  field: number;
  move: number;
  icons: string[];
  computer: boolean;
  winLine: number;
  winner: boolean;
  winningStreak: number[][];
}
/**
 * Оптимизированные крестики нолики (проверяеться не все поле а только несколько клеточек мой велосипед)
 * */
@Component({
  selector: 'game-tic-tac-toe',
  templateUrl: './game-tic-tac-toe.component.html',
  styleUrls: ['./game-tic-tac-toe.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTicTacToeComponent {
  public readonly winLine = [3, 4, 5, 6, 7, 8];
  public readonly playersIconList: string[] = ['X', 'O', '♥️', '♣️', '♠️', '♦️','⚙️', '❎', '❌', '⚠️', '❤️', '⚽️', '☑️', '😀', '🦊', '💣', '🐽', '🐷', '🐺'];
  public readonly playersButtons: PlayersButton[] = [{
    players: 1,
    name: 'С компьютером'
  },{
    players: 2,
    name: 'Вдвоём'
  },{
    players: 3,
    name: 'Втроём'
  },{
    players: 4,
    name: 'Вчетвером'
  }];
  public readonly fieldOptions: FieldOptions[] = [{
    name: '3 x 3',
    value: 3
  },{
    name: '4 x 4',
    value: 4
  },{
    name: '5 x 5',
    value: 5
  },{
    name: '6 x 6',
    value: 6
  },{
    name: '7 x 7',
    value: 7
  },{
    name: '8 x 8',
    value: 8
  },{
    name: '9 x 9',
    value: 9
  },{
    name: '10 x 10',
    value: 10
  },{
    name: '11 x 11',
    value: 11
  },{
    name: '12 x 12',
    value: 12
  },{
    name: '13 x 13',
    value: 13
  },{
    name: '14 x 14',
    value: 14
  },{
    name: '15 x 15',
    value: 15
  }];
  public options: OptionsGame = {
    move: 1,
    players: 1,
    field: 3,
    icons: ['X', 'O', '♥️', '♣️'],
    computer: true,
    winLine: 3,
    winner: false,
    winningStreak: []
  }
  public activeCell: {[name: string]: number} = {};
  public toggle: boolean = true;
  public shadowField: string[][] = [];

  start(): void {
    this.newGame();
    if (this.options.players === 1) {
      this.options.computer = true;
      this.options.players = 2;
    }
    this.toggle = !this.toggle;
  }

  changeFieldValue(fieldValue: number): void {
    if (fieldValue < this.options.winLine) {
      this.options.winLine = fieldValue;
    }
    this.options.field = fieldValue;
  }

  changeWinLine(newWinLineValue: number): void {
    if (newWinLineValue > this.options.field) this.options.field = newWinLineValue;
    this.options.winLine = newWinLineValue;
  }

  createField(side: number): string[][] {
    let field: string[][] = [];
    for (let i = 0; i < side; i++) {
      field.push([]);
      for (let k = 0; k < side; k++) {
        field[i].push('');
      }
    }
    return field;
  }

  chooseNumberPlayers(players: number): void {
    players === 1 ? this.options.computer = true : this.options.computer = false;
    this.options.players = players;
  }

  select(row: number, cell: number): void {
    if (this.options.winner) return;
    if (!this.shadowField[row][cell]) {
      this.shadowField[row][cell] = this.options.icons[this.options.move - 1];
      this.checkVictory(row, cell, this.options.move);
      this.togglePlayer();
    }
  }
  /**
   * Проверяет если ли совпалдения в символах игрока и переключает из что бы не было повторений
   * */
  checkIcon(player: number, icon: string): void {
    const repeatIndex = this.options.icons.indexOf(icon);
    if (repeatIndex !== -1) {
      [this.options.icons[player], this.options.icons[repeatIndex]] = [icon, this.options.icons[player]];
      return;
    }
    this.options.icons[player] = icon;
  }

  togglePlayer(): void {
    this.options.move === this.options.players ?
      this.options.move = 1:
      this.options.move += 1;
  }
  /**
   * Проверяет есть ли победитель (поле каждого хода)
   * */
  checkVictory(row: number, cell: number, move: number): void {
    const playerIcon = this.options.icons[move - 1];
    const winningCombinations: CheckingWinningCombinations = {
      leftDiagonal: {
        left: true,
        right: true,
        line: []
      },
      verticalLine: {
        left: true,
        right: true,
        line: []
      },
      rightDiagonal: {
        left: true,
        right: true,
        line: []
      },
      horizontalLine: {
        left: true,
        right: true,
        line: []
      },
    };
    /**
     * topEdgeFieldRow - защита от выбора минусовой строки матрицы
     * topEdgeFieldCell - защита от выбора минусовой ячейки в строке матрицы
     * bottomEdgeFieldRow - защита от выбора строки выходящей за поле свыше края
     * bottomEdgeFieldCell - защита от выбора ячейки в строке выше длинны массива
     * left и right - оптимизация проверки (если непрерывная линия не строиться то проверять ее не надо в след итерации)
     * */
    for (let i = 1; i < this.options.winLine; i++ ) {
      const leftDiagonal = winningCombinations.leftDiagonal;
      const verticalLine = winningCombinations.verticalLine;
      const rightDiagonal = winningCombinations.rightDiagonal;
      const horizontalLine = winningCombinations.horizontalLine;

      const fieldLength: number = this.shadowField.length;
      const topEdgeFieldRow: boolean = row - i >= 0;
      const topEdgeFieldCell: boolean = cell - i >= 0;
      const bottomEdgeFieldRow: boolean = row + i < fieldLength;
      const bottomEdgeFieldCell: boolean = cell + i < fieldLength;

      if (leftDiagonal.left || leftDiagonal.right) {
        if (leftDiagonal.left) {
          if ((topEdgeFieldRow && topEdgeFieldCell) && this.shadowField[row - i][cell - i] === playerIcon) {
            leftDiagonal.line.push([row - i, cell - i])
          } else {
            leftDiagonal.left = false;
          }
        }
        if (leftDiagonal.right) {
          if ((bottomEdgeFieldRow && bottomEdgeFieldCell) && this.shadowField[row + i][cell + i] === playerIcon) {
            leftDiagonal.line.push([row + i, cell + i])
          } else {
            leftDiagonal.right = false;
          }
        }
      }

      if (verticalLine.left || verticalLine.right) {
        if (verticalLine.left) {
          if (bottomEdgeFieldCell && this.shadowField[row][cell + i] === playerIcon) {
            verticalLine.line.push([row, cell + i]);
          } else {
            verticalLine.left = false;
          }
        }

        if (verticalLine.right) {
          if (topEdgeFieldCell && this.shadowField[row][cell - i] === playerIcon) {
            verticalLine.line.push([row , cell - i]);
          } else {
            verticalLine.right = false;
          }
        }
      }

      if (rightDiagonal.left || rightDiagonal.right) {
        if (rightDiagonal.left) {
          if ((bottomEdgeFieldRow && topEdgeFieldCell ) && this.shadowField[row + i][cell - i] === playerIcon) {
            rightDiagonal.line.push([row + i, cell - i]);
          } else {
            rightDiagonal.left = false;
          }
        }
        if (rightDiagonal.right) {
          if ((topEdgeFieldRow && bottomEdgeFieldCell) && this.shadowField[row - i][cell + i] === playerIcon) {
            rightDiagonal.line.push([row - i, cell + i]);
          } else {
            rightDiagonal.right = false;
          }
        }
      }

      if (horizontalLine.left || horizontalLine.right) {
        if (horizontalLine.left) {
          if (topEdgeFieldRow && this.shadowField[row - i][cell] === playerIcon) {
            horizontalLine.line.push([row - i, cell]);
          } else {
            horizontalLine.left = false;
          }
        }
        if (horizontalLine.right) {
          if (bottomEdgeFieldRow && this.shadowField[row + i][cell] === playerIcon) {
            horizontalLine.line.push([row + i, cell]);
          } else {
            horizontalLine.right = false;
          }
        }
      }
    }

    this.checkWinLine(row, cell, winningCombinations.leftDiagonal.line, playerIcon);
    this.checkWinLine(row, cell, winningCombinations.verticalLine.line, playerIcon);
    this.checkWinLine(row, cell, winningCombinations.rightDiagonal.line, playerIcon);
    this.checkWinLine(row, cell, winningCombinations.horizontalLine.line, playerIcon);
  }

  checkWinLine(row: number, cell: number, line: number[][], playerIcon: string): void {
    if (line.length >= this.options.winLine - 1) {
      this.options.winner = true;
      this.options.winningStreak = [[row, cell], ...line]
      this.activeCellCheck(this.options.winningStreak);
      // todo сделать оповещение!
      alert('Выиграл ' + playerIcon)
    }
  }

  activeCellCheck(line: number[][]): void {
    line.forEach((arr, i) => {
      if (i < this.options.winLine) {
        this.activeCell[arr[0] +''+ arr[1]] = (arr[0] * 10) + arr[1];
      }
    })
  }

  newGame(): void {
    this.shadowField = this.createField(this.options.field);
    this.activeCell = {};
    this.options.winner = false;
    this.options.winningStreak = [];
  }

  reset(): void {
    this.activeCell = {};
    this.options = {
      players: 1,
      field: 3,
      move: 1,
      icons: ['X', 'O', '♥️', '♣️'],
      computer: true,
      winLine: 3,
      winner: false,
      winningStreak: []
    }
  }
}
