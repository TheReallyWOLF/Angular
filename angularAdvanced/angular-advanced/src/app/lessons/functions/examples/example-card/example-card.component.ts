import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'example-card',
  templateUrl: './example-card.component.html',
  styleUrls: ['./example-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleCardComponent {
  @Input() title?: string;
  @Input() subTitle?: string;
}

