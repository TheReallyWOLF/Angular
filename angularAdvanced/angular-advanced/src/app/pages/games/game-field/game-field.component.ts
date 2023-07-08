import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {GameOptions, GameInverseMatrixState} from "../game-inverse-matrix/state/game-inverse-matrix.state";
import {Location} from '@angular/common';
import {GameRule} from "../game-inverse-matrix/game-inverse-matrix.component";

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameFieldComponent implements OnInit {
  public GameOptions: GameOptions = {
    field: 10,
    gameRule: 'Инверсная матрица',
    deathOverpopulation: 3,
    deathLoneliness: 1,
    newLifeRule: 3,
  };
  public field: number[][] = [];
  private shadowField: number[][] = [];
  private mainGameScriptController!: Function;

  constructor(private _location: Location, private store: Store) {}

  ngOnInit(): void {
    this.getDeathRule();
  }

  /**
   * Правила рождения и смерти клеток (правила игры)
   * */
  getDeathRule(): void {
    this.GameOptions = this.store.selectSnapshot(GameInverseMatrixState.GameOptions$);
    this.mainGameScriptController = this.GameOptions.gameRule === GameRule.INVERTMATRIX ? this.reverseGame : this.lifeGame;

    this.createGameField();
  }

  createGameField(): void {
    this.field = [];
    this.shadowField = [];
    for (let i = 0; i < this.GameOptions.field; i++) {
      this.field.push([]);
      this.shadowField.push([]);
      for (let j = 0; j < this.GameOptions.field; j++) {
        this.field[i].push(0);
        this.shadowField[i].push(0);
      }
    }
  }

  resetShadowField(): void {
    this.shadowField = [];
    for (let i = 0; i < this.GameOptions.field; i++) {
      this.shadowField.push([]);
      for (let j = 0; j < this.GameOptions.field; j++) {
        this.shadowField[i].push(0);
      }
    }
  }

  back(): void {
    this._location.back();
  }

  start(): void {
    for (let row = 0; row < this.GameOptions.field; row++) {
      for (let cell = 0; cell < this.GameOptions.field; cell++) {

        this.mainGameScriptController(row, cell);
      }
    }

    //if (this.GameOptions.gameRule === GameRule.LIFEGAME) return;

    // перерисовка представления выполняется 1 раз на каждый цикл прохода по полю а не каждое изменение в ячейке
    this.field = Object.assign([], this.shadowField);
    this.resetShadowField();
  }

  /**
   * Жизнь (вариант игры)
   * */
  lifeGame(row: number, cell: number): void {
    // не работает испрвить ключевые механики
    let lifeCount = 0;

    lifeCount += this.field[this.infiniteMatrix(row - 1)][this.infiniteMatrix(cell - 1)];
    lifeCount += this.field[this.infiniteMatrix(row - 1)][this.infiniteMatrix(cell)];
    lifeCount += this.field[this.infiniteMatrix(row - 1)][this.infiniteMatrix(cell + 1)];

    lifeCount += this.field[this.infiniteMatrix(row)][this.infiniteMatrix(cell - 1)];
    lifeCount += this.field[this.infiniteMatrix(row)][this.infiniteMatrix(cell + 1)];

    lifeCount += this.field[this.infiniteMatrix(row + 1)][this.infiniteMatrix(cell - 1)];
    lifeCount += this.field[this.infiniteMatrix(row + 1)][this.infiniteMatrix(cell)];
    lifeCount += this.field[this.infiniteMatrix(row + 1)][this.infiniteMatrix(cell + 1)];

    this.shadowField[row][cell] = this.field[row][cell];

    if (this.field[row][cell] === 1 && (this.GameOptions.deathLoneliness >= lifeCount || this.GameOptions.deathOverpopulation < lifeCount)) {
      this.shadowField[row][cell] = 0;
      return;
    }

    if (this.field[row][cell] === 0 && this.GameOptions.newLifeRule === lifeCount) {
      this.shadowField[row][cell] = 1;
      return;
    }
  }


  /**
   * Реверсивная матрица (вариант игры)
   * */
  reverseGame(row: number, cell: number): void {
    if (this.field[row][cell] === 1) {

      this.toggleSell(row - 1, cell - 1);
      this.toggleSell(row - 1, cell);
      this.toggleSell(row - 1, cell + 1);

      this.toggleSell(row, cell - 1);
      this.toggleSell(row, cell, true);
      this.toggleSell(row, cell + 1);

      this.toggleSell(row + 1, cell - 1);
      this.toggleSell(row + 1, cell);
      this.toggleSell(row + 1, cell + 1);
    }
  }

  /**
   * переключение ячейки (было 0 станет 1, было 1 станет 0);
   * reverse - позволяет пропустить пересчет ячейки
   * */
  toggleSell(row: number, cell: number, reverse: boolean = false): void {
    if (reverse) return;

    this.shadowField[this.infiniteMatrix(row)][this.infiniteMatrix(cell)] ?
      this.shadowField[this.infiniteMatrix(row)][this.infiniteMatrix(cell)] = 0 :
      this.shadowField[this.infiniteMatrix(row)][this.infiniteMatrix(cell)] = 1
  }

  /**
   * Позволяет матрице быть бесконечной зацикливая ее края сами на себе
   * */
  infiniteMatrix(index: number): number {
    if (index === this.GameOptions.field) {
      return 0;
    }
    return index < 0 ? this.GameOptions.field - 1 : index;
  }

  changeCell(i: number, j: number): void {
    this.field[i][j] ? this.field[i][j] = 0 : this.field[i][j] = 1;
  }

  resetField(): void {
    this.createGameField()
  }

  trackByIndex(index: number): number {
    return index;
  }
}
