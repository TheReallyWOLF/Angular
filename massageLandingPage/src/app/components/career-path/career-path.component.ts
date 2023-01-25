import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'career-path',
  templateUrl: './career-path.component.html',
  styleUrls: ['./career-path.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerPathComponent {
  public readonly careerItemArr: string[] = [
    '1992-2003г. Спорт комплекс «Энергия» - <b>тренер</b>',
    '1995-2003г. Спорт комплекс «Энергия» - <b>массажист</b>',
    '2004-2010г. Частная практика - <b>массажист</b>',
    '2011-2014г. Салон красоты «Шведский центр» - <b>массажист</b>',
    '2014-2016г. Салон красоты «Колорит» - <b>массажист</b>',
    '2017г. - Центр красоты и здоровья «Magic SPA» - <b>массажист</b>',
    '2017-2022г. Салон красоты «Визави» - <b>массажист</b>',
    '2022г. –Салон красоты «Максимус». «OLA центр красоты» - <b>массажист</b>'
  ]
}
