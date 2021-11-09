import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myCustom'
})

export class MyCustomPipe implements PipeTransform {

  transform(value: any): string {
    return value ? `[ ${value} ]` : '';
  }

}
