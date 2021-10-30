import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class MyColorDirective {
// собственная директива замены цвета у элемента
/**
 * elementRef - ссылка на дом элемент дерева к которму применена директива
 * renderer - класс позволяющий манипулировать шаблоном
 **/
  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', 'red');
  }
}
