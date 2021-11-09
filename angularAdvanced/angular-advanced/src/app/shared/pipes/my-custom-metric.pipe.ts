import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatDistance'
})

export class MyCustomMetricPipe implements PipeTransform {

  transform(sizeMeters: number, metric: boolean): string {
    let formatedSize = 0;
    let unit = '';

    if (metric) {
      formatedSize = sizeMeters / 1000;
      unit = 'km';
    } else {
      formatedSize = sizeMeters / 1609.344;
      unit = 'mi';
    }

    formatedSize = Math.round(formatedSize * 100) / 100;
    return formatedSize ? `${formatedSize} ${unit}` : '';
  }

}
