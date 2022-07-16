import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent {
  @Input() type: 'primary-success' | 'primary-danger' = 'primary-success';
  @Input() size: 'xs' | 'sm' | 'lg' | 'xl' = 'lg';

  @Input() disabled: boolean = false;
}
