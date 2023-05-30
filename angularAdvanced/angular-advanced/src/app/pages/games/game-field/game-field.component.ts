import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable, Subject} from "rxjs";
import {GameOptions, GameInverseMatrixState} from "../game-inverse-matrix/state/game-inverse-matrix.state";
import {takeUntil} from "rxjs/operators";
import {Location} from '@angular/common';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameFieldComponent implements OnInit, AfterViewInit, OnDestroy {
  //@Select()

  @Select(GameInverseMatrixState.GameOptions$)
  readonly GameOptions$!: Observable<GameOptions>;
  public GameOptions: GameOptions = {
    field: 10,
    dueRule: 1,
    lifeRule: 1
  };
  public field: number[][] = [];
  private shadowField: number[][] = [];

  private destroy$ = new Subject<void>();
  constructor(private _location: Location) { }

  ngOnInit(): void {
    this.getDeathRule();
  }

  ngAfterViewInit(): void {

  }
// todo строка!?
  /**
   * Правила рождения и смерти клеток (правила игры)
   * */
  getDeathRule(): void {
    this.GameOptions$
      .pipe(takeUntil(this.destroy$))
      .subscribe(GameOptions => {
        this.GameOptions = {
          field: Number(GameOptions.field),
          dueRule: Number(GameOptions.dueRule),
          lifeRule: Number(GameOptions.lifeRule),
        };
        this.createGameField();
      })
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

  back():void {
    this._location.back();
  }

  start(): void {
    const binaryLength = Math.ceil(this.GameOptions.field / 2);

    for (let row = 0; row < binaryLength; row++) {
      for (let cell = 0; cell < binaryLength; cell++) {

        let binaryRowOffset = this.GameOptions.field - row - 1;
        let binaryCellOffset = this.GameOptions.field - cell - 1;

        this.reverseGame(row, cell);
        this.reverseGame(binaryRowOffset, cell);
        this.reverseGame(row, binaryCellOffset);
        this.reverseGame(binaryRowOffset, binaryCellOffset);

      }
    }
    // перерисовка представления выполняется 1 раз на каждый цикл прохода по полю а не каждое изменение в ячейке
    this.field = Object.assign([], this.shadowField);
    this.resetShadowField();
  }
  /**
   * Жизнь (вариант игры)
   * */
  lifeGame(row: number, cell: number): void {
    // resurrection: number, dying: number
    // при resurrection >= количество соседних клеток с 0 = 1
    // при dying >= количество соседних клеток с 0 = 0
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
    return index < 0 ? this.GameOptions.field - 1: index;
  }

  changeCell(i: number, j: number): void {
    this.field[i][j] ? this.field[i][j] = 0 : this.field[i][j] = 1
  }

  resetField(): void {
    this.createGameField()
  }

  trackByIndex(index: number): number {
    return index;
  }

  ngOnDestroy():void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
