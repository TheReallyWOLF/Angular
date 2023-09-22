import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SubMenu} from "./models/directive-and-pipe.models";

@Component({
  selector: 'app-directive-and-pipe',
  templateUrl: './directive-and-pipe.component.html',
  styleUrls: ['./directive-and-pipe.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectiveAndPipeComponent {
  public kindOfDirective: string = 'attribute';
  public checked: number = 1;
  public readonly subMenu: SubMenu[] = [
    {
      name: 'Атрибутные директивы',
      active: 'attribute'
    }, {
      name: 'Структурные директивы',
      active: 'structural'
    }, {
      name: ' Пайпы (фильты)',
      active: 'pipe'
    }
  ]
  changeKindOfDirective(kind: string): void {
    this.checked = 1;
    this.kindOfDirective = kind;
  }
}
