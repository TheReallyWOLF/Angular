import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'ui-panel-box',
  templateUrl: './ui-panel-box.component.html',
  styleUrls: ['./ui-panel-box.component.sass'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': "ui-panel"}
})
export class UiPanelBoxComponent {
  @Input()
  @HostBinding('class.hide-padding')
  isHidePadding: boolean = false;

  @Input()
  @HostBinding('class.hide-shadow')
  isHideShadow: boolean = false;

  @Input()
  @HostBinding('class.padding-off')
  paddingOff: boolean = false;
}
