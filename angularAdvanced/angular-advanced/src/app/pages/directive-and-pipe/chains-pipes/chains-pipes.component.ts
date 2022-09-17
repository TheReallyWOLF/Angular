import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-chains-pipes',
  templateUrl: './chains-pipes.component.html',
  styleUrls: ['./chains-pipes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChainsPipesComponent {
  public creationDate: Date = new Date();
}
