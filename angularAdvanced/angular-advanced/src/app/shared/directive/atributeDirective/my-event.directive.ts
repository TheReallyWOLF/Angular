import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[myEvent]'
})
export class MyEventDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  /**
   * HostListener - ссылается на DOM элемент, который содержит директиву. В данном случае это <div>
   *   Устанавливаем обработчик на события фокуса мышки и анфокуса
   * */
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }

  private changeColor (color: string | null) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }
}
