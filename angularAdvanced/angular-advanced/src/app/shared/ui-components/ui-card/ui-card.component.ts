import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.sass'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiCardComponent {
  @Input() rounding: boolean = true;
  @Input() shadow: boolean = true;
  @Input() size: 'xs' | 'sm' | 'lg' | 'xl' = 'sm';
}
