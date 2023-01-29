import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'css-counter',
  templateUrl: './css-counter.component.html',
  styleUrls: ['./css-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssCounterComponent {}
