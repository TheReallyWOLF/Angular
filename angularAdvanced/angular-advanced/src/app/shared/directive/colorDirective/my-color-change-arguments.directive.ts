import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[myColorChangeArguments]'
})
export class MyColorChangeArgumentsDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  /**
   * @Input('myColorChangeArguments') - позводяет передать директиве агрументы
   * */
  @Input('myColorChangeArguments') set changeColor (color: string | null) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }
}
