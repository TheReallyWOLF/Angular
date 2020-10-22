import { Component, OnInit } from '@angular/core';
import {NewServiceService} from "../../service/new-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(svc: NewServiceService) {
    svc.consoleText("Меня можно испольльзовать в любом компоненте я как ViewModel");
  }

  ngOnInit(): void {
  }

}
