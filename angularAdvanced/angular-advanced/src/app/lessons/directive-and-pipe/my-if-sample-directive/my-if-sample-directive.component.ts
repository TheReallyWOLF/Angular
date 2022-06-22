import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-my-if-sample-directive',
  templateUrl: './my-if-sample-directive.component.html',
  styleUrls: ['./my-if-sample-directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyIfSampleDirectiveComponent {
  visible: boolean = false;

  changeVisibility(){
    this.visible = !this.visible;
  }
}
