import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { map } from 'rxjs/operators';
import {Injectable} from "@angular/core";


@Injectable()
export class UserServises {
  constructor(private http: HttpClient) {
  }

  getUser(username:string): Observable<any>{
    return this.http.get(`https://api.github.com/users/${username}?client_id=2ab2c443da5b0d6ecc6d&client_secret=22ce247e0792caf8516e420b09a79e9f9c97fcc7`)
      .pipe(map((response: Response) => response))
  }
}
