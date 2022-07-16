import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-presentation-page',
  templateUrl: './game-presentation-page.component.html',
  styleUrls: ['./game-presentation-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamePresentationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
