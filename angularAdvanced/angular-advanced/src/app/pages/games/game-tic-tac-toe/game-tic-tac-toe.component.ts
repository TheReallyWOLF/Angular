import { Component } from '@angular/core';

export interface PlayersButton {
  players: number;
  name: string;
}

export interface FieldOptions {
  name: string;
  value: number;
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
  styleUrls: ['./game-tic-tac-toe.component.sass']
})
export class GameTicTacToeComponent {
  public toggle: boolean = true;
  public shadowField: string[][] = []
  public playersIconList: string[] = ['X', 'O', 'Z', 'V', 'W', 'M', 'Y', '+', '()', '<>', '#', '*']
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
  },];
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
    this.toggle = !this.toggle
  }

  createField(side: number): string[][] {
    let field: string[][] = [];
    for (let i = 0; i < side; i++) {
      field.push([]);
      for (let k = 0; k < side; k ++) {
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
    if (this.shadowField[row][cell]) {
      this.togglePlayer();
      return;
    }
    this.shadowField[row][cell] = this.options.icons[this.options.move -1];
    this.togglePlayer();
    this.checkVictory(row, cell);
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
    this.options.icons[player] = icon
  }

  togglePlayer(): void {
    this.options.move === this.options.players ?
      this.options.move = 1:
      this.options.move += 1;
  }
  /**
   * Проверяет есть ли победитель (поле каждого хода)
   * */
  checkVictory(row: number, cell: number) {
    // проверить победу todo РЕАЛИЗОВАТЬ
    console.log(row, cell)
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
