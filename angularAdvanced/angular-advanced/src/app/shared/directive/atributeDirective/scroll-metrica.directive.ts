import {AfterViewInit, Directive, ElementRef} from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {filter, take} from "rxjs/operators";

/**
 *
 * */
@Directive({
  selector: '[scroll]'
})
export class ScrollMetricaDirective implements AfterViewInit {
/**
 * Зпуск функции 1 раз по событию scroll без засорения памяти событием на элементе и отписка
 * */
  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    fromEvent(this.elementRef.nativeElement, 'scroll').pipe(
      // @ts-ignore
      filter((event: MouseEvent): boolean => {
        let target: HTMLElement;
        target = event.target as HTMLElement;
        return target.scrollTop > target.scrollHeight * 0.3;
      }),
      take(1)
    ).subscribe(() => {
      console.log(' запуск метрики')
    });
  }
}
