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
  private parentElement: HTMLElement | undefined;
  private isEmptyParent: boolean = true;

  readonly dropZoneArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private renderer: Renderer2) {}

  dragDrop(event: DragEvent): void {
    event.preventDefault();

    this.updateParentElement(event.target as HTMLElement)

    const currentElDataId = this.currentEl?.getAttribute('data-id');
    const targetElDataId = (event.target as HTMLElement).getAttribute('data-id');

    if (this.currentEl && (currentElDataId !== targetElDataId) && this.isEmptyParent) {
      (event.target as HTMLElement).append(this.currentEl);
    }
  }

  dragLeave(event: DragEvent): void {
    event.preventDefault();
    if (this.currentEl === event.target && !this.isEmptyParent) return
    this.renderer.removeClass(event.target, 'drop-zone-over');
  }

  dragOver(event: DragEvent): void {
    event.preventDefault();
    if (this.currentEl === event.target && !this.isEmptyParent) return
    this.renderer.addClass(event.target, 'drop-zone-over');
  }

  dragStart(event: DragEvent): void {
    this.currentEl = event.target as HTMLElement;
  }

  private updateParentElement (element: HTMLElement): void {
    if (this.currentEl === element && !this.isEmptyParent) return
    if (this.parentElement) {
      this.renderer.removeClass(this.parentElement, 'active-zone');
    }

    this.parentElement = element;
    this.isEmptyParent = this.parentElement?.children.length === 0;
    this.renderer.addClass(this.parentElement, 'active-zone');
  }
}
