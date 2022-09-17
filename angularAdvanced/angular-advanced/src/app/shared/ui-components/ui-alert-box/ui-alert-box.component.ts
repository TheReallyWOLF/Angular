import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ui-alert-box',
  templateUrl: './ui-alert-box.component.html',
  styleUrls: ['./ui-alert-box.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ui-alert-box',
    '[class.ui-alert-box__default-light]': '"default-light" == type || !type',
    '[class.ui-alert-box__success-light]': '"success-light" == type',
    '[class.ui-alert-box__warning-light]': '"warning-light" == type',
    '[class.ui-alert-box__danger-light]': '"danger-light" == type',
  }
})

export class UiAlertBoxComponent {
  @Input()
  type: string = 'default-light';
}
