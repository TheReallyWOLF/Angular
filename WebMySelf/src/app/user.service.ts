import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  size = 8;

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.size+'&nat=gb')
      .pipe(map(user => user));
  }

  setSize(size){
    if(typeof(+size) === "number"){
      this.size = size;
    }
  }
}
