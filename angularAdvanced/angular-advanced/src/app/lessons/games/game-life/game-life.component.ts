import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-game-life',
  templateUrl: './game-life.component.html',
  styleUrls: ['./game-life.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameLifeComponent implements OnInit {
  public formGroup!: FormGroup;
  public field: number[][] = [];

  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  ngOnInit(): void {

  }

  private _createForm() {
    this.formGroup = this.fb.group({
      life: new FormControl(1),
      due: new FormControl(0),
    })
  }

  createGameField(): void {
    // todo WOLF!!!
    // открывать в новой вкладке передавать значения фильтров
    this.field = [];
    for (let i = 0; i < this.formGroup.value.life; i++) {
      this.field.push([]);
      for (let j = 0; j < this.formGroup.value.life; j++) {
        this.field[i].push(j);
      }
    }
  }

}
