import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import {takeUntilDestroyed} from "../../rxjsPipe/takeUntilDestroyed";
import {UiDropdownService} from "./ui-dropdown.service";

export interface DropdownItem {
  id: number;
  value: string;
}

export enum DropdownType {
  GLOBAL = 'oneMaxGlobalOpen',
  ENCAPSULATE = 'encapsulate',
  HOVER = 'hover'
}
/**
 * selectedOption - значение dropdown коробки
 * dropdownId - уникальный ID для управления из глобальной области
 * isDropDownShow - признак открытия\закрытия списка
 * options - список
 * label - загловок
 * itemSelected - событие выбора
 * type - определяет поведение
 * encapsulate - признак не связанности списков (живет отдельно не влияет на остальные)
 * */
@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.sass'],
})
export class UiDropdownComponent implements OnInit {
  @Input() options!: DropdownItem[];
  @Input() label: string = '';
  @Input() type: DropdownType = DropdownType.GLOBAL;
  @Input() viewType: string = 'default-light';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';

  @Output() itemSelected = new EventEmitter<DropdownItem>();

  selectedOption: FormControl = new FormControl();
  dropdownId: string = Math.random().toString(36).substring(2);
  isDropDownShow!: boolean;

  get encapsulate(): boolean {
    return this.type === DropdownType.ENCAPSULATE;
  };

  get hover(): boolean {
    return this.type === DropdownType.HOVER;
  };

  constructor(private uiDropdownService: UiDropdownService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isDropDownShow = this.hover

    this.onDropdownItemSelectedSub();
    this.setDefaultDropDownValue();

    if (this.hover || this.encapsulate) return;

    this.onDropdownDropDownShowSub();
  }

  toggle() {
    if (this.hover) return;

    this.isDropDownShow = !this.isDropDownShow;

    if (this.encapsulate) return;

    this.isDropDownShow ?
      this.uiDropdownService.setOpenDropdown(this.dropdownId) :
      this.uiDropdownService.closeAll();
  }

  setDefaultDropDownValue(): void {
    this.selectedOption.setValue(this.options[0]);
  }

  // подписка на признак показа данного DropDown списка (только при type === DropdownType.GLOBAL)
  onDropdownDropDownShowSub(): void {
    this.uiDropdownService.openDropdown$
      .pipe(takeUntilDestroyed(this))
      .subscribe(id => {
        this.isDropDownShow = id === this.dropdownId;
        this.changeDetectorRef.markForCheck();
      });
  }

  // тригер события вызова
  onDropdownItemSelectedSub(): void {
    this.selectedOption.valueChanges
      .pipe(takeUntilDestroyed(this))
      .subscribe((value) => {
        this.itemSelected.emit(value);
    });
  }

  setDropDownValue(option: DropdownItem) {
    this.selectedOption.setValue(option);
    if (this.hover) return;

    this.isDropDownShow = false;
  }
}
