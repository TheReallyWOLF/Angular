import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FieldOptions, ShipDeck} from "../shared/models/game.models";

@Component({
  selector: 'game-sea-battle',
  templateUrl: './game-sea-battle.component.html',
  styleUrls: ['./game-sea-battle.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// TODO WOLF начало начал - сделать настройку перед игрой
export class GameSeaBattleComponent implements OnInit {

  private readonly deck: number[] = [0, 1, 2, 3, 4, 5];

  // реализовать матрицу TODO
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
  public options: {[name: string]: any} = {
    oneDeck: 5,
    twoDeck: 4,
    threeDeck: 3,
    fourDeck: 2,
    fiveDeck: 1,
    field: {
      name: '10 x 10',
      value: 10
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.setDefault();
  }

  public setGameField(field: FieldOptions) {
    this.setOptionsDeck(field.value);
    this.options.field = field;
  }

  public setNumberShips(classShips: ShipDeck, count: number) {
    this.options[classShips] = count;
  }

  private setOptionsDeck(fieldValue: number) {
    const multiplicityFive: number = fieldValue / 5;
    this.oneDeckArr = this.deck;
    this.twoDeckArr = this.deck.slice(0, multiplicityFive);
    this.threeDeckArr = this.deck.slice(0, multiplicityFive);
    this.fourDeckArr = this.deck.slice(0, multiplicityFive);
    this.fiveDeckArr = this.deck.slice(0, multiplicityFive > 4 ? 3 : 2);
  }

  private setDefault(): void {
    console.log('найстройки морского боя по умолчанию');
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

  reset(): void {
  }

  start(): void {
    console.log(this.options)
    this.toggle = !this.toggle;
  }

}
