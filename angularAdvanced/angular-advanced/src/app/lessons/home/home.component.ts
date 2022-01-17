import {Component} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  /**
   * startDay - начало дня
   * date - точное время
   * maxDate - завтрашний день (используеться в качестве ограничетиля дата пикера)
   * dateOld - вчерашний день
   * oldWeek - на неделе
   * dateDefault - ручная настройка методами js
   * */
  startDay = new Date().setHours(0, 0, 0, 0);
  date = new Date();
  dateOld = new Date(Date.now() - 86400000);
  oldWeek = new Date(Date.now() - 86400000 * 3);
  dateDefault = new Date().toLocaleString("ru", {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })
  maxDate = moment(new Date(this.startDay)).format('YYYY-MM-DD');

  changeData(event: Event): void {
    this.date = new Date((event.target as HTMLInputElement).value);
  }

}
