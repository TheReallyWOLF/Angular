import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngxs/store";
import {Actions} from "./state/game-inverse-matrix.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-life',
  templateUrl: './game-inverse-matrix.component.html',
  styleUrls: ['./game-inverse-matrix.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameInverseMatrixComponent implements OnInit {
  public formGroup!: FormGroup;
  public field: number[][] = [];
  public readonly fieldLabel: string = 'Размер игрового поля';
  public readonly typeNumber: string = 'number';
  public readonly fieldLabelError: string = 'Минимум 10 максимум 300 (пожалейте браузер)';


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
      })
    })
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
