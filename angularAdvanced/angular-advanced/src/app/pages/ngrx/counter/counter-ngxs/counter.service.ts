import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class CounterService {
  constructor() {
  }

  getCounterDate(): Observable<number>{
    return new Observable<number>(
      subscriber => {
        subscriber.next(new Date().getTime())
      }
    );
  }
}
