import { Component } from '@angular/core';
import {NewServiceService} from "./service/new-service.service";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'wolf',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webDevWeb';
  userName: string = '';
  response: any;
  constructor(private svc: NewServiceService, private http: HttpClient) {
    svc.consoleText("Серивис подключен");
  };
  search(){
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }



}
