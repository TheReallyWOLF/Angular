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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store) {
    this._createForm();
  }

  ngOnInit(): void {

  }

  private _createForm() {
    this.formGroup = this.fb.group({
      life: new FormControl(10, {
        validators: [Validators.required, Validators.min(10),  Validators.max(333)]
      }),
      due: new FormControl(0),
    })
  }
// обработка ощибок и ui компонент инпут доработать todo
  openGameField(): void {
    if (this.formGroup.valid) {
      this.store.dispatch(new Actions.DeathRule(this.formGroup.value.life));
      this.router.navigateByUrl('games/game-field');
      return
    }
    console.log('не пройдена валидация')
  }
}
