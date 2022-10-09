import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User, UsersService} from "./local_BD/users.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(readonly userBD: UsersService) { }
// todo wolf --сделать роли + гварды + авторизацию и сервер пока гвоздь заглушка--
  getUser(): Observable<string> {
     const noUser: User = {
       id: 0,
       name: 'none',
       role: 'none',
       password: 'none',
     }
     const localStorageUser = localStorage.getItem('user');
     return of(localStorageUser ? JSON.parse( localStorageUser) : noUser);
  }
}
