import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

interface DropdownItem {
  id: number;
  value: string;
}

@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.sass']
})
export class UiDropdownComponent {
  // TODO допилить компонент, добавить кастотизацию, стили, убарть гвозди
  iitesm = [{
    id: 1,
    value: '123223232'
  },{
    id: 2,
    value: '13'
  },{
    id: 3,
    value: '121'
  }]

  @Input() options: DropdownItem[] = this.iitesm;
  @Output() itemSelected = new EventEmitter<DropdownItem>();

  selectedOption = new FormControl();

  constructor() {
    this.selectedOption.setValue(this.options[0].value)

    this.selectedOption.valueChanges.subscribe((value) => {
      console.log(`Option ${value} selected`);
      // добавьте здесь ваш код для обработки выбора элемента
    });
  }

  selectItem(event: any) {
    console.log(event)
    this.itemSelected.emit();
  }
}
