import {
  ChangeDetectionStrategy,
  Component,
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

  private parentElement: HTMLElement | undefined

  readonly dropZoneArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private renderer: Renderer2) {}

  dragDrop(event: DragEvent): void {
    event.preventDefault();

    this.updateParentElement(event.target as HTMLElement)

    if (this.currentEl && this.currentEl !== event.target) {
      (event.target as HTMLElement).append(this.currentEl);
    }
  }

  dragLeave(event: DragEvent): void {
    event.preventDefault();

    this.renderer.removeClass(event.target, 'drop-zone-over');
  }

  dragOver(event: DragEvent): void {
    event.preventDefault();

    this.renderer.addClass(event.target, 'drop-zone-over');
  }

  dragStart(event: DragEvent): void {
    this.currentEl = event.target as HTMLElement;
  }

  updateParentElement (element: HTMLElement): void {
    if (this.parentElement) {
      this.renderer.removeClass(this.parentElement, 'active-zone');
    }

    this.parentElement = element;
    this.renderer.addClass(this.parentElement, 'active-zone');
  }
}
