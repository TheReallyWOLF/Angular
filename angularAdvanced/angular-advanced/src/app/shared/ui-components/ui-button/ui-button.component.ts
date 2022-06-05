import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonType, SizeButton} from "../iu-models";

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.sass']
})
export class UiButtonComponent {
  @Input() type: ButtonType = ButtonType.primarySuccess;
  @Input() size: SizeButton = SizeButton.XS;

  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter<Event>();

  onClick(event: Event): void {
    this.click.emit(event);
  }
}


// todo модуль импортировать в кор приложения !!!!!
