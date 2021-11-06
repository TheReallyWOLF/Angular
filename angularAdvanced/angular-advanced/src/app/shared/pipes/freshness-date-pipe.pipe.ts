import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'freshnessDate'
})
/**
 * Форматирует дату в зависимости от текщего времени (сегодня, вчера, на неделе + дата время или полный месяц дата + время)
 * Все переменные надо объявлять внутри метода трансформ тк
 * пайпы задуманы, как чистые функции, т/е без сохранения состояния, иначе они могут работать не корректно
 * */
export class FreshnessDatePipe implements PipeTransform {

  transform(value: Date): string {
    const dateNow: Date = new Date();
    const oneDay: number = 1000 * 60 * 60 * 24;
    const startDay: number = new Date().setHours(0, 0, 0, 0);
    const startYesterday: number = new Date(new Date().getTime() - oneDay).setHours(0, 0, 0, 0);
    const endYesterday: number = new Date(new Date().getTime() - oneDay).setHours(23, 59, 59, 999);
    const dateNews: number = value.getTime();
    let options: any = {
      hour: 'numeric',
      minute: 'numeric'
    };
    let dateToString: string;
    let freshnessDate: string = '';

    if (startDay <= dateNews && dateNow.getTime() >= dateNews) {
      freshnessDate = 'Сегодня, ';
    } else if (startYesterday <= dateNews && endYesterday >= dateNews) {
      freshnessDate = 'Вчера, ';
    } else if (this.getMonday(dateNow) <= dateNews) {
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
