import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-host-binding-sample-directive',
  templateUrl: './host-binding-sample-directive.component.html',
  styleUrls: ['./host-binding-sample-directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostBindingSampleDirectiveComponent {}
