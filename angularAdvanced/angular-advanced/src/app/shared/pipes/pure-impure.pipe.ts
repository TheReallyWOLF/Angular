import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'purePipe',
  pure: true
  /**
   * данный фильтр будет срабатывать только если
   * будет изменено входное значение -
   * изменено примитианое значение или
   * изменена ссылка на объект
   * */
})

export class MyPurePipe implements PipeTransform {
  transform(value: any): string {
    return value.firstName + ' ' + value.lastName;
  }
}

@Pipe({
  name: 'impurePipe',
  pure: false
  /**
   * данный фильтр будет срабатывать при каждой проверке изменений
   * засоряет память исполльзовать только по необходимости
   * */
})

export class MyImpurePipe implements PipeTransform {
  transform(value: any): string {
    return value.firstName + ' ' + value.lastName;
  }
}
