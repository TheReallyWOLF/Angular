import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  /**
   * HostBinding - позволяет выполнить привязку свойства к host элементу если
   * */
  @HostBinding('style.color') colorBind!: string;

  @HostListener('mouseenter') mouseEnter() {
    this.colorBind = 'black';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.colorBind = 'red';
  }

}
