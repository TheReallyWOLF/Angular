import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[myRepeat], myRepeat' // директиву можно использовать как атрибут и как элемент
})
export class MyRepeatDirective implements OnInit {

  @Input() message!: string;

  @Input() count!: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    /**
     * Создание элемента DIV в элемента для которого установлена директива (на прямую работать с nativeElement и DOM не безопасно и нерекомендуется)
     * */
    for (let i = 0; i < this.count; i++) {
      let domElem: HTMLDivElement = this.renderer.createElement('div');
      this.renderer.appendChild(this.elementRef.nativeElement, domElem);
      domElem.innerHTML = this.message;
    }
  }
}
