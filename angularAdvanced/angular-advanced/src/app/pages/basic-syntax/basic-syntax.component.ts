import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-basic-syntax',
  templateUrl: './basic-syntax.component.html',
  styleUrls: ['./basic-syntax.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSyntaxComponent {
  readonly selectors = 'селекторы';
  readonly components = 'компоненты';
  select: string = this.selectors;
}
