import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-simple-directive',
  templateUrl: './simple-directive.component.html',
  styleUrls: ['./simple-directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleDirectiveComponent {}
