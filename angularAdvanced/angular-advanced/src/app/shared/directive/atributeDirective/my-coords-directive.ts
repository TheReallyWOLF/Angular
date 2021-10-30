import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[myCoords]'
})
export class MyCoordsDirective {

  constructor(private elementRef: ElementRef) {
  }

  /**
   * Установка обработчкика на событие движения мыши в качестве параметра объекта $event
   * */
  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    this.elementRef.nativeElement.innerHTML = `X: ${event.offsetX} Y: ${event.offsetY}`;
  }

}
