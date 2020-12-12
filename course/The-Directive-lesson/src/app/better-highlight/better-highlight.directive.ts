import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'black';
  @Input() defaultBackgroundColor: string = 'blue';
  @Input() highlightBackgroundColor: string = 'green';
  // биндинг стиля
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
    // не реактивно! применяетсчя при отрисовке
  /* this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'lightred');*/
  }
  // привязал реактивно к позиции мыши аналог ховера
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

    // забиндил стиль работает так же как и строчка выше
    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.highlightColor;
  }
  // привязал реактивно к позиции мыши аналог ховера
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

    // забиндил стиль работает так же как и строчка выше
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}
