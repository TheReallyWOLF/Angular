import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FieldOptions, ShipDeck} from "../shared/models/game.models";
import {SeaGameOptions} from "../shared/models/sea-game.models";

@Component({
  selector: 'game-sea-battle',
  templateUrl: './game-sea-battle.component.html',
  styleUrls: ['./game-sea-battle.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// TODO WOLF начало начал - сделать настройку перед игрой
export class GameSeaBattleComponent implements OnInit {

  private readonly deck: number[] = [0, 1, 2, 3, 4, 5];

  // реализовать матрицу TODO в которой будут лежать поля (мб и не надо)
  public deckMatrix!: number[][];

  public toggle: boolean = true;
  public oneDeckArr!: number[];
  public twoDeckArr!: number[];
  public threeDeckArr!: number[];
  public fourDeckArr!: number[];
  public fiveDeckArr!: number[];
  public readonly fieldOptions: FieldOptions[] = [{
    name: '10 x 10',
    value: 10
  },{
    name: '15 x 15',
    value: 15
  },{
    name: '20 x 20',
    value: 20
  },{
    name: '25 x 25',
    value: 25
  },{
    name: '30 x 30',
    value: 30
  }];
  // todo типизацию
  public options!: SeaGameOptions;

  ngOnInit(): void {
    this.setDefault();
  }

  public setGameField(field: FieldOptions): void {
    this.options.field = field;
    this.setOptionsDeck(field.value);
    this.setSelectedDeck();
  }

  public setNumberShips(event: {fiveDeckCount: number, deckName: ShipDeck}): void {
    this.options[event.deckName] = event.fiveDeckCount;
  }

  private setSelectedDeck(): void {
    this.options.oneDeck = this.getTopicalMeaning(this.options.oneDeck, this.oneDeckArr.length - 1);
    this.options.twoDeck = this.getTopicalMeaning(this.options.twoDeck, this.twoDeckArr.length - 1);
    this.options.threeDeck = this.getTopicalMeaning(this.options.threeDeck, this.threeDeckArr.length - 1);
    this.options.fourDeck = this.getTopicalMeaning(this.options.fourDeck, this.fourDeckArr.length - 1);
    this.options.fiveDeck = this.getTopicalMeaning(this.options.fiveDeck, this.fiveDeckArr.length - 1);
  }

  private setOptionsDeck(fieldValue: number): void {
    const multiplicityFive: number = fieldValue / 5;
    const deckLength = this.deck.length;
    this.oneDeckArr = this.getDeckSlice(multiplicityFive + 3, deckLength);
    this.twoDeckArr = this.getDeckSlice(multiplicityFive + 2, deckLength)
    this.threeDeckArr = this.getDeckSlice(multiplicityFive + 1, deckLength)
    this.fourDeckArr = this.getDeckSlice(multiplicityFive, deckLength)
    this.fiveDeckArr = this.getDeckSlice(multiplicityFive - 1, deckLength - 1)
  }

  private getDeckSlice(end: number, limit: number): number[] {
    return this.deck.slice(0, this.getTopicalMeaning(end, limit));
  }

  private getTopicalMeaning(actual: number, max: number): number {
    return actual > max ? max : actual;
  }

  public setDefault(): void {
    this.options = {
      oneDeck: 4,
      twoDeck: 3,
      threeDeck: 2,
      fourDeck: 1,
      fiveDeck: 0,
      field: {
        name: '10 x 10',
        value: 10
      }
    }
    this.setOptionsDeck(this.options.field.value);
  }

  public start(): void {
    console.log(this.options)
    this.toggle = !this.toggle;
  }

  public newGame(): void {
    console.log('newGame')
  }

}
