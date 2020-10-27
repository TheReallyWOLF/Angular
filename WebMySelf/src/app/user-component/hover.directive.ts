import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appHover]'
})

export class HoverDirective {
// создание собственной директивы!!!
  @HostBinding('class.hovered') isHover = false;
  @HostListener('mouseenter') onMouseEnter(){ // мышка наведена на компонент
    this.isHover = true;
  }
  @HostListener('mouseleave') onMouseLeave(){ // мышка ушла с компонента
    this.isHover = false;
  }

}
