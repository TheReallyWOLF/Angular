import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-event-directive',
  templateUrl: './event-directive.component.html',
  styleUrls: ['./event-directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDirectiveComponent {

}
