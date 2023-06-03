import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-my-data-freshess',
  templateUrl: './my-data-freshess.component.html',
  styleUrls: ['./my-data-freshess.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyDataFreshessComponent {
  public date = new Date(1636050500000);
  public dateOld = new Date(1636050500000);
}
