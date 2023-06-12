import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import {takeUntilDestroyed} from "../../rxjsPipe/takeUntilDestroyed";

interface DropdownItem {
  id: number;
  value: string;
}

@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.sass']
})
export class UiDropdownComponent implements OnInit {
  // TODO селект помойка сделать чкерез дивы и инпуты
  selectedOption = new FormControl();

  @Input() options!: DropdownItem[];
  @Input() label: string = '';

  @Output() itemSelected = new EventEmitter<DropdownItem>();

  ngOnInit(): void {
    this.onDropdownItemSelectedSub();
    this.setDefaultDropDownValue();
  }

  setDefaultDropDownValue(): void {
    this.selectedOption.setValue(this.options[0].value);
  }

  onDropdownItemSelectedSub(): void {
    this.selectedOption.valueChanges
      .pipe(takeUntilDestroyed(this))
      .subscribe((value) => {
        this.itemSelected.emit(value);
    });
  }
}
