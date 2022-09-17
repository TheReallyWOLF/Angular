import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {Actions} from "./state/game-life.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-life',
  templateUrl: './game-life.component.html',
  styleUrls: ['./game-life.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameLifeComponent implements OnInit {
  public formGroup!: FormGroup;
  public field: number[][] = [];
  public readonly deadRuleLabel: string = 'Количество соседей для смерти клетки';
  public readonly lifeRuleLabel: string = 'Количество соседей для рождения клетки';
  public readonly fieldLabel: string = 'Размер игрового поля';
  public readonly typeNumber: string = 'number';
  public readonly fieldLabelError: string = 'Минимум 10 максимум 300 (пожелейте браузер)';
  public readonly ruleError: string = 'от 0 (выкл) до 8';


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store) {}

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm() {
    this.formGroup = this.fb.group({
      field: new FormControl(10, {
        validators: [Validators.required, Validators.min(10),  Validators.max(300)]
      }),
      dueRule: new FormControl(1, {
        validators: [Validators.required, Validators.min(0),  Validators.max(8)]
      }),
      lifeRule: new FormControl(1, {
        validators: [Validators.required, Validators.min(0),  Validators.max(8)]
      }),
    })
  }
// обработка ощибок и ui компонент инпут доработать todo
  openGameField(): void {
    if (this.formGroup.valid) {
      this.store.dispatch(new Actions.GameLifeValue(this.formGroup.value));
      this.router.navigateByUrl('games/game-field');
      return
    }
    alert('не пройдена валидация');
  }
}
