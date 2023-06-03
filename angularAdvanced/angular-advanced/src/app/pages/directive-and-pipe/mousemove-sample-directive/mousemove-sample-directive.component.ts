import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-mousemove-sample-directive',
  templateUrl: './mousemove-sample-directive.component.html',
  styleUrls: ['./mousemove-sample-directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MousemoveSampleDirectiveComponent {}
