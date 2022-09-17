import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: '[app-attribute-selector]',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributeSelectorComponent {}
