import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputComponent {
  @Input() type: string = 'text';
  @Input() disabled: boolean = true;
  @Input() name: string = 'name';
  @Input() placeholder: string = 'placeholder';
  @Input() field!: FormControl;
  @Input() label: string = ''
  @Input() size: 'xs' | 'sm' | 'lg' | 'xl' = 'lg';
// todo доделать WOLF!!! через ControlValueAccessor и стили в host?

  click() {
    console.log(this.field.valid)
  }
}
