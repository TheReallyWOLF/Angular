import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent {
  @Input() fitContent: boolean = false;
  @Input() type: 'primary-success' | 'primary-danger' | 'primary-menu' = 'primary-success';
  @Input() size: 'xs' | 'sm' | 'lg' | 'xl' = 'lg';
  @Input() disabled: boolean | null = false;
  @Input() active: boolean = false;
}
