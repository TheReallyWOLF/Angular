import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-simple-custom-pipes',
  templateUrl: './simple-custom-pipes.component.html',
  styleUrls: ['./simple-custom-pipes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCustomPipesComponent {
  value!: string;
}
