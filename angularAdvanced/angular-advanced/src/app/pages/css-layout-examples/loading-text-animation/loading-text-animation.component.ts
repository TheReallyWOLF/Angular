import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'loading-text-animation',
  templateUrl: './loading-text-animation.component.html',
  styleUrls: ['./loading-text-animation.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingTextAnimationComponent {}
