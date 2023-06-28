import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ShipDeck} from "../../shared/models/game.models";

@Component({
  selector: 'sea-battle-ship',
  templateUrl: './sea-battle-ship.component.html',
  styleUrls: ['./sea-battle-ship.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeaBattleShipComponent {
  @Input() deckArr!: number[];
  @Input() deckName!: ShipDeck;
  @Input() deck!: number;
  @Input() label!: string;

  @Output() setNumberShips = new EventEmitter<{fiveDeckCount: number, deckName: ShipDeck}>();

  setNumberShipsEmit(fiveDeckCount: number) {
    this.setNumberShips.emit({deckName: this.deckName, fiveDeckCount});
  }
}
