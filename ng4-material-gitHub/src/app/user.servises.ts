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
    return this.http.get(`https://api.github.com/users/${username}`)
      .pipe(map((response: Response) => response))
  }
}
