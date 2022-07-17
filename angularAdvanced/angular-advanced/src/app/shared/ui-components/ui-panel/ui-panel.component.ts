import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ui-panel',
  templateUrl: './ui-panel.component.html',
  styleUrls: ['./ui-panel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiPanelComponent {
  @Input() frameSize: 'xs' | 'sm' | 'lg' | 'xl' = 'sm';
  @Input() background: 'main' | 'main-light' | 'none' = 'none';
}
