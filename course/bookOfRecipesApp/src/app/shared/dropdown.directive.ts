import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
// собственная директива реагирует на клик меняя класс
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = ! this.isOpen;
  }
}
