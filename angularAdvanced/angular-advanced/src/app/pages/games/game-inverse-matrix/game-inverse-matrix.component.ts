import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {Actions} from "./state/game-inverse-matrix.actions";
import {Router} from "@angular/router";
import {DropdownItem} from "../../../shared/ui-components/ui-dropdown/ui-dropdown.component";

export enum GameRule {
  INVERTMATRIX = 'Инверсная матрица',
  LIFEGAME = 'Игра жизнь'
}

@Component({
  selector: 'app-game-life',
  templateUrl: './game-inverse-matrix.component.html',
  styleUrls: ['./game-inverse-matrix.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameInverseMatrixComponent implements OnInit {
  public formGroup!: UntypedFormGroup;
  public field: number[][] = [];
  public readonly fieldLabel: string = 'Размер игрового поля';
  public readonly typeNumber: string = 'number';
  public readonly fieldLabelError: string = 'Минимум 10 максимум 300 (пожалейте браузер)';
  public readonly ruleError: string = 'Соседних клеток не бывает меньше 0 и больше 8';
  public readonly gameRuleInvertMatrix: string = 'Необходимо ввести количество ячеек в поле - будет создано квадратное поле с равной длинной и шириной далее кликнуть на любые ячейку(и) что бы обозначить "живые клетки" они будут помечены цветом при клике. Поле этого настройка закончена и можно приступать к старту. Одно нажатие кнопки ЗАПУСТИТЬ = один пересчет поля. Кликаем на кнопку и любуемся результатом игры в рекурсивную матрицу. Поменять клетки (выключить их или включить) можно в любой момент.'
  public readonly gameRuleLifeGame: string = 'Заполняем правила игры - смерть от перенаселения и смерть от одиночества указывает количество живых клеток для смерти текущей по формуле: смерть от одиночества < клетка остаеться живой < смерть от перенаселения. Количество живых клеток для рождения новой - определяет правила при каком количестве соседних живых клеток - мертвая клетка становиться живой. По умолчанию заполнены "идеальные" правила игры при которых она создавалась но есть возможность настроить пересчет по своему вкусу.'
  public readonly options: DropdownItem[] = [
    {
      id: 1,
      value: GameRule.INVERTMATRIX,
    },{
      id: 2,
      value: GameRule.LIFEGAME,
    }
  ]
  public selectedGame: DropdownItem = this.options[0];
  public selectedGameRule = this.gameRuleInvertMatrix;

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private store: Store) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      field: new UntypedFormControl(10, {
        validators: [Validators.required, Validators.min(10),  Validators.max(300)]
      }),
      gameRule: new UntypedFormControl(GameRule.INVERTMATRIX, {
        validators: [Validators.required]
      }),
      deathOverpopulation: new UntypedFormControl(3, {
        validators: [Validators.required, Validators.min(0), Validators.max(8)]
      }),
      deathLoneliness: new UntypedFormControl(1, {
        validators: [Validators.required, Validators.min(0), Validators.max(8)]
      }),
      newLifeRule: new UntypedFormControl(3, {
        validators: [Validators.required, Validators.min(0), Validators.max(8)]
      })
    })
  }

  setGameRule(select: DropdownItem):void {
    this.selectedGame = select;
    this.formGroup.controls['gameRule'].setValue(select.value);

    switch (select.value) {
      case GameRule.INVERTMATRIX: this.selectedGameRule = this.gameRuleInvertMatrix; break;
      case GameRule.LIFEGAME: this.selectedGameRule = this.gameRuleLifeGame; break;

      default: this.selectedGameRule = this.gameRuleInvertMatrix; break;
    }
  }

// обработка ощибок и ui компонент инпут доработать todo
  openGameField(): void {
    if (this.formGroup.valid) {
      this.store.dispatch(new Actions.gameValue(this.formGroup.value));
      this.router.navigateByUrl('games/game-field');
      return
    }
    alert('не пройдена валидация');
  }
}
