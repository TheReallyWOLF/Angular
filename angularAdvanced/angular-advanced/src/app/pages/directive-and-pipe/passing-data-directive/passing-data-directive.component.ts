import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-passing-data-directive',
  templateUrl: './passing-data-directive.component.html',
  styleUrls: ['./passing-data-directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassingDataDirectiveComponent {
  blue = 'blue'
}
