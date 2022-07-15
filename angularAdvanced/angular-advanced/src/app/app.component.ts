import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getUser().subscribe(res => {
      console.log(res)
    });
  }
}
