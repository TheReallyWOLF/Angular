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

  @Select(GameLifeState.deathRule$)
  readonly deathRule$!: Observable<number>;

  private deathRule: number = 10;

  private destroy$ = new Subject<void>();

  public field: number[][] = [];

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
        this.deathRule = deathRule;
        this.createGameField();
      })
  }

  createGameField(): void {
    this.field = [];
    for (let i = 0; i < this.deathRule; i++) {
      this.field.push([]);
      for (let j = 0; j < this.deathRule; j++) {
        this.field[i].push(j);
      }
    }
  }

  back():void {
    this._location.back();
  }

  start(): void {
    alert('Запуск игры (не реализован)')
  }

  ngOnDestroy():void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
