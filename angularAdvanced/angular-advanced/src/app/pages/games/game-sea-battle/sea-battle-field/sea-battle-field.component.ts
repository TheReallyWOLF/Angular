import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SeaGameOptions} from "../../shared/models/sea-game.models";

@Component({
  selector: 'sea-battle-field',
  templateUrl: './sea-battle-field.component.html',
  styleUrls: ['./sea-battle-field.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeaBattleFieldComponent implements OnInit {
  @Input() seaGameOptions!: SeaGameOptions;

  @Output() toggle = new EventEmitter<void>();
  @Output() newGame = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }


  newGameEmit(): void {
    this.newGame.emit();
  }

  toggleEmit(): void {
    this.toggle.emit();
  }
}
