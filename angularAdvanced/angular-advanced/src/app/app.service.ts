import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User, UsersService} from "./local_BD/users.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(readonly userBD: UsersService) { }
// todo wolf --сделать роли + гварды + авторизацию--
  getUser(): Observable<User> {
     const localStorageUser = localStorage.getItem('user');
     return of(JSON.parse(localStorageUser ? localStorageUser : ''));
  }
}
