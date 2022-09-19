import {ChangeDetectionStrategy, Component} from '@angular/core';

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
  isCheck: boolean;
  line: number[][];
}

export interface OptionsGame {
  players: number;
  field: number;
  move: number;
  icons: string[];
  computer: boolean;
}

@Component({
  selector: 'game-tic-tac-toe',
  templateUrl: './game-tic-tac-toe.component.html',
  styleUrls: ['./game-tic-tac-toe.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTicTacToeComponent {
  public toggle: boolean = true;
  public shadowField: string[][] = [];
  public playersIconList: string[] = ['X', 'O', 'Z', 'V', 'W', 'M', 'Y', '+', '()', '<>', '#', '*'];
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
  }];
  public options: OptionsGame = {
    move: 1,
    players: 1,
    field: 3,
    icons: ['X', 'O', 'Z', 'V'],
    computer: true
  }

  start(): void {
    this.shadowField = this.createField(this.options.field);
    if (this.options.players === 1) {
      this.options.computer = true;
      this.options.players = 2;
    }
    this.toggle = !this.toggle;
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
  checkVictory(row: number, cell: number, move: number) {
    const playerIcon = this.options.icons[move - 1];
    const winningCombinations: CheckingWinningCombinations = {
      // \ | / -
      leftDiagonal: {
        isCheck: true,
        line: []
      },
      verticalLine: {
        isCheck: true,
        line: []
      },
      rightDiagonal: {
        isCheck: true,
        line: []
      },
      horizontalLine: {
        isCheck: true,
        line: []
      },
    };

    for (let i = 1; i < 3; i++ ) {
      const leftDiagonal = winningCombinations.leftDiagonal;
      const verticalLine = winningCombinations.verticalLine;
      const rightDiagonal = winningCombinations.rightDiagonal;
      const horizontalLine = winningCombinations.horizontalLine;

      const fieldLength: number = this.shadowField.length;
      const topEdgeFieldRow: boolean = row - i >= 0;
      const topEdgeFieldCell: boolean = cell - i >= 0;
      const bottomEdgeFieldRow: boolean = row + i < fieldLength;
      const bottomEdgeFieldCell: boolean = cell + i < fieldLength;

      if (leftDiagonal.isCheck) {
        if ((topEdgeFieldRow && topEdgeFieldCell) && this.shadowField[row - i][cell - i] === playerIcon) leftDiagonal.line.push([row - i, cell - i]);
        if ((bottomEdgeFieldRow && bottomEdgeFieldCell) && this.shadowField[row + i][cell + i] === playerIcon) leftDiagonal.line.push([row + i, cell + i]);
        if (leftDiagonal.line.length === 0) leftDiagonal.isCheck = false;
      }

      if (verticalLine.isCheck) {
        if (topEdgeFieldCell && this.shadowField[row][cell - i] === playerIcon) verticalLine.line.push([row , cell - i]);
        if (bottomEdgeFieldCell && this.shadowField[row][cell + i] === playerIcon) verticalLine.line.push([row, cell + i]);
        if (verticalLine.line.length === 0) verticalLine.isCheck = false;
      }

      if (rightDiagonal.isCheck) {
        if ((bottomEdgeFieldRow && topEdgeFieldCell ) && this.shadowField[row + i][cell - i] === playerIcon) rightDiagonal.line.push([row + i, cell - i]);
        if ((topEdgeFieldRow && bottomEdgeFieldCell) && this.shadowField[row - i][cell + i] === playerIcon) rightDiagonal.line.push([row - i, cell + i]);
        if (rightDiagonal.line.length === 0) rightDiagonal.isCheck = false;
      }

      if (horizontalLine.isCheck) {
        if (topEdgeFieldRow && this.shadowField[row - i][cell] === playerIcon) horizontalLine.line.push([row - i, cell]);
        if (bottomEdgeFieldRow && this.shadowField[row + i][cell] === playerIcon) horizontalLine.line.push([row + i, cell]);
        if (horizontalLine.line.length === 0) horizontalLine.isCheck = false;
      }
    }
// todo Сделать лингию больше 3 + компьютера + оповещение победы и блокировку экрана + ресет поля
    if (winningCombinations.leftDiagonal.line.length === 2) {
      console.log("win leftDiagonal")
      alert('Выиграл ' + playerIcon)
    }

    if (winningCombinations.verticalLine.line.length === 2) {
      console.log("win verticalLine")
      alert('Выиграл ' + playerIcon)
    }

    if (winningCombinations.rightDiagonal.line.length === 2) {
      console.log("win rightDiagonal")
      alert('Выиграл ' + playerIcon)
    }

    if (winningCombinations.horizontalLine.line.length === 2) {
      console.log("win horizontalLine")
      alert('Выиграл ' + playerIcon)
    }

  }


  reset(): void {
    this.options = {
      players: 1,
      field: 3,
      move: 1,
      icons: ['X','O', 'Z', 'V'],
      computer: true
    }
  }
}
