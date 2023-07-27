import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ReactiveFormsModule, UntypedFormControl} from "@angular/forms";

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.sass'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule
  ]
})
export class UiInputComponent {
  @Input() type: string = 'text';
  @Input() disabled: boolean = true;
  @Input() name: string = 'name';
  @Input() placeholder: string = 'placeholder';
  @Input() field!: UntypedFormControl;
  @Input() label: string = '';
  @Input() size: 'xs' | 'sm' | 'lg' | 'xl' = 'lg';
  @Input() error: string = 'Валидация не пройдена';
  @Input() borderError: boolean = false;
// todo доделать WOLF!!! через ControlValueAccessor и стили в host?

}
