import {ChangeDetectionStrategy, Component} from '@angular/core';

export interface MassageType {
  img: string;
  title: string;
  text: string;
}

@Component({
  selector: 'massage-types',
  templateUrl: './massage-types.component.html',
  styleUrls: ['./massage-types.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassageTypesComponent {
  public readonly massageTypesArr: MassageType[] = [
    {
      img: 'assets/img/massage.png',
      title: 'загловок',
      text: 'нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа'
    }, {
      img: 'assets/img/massage.png',
      title: 'загловок',
      text: 'нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа'
    }, {
      img: 'assets/img/massage.png',
      title: 'загловок',
      text: 'нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа'
    }, {
      img: 'assets/img/massage.png',
      title: 'загловок',
      text: 'нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа нужно описание массажа'
    }
  ]
}
