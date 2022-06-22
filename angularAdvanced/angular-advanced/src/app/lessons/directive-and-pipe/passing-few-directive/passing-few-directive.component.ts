import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-passing-few-directive',
  templateUrl: './passing-few-directive.component.html',
  styleUrls: ['./passing-few-directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassingFewDirectiveComponent {}
