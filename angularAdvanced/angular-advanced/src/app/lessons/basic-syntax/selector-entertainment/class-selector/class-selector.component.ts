import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: '.app-class-selector',
  templateUrl: './class-selector.component.html',
  styleUrls: ['./class-selector.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassSelectorComponent {}
