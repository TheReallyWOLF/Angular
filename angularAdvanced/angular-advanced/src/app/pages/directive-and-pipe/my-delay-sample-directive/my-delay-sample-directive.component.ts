import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-my-delay-sample-directive',
  templateUrl: './my-delay-sample-directive.component.html',
  styleUrls: ['./my-delay-sample-directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyDelaySampleDirectiveComponent {
}
