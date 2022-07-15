import { Injectable } from '@angular/core';

/**
 * Имитация БД таблица юзеров
 * */
export interface User {
  id: number;
  name: string;
  role: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public readonly users: User[] = [
    {
      id: 1,
      name: 'Wolf',
      role: 'SuperUser',
      password: '12345678',
    }, {
      id: 2,
      name: 'Admin',
      role: 'Admin',
      password: 'Admin',
    }, {
      id: 3,
      name: 'Manager',
      role: 'Employee',
      password: 'IamUseless',
    }, {
      id: 4,
      name: 'UserName',
      role: 'User',
      password: 'UserPassword',
    }
  ]
}
