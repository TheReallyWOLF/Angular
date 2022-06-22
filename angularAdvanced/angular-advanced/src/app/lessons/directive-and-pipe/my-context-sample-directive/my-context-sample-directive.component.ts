import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-context-sample-directive',
  templateUrl: './my-context-sample-directive.component.html',
  styleUrls: ['./my-context-sample-directive.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyContextSampleDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
