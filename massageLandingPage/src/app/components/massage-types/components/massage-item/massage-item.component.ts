import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MassageType} from "../../massage-types.component";

@Component({
  selector: 'massage-item',
  templateUrl: './massage-item.component.html',
  styleUrls: ['./massage-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassageItemComponent {
  @Input() massageType!: MassageType;
}
