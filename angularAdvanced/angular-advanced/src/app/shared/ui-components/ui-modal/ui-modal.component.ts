import {
  Component,
  ElementRef, EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

export enum ModalPadding {
  ExtraLarge = 'extraLarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  ExtraSmall = 'extraSmall'
}

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.sass']
})
export class UiModalComponent implements OnChanges {
  @ViewChild("dialogRef", {static: false})
  dialogRef!: ElementRef;

  @Input()
  openModal!: boolean;

  @Input()
  hideCross: boolean = false;

  @Input()
  padding: ModalPadding = ModalPadding.Medium;

  @Input()
  right: boolean = false;

  @Output() closeModal = new EventEmitter<void>();
  @Output() beforeClose = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.openModal.currentValue === false && !changes.openModal.firstChange) {
      this.dialogRef?.nativeElement.close();
      this.beforeClose.emit();
      return;
    }

    if (changes.openModal.currentValue === true) {
      this.dialogRef?.nativeElement.showModal();
      return;
    }
  }
}
