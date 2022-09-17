import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable, Subject} from "rxjs";
import {GameLifeOptions, GameLifeState} from "../game-life/state/game-life.state";
import {takeUntil} from "rxjs/operators";
import {Location} from '@angular/common';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameFieldComponent implements OnInit, AfterViewInit, OnDestroy {

  @Select(GameLifeState.gameLifeOptions$)
  readonly gameLifeOptions$!: Observable<GameLifeOptions>;
  public gameLifeOptions: GameLifeOptions = {
    field: 10,
    dueRule: 1,
    lifeRule: 1
  };
  public field: number[][] = [];
  private shadowField: number[][] = [];

  private destroy$ = new Subject<void>();
  constructor(private _location: Location,
              private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getDeathRule();
  }

  ngAfterViewInit(): void {

  }
// todo строка!?
  getDeathRule(): void {
    this.gameLifeOptions$
      .pipe(takeUntil(this.destroy$))
      .subscribe(gameLifeOptions => {
        this.gameLifeOptions = {
          field: Number(gameLifeOptions.field),
          dueRule: Number(gameLifeOptions.dueRule),
          lifeRule: Number(gameLifeOptions.lifeRule),
        };
        this.createGameField();
      })
  }

  createGameField(): void {
    this.field = [];
    this.shadowField = [];
    for (let i = 0; i < this.gameLifeOptions.field; i++) {
      this.field.push([]);
      this.shadowField.push([]);
      for (let j = 0; j < this.gameLifeOptions.field; j++) {
        this.field[i].push(0);
        this.shadowField[i].push(0);
      }
    }
  }

  resetShadowField(): void {
    this.shadowField = [];
    for (let i = 0; i < this.gameLifeOptions.field; i++) {
      this.shadowField.push([]);
      for (let j = 0; j < this.gameLifeOptions.field; j++) {
        this.shadowField[i].push(0);
      }
    }
  }

  back():void {
    this._location.back();
  }

  start(): void {
    for (let row = 0; row < this.gameLifeOptions.field; row++) {
      for (let cell = 0; cell < this.gameLifeOptions.field; cell++) {

       this.reverseGame(row, cell);

      }
    }

    this.field = Object.assign([], this.shadowField);
    this.resetShadowField();
  }

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

  toggleSell(row: number, cell: number, reverse: boolean = false): void {
    if (reverse) return;
    this.shadowField[this.infiniteMatrix(row)][this.infiniteMatrix(cell)] ?
      this.shadowField[this.infiniteMatrix(row)][this.infiniteMatrix(cell)] = 0 :
      this.shadowField[this.infiniteMatrix(row)][this.infiniteMatrix(cell)] = 1
  }

  infiniteMatrix(index: number): number {
    if (index === this.gameLifeOptions.field) {
      return 0;
    }
    return index < 0 ? this.gameLifeOptions.field - 1: index;
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
