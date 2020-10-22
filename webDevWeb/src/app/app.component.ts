import { Component } from '@angular/core';
import {NewServiceService} from "./service/new-service.service";


@Component({
  selector: 'wolf',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webDevWeb';
  constructor(svc: NewServiceService) {
    svc.consoleText("Серивис подключен");
  }
}
