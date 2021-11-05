import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'freshnessDate'
})
/**
 * Форматирует дату в зависимости от текщего времени (сегодня, вчера, на неделе + дата время или полный месяц дата + время)
 * */
export class FreshnessDatePipe implements PipeTransform {
  private dateNow = new Date()
  private oneDay: number = 1000 * 60 * 60 * 24;
  private startDay: number = new Date().setHours(0, 0, 0, 0);
  private startYesterday: number = new Date(new Date().getTime() - this.oneDay).setHours(0, 0, 0, 0);
  private endYesterday: number = new Date(new Date().getTime() - this.oneDay).setHours(23, 59, 59, 999);


  transform(value: Date): string {

    const dateNews: number = value.getTime();
    let options: any = {
      hour: 'numeric',
      minute: 'numeric'
    }
    let dateToString: string;
    let freshnessDate: string = '';

    if (this.startDay <= dateNews && this.dateNow.getTime() >= dateNews) {
      freshnessDate = 'Сегодня, ';
    } else if (this.startYesterday <= dateNews && this.endYesterday >= dateNews) {
      freshnessDate = 'Вчера, ';
    } else if (this.getMonday(this.dateNow) <= dateNews) {
      freshnessDate = 'На этой неделе';
    } else {
      options = {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }
    }
    dateToString = this.getDateToString(value, options);
    return `${freshnessDate} ${dateToString}`;
  }
  /**
   * Начало недели в мс
   * */
  getMonday( date: Date ): number {
    const day = date.getDay() || 7;
    if( day !== 1 )
      date.setHours(-24 * (day - 1));
    return date.setHours(0, 0, 0, 0);
  }
/**
 * Текущая дата в формате строки
 * */
  getDateToString(date: Date, options: any): string {
    return date.toLocaleString("ru", options)
  }
}
