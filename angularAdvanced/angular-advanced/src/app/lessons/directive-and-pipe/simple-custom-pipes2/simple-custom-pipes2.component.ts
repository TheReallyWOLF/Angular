import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-simple-custom-pipes2',
  templateUrl: './simple-custom-pipes2.component.html',
  styleUrls: ['./simple-custom-pipes2.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCustomPipes2Component{
  value!:any;
}
