import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'drag-and-drop-api',
  templateUrl: './drag-and-drop-api.component.html',
  styleUrls: ['./drag-and-drop-api.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragAndDropApiComponent {
  private currentEl: HTMLElement | undefined;

  readonly dropZoneArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  dragDrop(event: DragEvent): void {
    event.preventDefault();
    if (this.currentEl) {
      (event.target as HTMLElement).append(this.currentEl)
    }
  }

  dragLeave(event: DragEvent): void {
    this.renderer.removeClass(event.target, 'drop-zone-over');
  }

  dragOver(event: DragEvent): void {
    event.preventDefault();
    this.renderer.addClass(event.target, 'drop-zone-over');
  }

  dragStart(event: DragEvent): void {
    this.currentEl = event.target as HTMLElement;
  }
}
