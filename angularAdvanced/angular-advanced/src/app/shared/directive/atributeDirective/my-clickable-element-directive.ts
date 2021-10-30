import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[myClickableElement]'
})
export class MyClickableElementDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(this.elementRef.nativeElement,'cursor','pointer');
  }
  /**
   * HostBinding - позволяет выполнить привязку свойства к host элементу если
   * isClicked = true то для хотс элемента будет применен класс pressed
   * аналогия директивы шаблона [class.pressed]="isClicked"
   * */
  @HostBinding('class.pressed') isClicked: boolean = false;

  @HostListener('mousedown') onMouseDown() {
    this.isClicked = true;
  }

  @HostListener('mouseup') onMouseUp() {
    this.isClicked = false;
  }

}
