import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiInputComponent {
  @Input() type: string = 'text';
  @Input() field!: FormControl;
// todo доделать
  console() {
    this.field.valueChanges.subscribe(val => {
      console.log(val)
    })
  }
}
