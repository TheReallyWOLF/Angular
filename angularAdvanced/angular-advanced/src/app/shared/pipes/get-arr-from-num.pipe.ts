import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getArrFromNum'
})
export class GetArrFromNumPipe implements PipeTransform {

  transform(value: number): number[] {
    let arr = [];
    for (let i = 0; i < value; i++) {
      arr.push(i);
    }
    return arr;
  }

}
