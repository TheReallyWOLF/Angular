import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {interval, of} from 'rxjs';
import {delay, take} from 'rxjs/operators';
import {takeUntilDestroyed} from "../../../shared/rxjsPipe/takeUntilDestroyed";

interface Card {
  id: number,
  url: string,
  active: boolean
}

interface CoincidenceAction {
  name: string;
  coincidences: number;
}

interface DifficultyActions {
  name: string;
  difficulty: number;
}

export interface MemoryGameOptions {
  difficulty: number;
  coincidences: number;
}

@Component({
  selector: 'memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoryGameComponent {
  readonly difficultyGameActions: DifficultyActions[] = [
    {name: 'очень легко', difficulty: 2},
    {name: 'легко', difficulty: 4},
    {name: 'нормально', difficulty: 6},
    {name: 'сложно', difficulty: 8},
    {name: 'очень сложно', difficulty: 11},
  ];
  readonly coincidencesGameActions: CoincidenceAction[] = [
    {name: 'пара', coincidences: 2},
    {name: 'тройка', coincidences: 3},
    {name: 'четверка', coincidences: 4},
    {name: 'пятерка', coincidences: 5}
  ];
  readonly shirt = 'assets/images/memory-game/card/shirt.png';
  readonly cardArray: string[] = [
    'assets/images/memory-game/card/1.png',
    'assets/images/memory-game/card/2.png',
    'assets/images/memory-game/card/3.png',
    'assets/images/memory-game/card/4.png',
    'assets/images/memory-game/card/5.png',
    'assets/images/memory-game/card/6.png',
    'assets/images/memory-game/card/7.png',
    'assets/images/memory-game/card/8.png',
    'assets/images/memory-game/card/9.png',
    'assets/images/memory-game/card/10.png',
    'assets/images/memory-game/card/11.png',
  ];

  openWinModal: boolean = false;
  movesCounts: number = 0;
  isGameStarted: boolean = false;
  activeCards: Card[] = [];
  currentImage: string = '';
  foundImages: string[] = [];
  lock: boolean = false;
  options: MemoryGameOptions = {
    difficulty: 2,
    coincidences: 2
  }
  gameCards: Card[] = [];
  gameCardImages: string[] = [];
  gameCardArray = this.cardArray.slice(0, this.options.difficulty);

  constructor(private ref: ChangeDetectorRef) {}

  /**
   * Начало игры, сброс настроек, построение карточек, анимация появления
   * */
  startGame(): void {
    this.resetGameProgress();

    if (this.isGameStarted) {
      this.toggleGameField();
      return;
    }

    this.showCardsOneByOne();
  }

  /**
   * Создает карточки перед игрой
   * И показывает по одной карточке каждые delay секунд и потом по дной их закрывает
   * */
  showCardsOneByOne(delay: number = 150) {
    this.lock = true;
    this.getStarted();
    this.toggleGameField();

    const numbers = interval(delay);
    const takeFourNumbers = numbers.pipe(take(this.gameCards.length * 2));

    takeFourNumbers.subscribe(index => {
        index >= this.gameCards.length ? this.gameCards[index - this.gameCards.length].active = false : this.gameCards[index].active = true;
        this.ref.markForCheck();
      },
      () => {
        this.resetGameProgress();
        this.toggleGameField();
        window.alert('Произошла ошибка игра перезагружена');
      },
      () => {
        this.lock = false;
      });
  }

  toggleGameField(): void {
    this.isGameStarted = !this.isGameStarted;
  }

  selectCard(card: Card): void {
    if (this.lock) return;

    // если ничего не выбрано выбираем
    if (!this.currentImage) {
      this.movesCounts++;
      this.activeCards.push(card);
      this.currentImage = card.url;
      card.active = true;
      return;
    }
    // если текущие карточки уже найдены ничего не делаем
    if (this.foundImages.find(image => image === card.url)) return;

    this.openCardAnimate(card);
  }

  openCardAnimate(card: Card): void {
    this.movesCounts++;
    card.active = true;
    this.lock = true;

    of(card).pipe(
      delay(200),
      takeUntilDestroyed(this))
      .subscribe((card) => this.checkCards(card));
  }

  checkCards(card: Card) {
    this.activeCards.push(card);
    // если открыл другую картинку закрываются все найденные в этой цепи картинки
    if (this.currentImage !== card.url) {
      this.currentImage = '';
      this.activeCards = this.activeCards.map(card => {
        card.active = false;
        return card;
      });
      this.activeCards = [];
    }

    // если цепь одинаковых картинок равна coincidences (количество одинаковых карточек) то открываем их навсегда
    if (this.activeCards.length === this.options.coincidences) {
      this.foundImages.push(this.currentImage);
      this.activeCards = [];
      this.currentImage = '';
    }

    this.lock = false;
    this.ref.markForCheck();

    this.checkIsGameOver()
  }

  checkIsGameOver(): void {
    if (this.foundImages.length === this.options.difficulty) this.openWinModal = true;
  }


  getStarted(): void {
    this.getGameCards(this.options.coincidences);
    this.shuffleCardArray();
  }

  shuffleCardArray(): void {
    this.gameCards.sort(() => 0.5 - Math.random());
  }

  closeModal(): void {
    this.openWinModal = !this.openWinModal;
    this.toggleGameField();
    // TODO wolf записать в стор счет и сделать кнопки с таблицей из стора
  }


  /**
   * Создание массива карточек для игры рекурсией
   * */
  getGameCards(coincidences: number): void {
    if (coincidences === 0) {
      this.gameCards = this.gameCardImages.map((card, index) => {
        return {
          id: index,
          url: card,
          active: false
        }
      });
      return;
    }

    this.gameCardImages.push(...this.gameCardArray);
    this.getGameCards(coincidences - 1);
  }

  changeDifficulty(difficulty: number): void {
    this.options.difficulty = difficulty;
    this.gameCardArray = this.cardArray.slice(0, this.options.difficulty);
  }

  resetGameProgress(): void {
    this.foundImages = [];
    this.gameCards = [];
    this.gameCardImages = [];
    this.currentImage = '';
    this.movesCounts = 0;
  }
}
