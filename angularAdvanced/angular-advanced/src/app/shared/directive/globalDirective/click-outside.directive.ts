import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';
/**
 * Директива которая трегерит евент при клике вне элемента на котором она повешенг
 * */
@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output('clickOutside') clickOutsideEvent: EventEmitter<void> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      console.log('клин вне элемента');
      this.clickOutsideEvent.emit();
    }
  }
}
