import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable, Subject} from "rxjs";
import {GameLifeState} from "../game-life/state/game-life.state";
import {takeUntil} from "rxjs/operators";
import {Location} from '@angular/common';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameFieldComponent implements OnInit, AfterViewInit, OnDestroy {
// todo добавить селекты поменять названия полей (добавить реверсивную игру)
  @Select(GameLifeState.deathRule$)
  readonly deathRule$!: Observable<number>;

  private deathRule: number = 10;

  private death: number = 4

  private destroy$ = new Subject<void>();

  public field: number[][] = [];

  private shadowfield: number[][] = [];

  constructor(private _location: Location) { }

  ngOnInit(): void {
    this.getDeathRule();
  }

  ngAfterViewInit(): void {

  }

  getDeathRule(): void {
    this.deathRule$
      .pipe(takeUntil(this.destroy$))
      .subscribe(deathRule => {
        this.deathRule = Number(deathRule);
        this.createGameField();
      })
  }

  createGameField(): void {
    this.field = [];
    this.shadowfield = [];
    for (let i = 0; i < this.deathRule; i++) {
      this.field.push([]);
      this.shadowfield.push([]);
      for (let j = 0; j < this.deathRule; j++) {
        this.field[i].push(0);
        this.shadowfield[i].push(0);
      }
    }
  }

  resetShadowfield(): void {
    this.shadowfield = [];
    for (let i = 0; i < this.deathRule; i++) {
      this.shadowfield.push([]);
      for (let j = 0; j < this.deathRule; j++) {
        this.shadowfield[i].push(0);
      }
    }
  }

  back():void {
    this._location.back();
  }

  start(): void {
    for (let row = 0; row < this.deathRule; row++) {
      for (let cell = 0; cell < this.deathRule; cell++) {
        // let liveCell = 0;

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

        //this.death < liveCell ? this.field[row][cell] = 1 : this.field[row][cell] = 0
      }
    }

    this.field = Object.assign([], this.shadowfield);
    this.resetShadowfield();
    console.log(this.field)
    console.log(this.shadowfield)
  }

  getChangeField(changeArrCoordinates: number[][]) {
    changeArrCoordinates.forEach(cell => {
      this.field[cell[0]][cell[1]] = cell[2];
    })
  }

  toggleSell(row: number, cell: number, reverse: boolean = false): void {
    if (reverse) return;
    this.shadowfield[this.infiniteMatrix(row)][this.infiniteMatrix(cell)] ?
      this.shadowfield[this.infiniteMatrix(row)][this.infiniteMatrix(cell)] = 0 :
      this.shadowfield[this.infiniteMatrix(row)][this.infiniteMatrix(cell)] = 1
  }

  infiniteMatrix(index: number): number {
    if (index === this.deathRule) {
      return 0;
    }
    console.log(index, this.deathRule)
    return index < 0 ? this.deathRule - 1: index;

  }

  changeCell(i: number, j: number): void {
    this.field[i][j] ? this.field[i][j] = 0 : this.field[i][j] = 1
  }

  ngOnDestroy():void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
