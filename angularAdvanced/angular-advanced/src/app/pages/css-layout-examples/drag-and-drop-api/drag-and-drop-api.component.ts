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
  private currentParentElement: HTMLElement | undefined;
  readonly dropZoneArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private renderer: Renderer2) {}

  dragDrop(event: DragEvent): void {
    event.preventDefault();

    const isEmptyParent = (event.target as HTMLElement)?.children.length !== 0;
    const currentElDataId = this.currentEl?.getAttribute('data-id');
    const targetElDataId = (event.target as HTMLElement).getAttribute('data-id');

    if (!isEmptyParent && this.currentEl && (currentElDataId !== targetElDataId)) {
      (event.target as HTMLElement).append(this.currentEl);
      this.renderer.addClass(event.target, 'active-zone');
      this.renderer.removeClass(this.currentParentElement, 'active-zone');
    }
  }

  dragLeave(event: DragEvent): void {
    event.preventDefault();
    if (this.currentEl === event.target) return
    this.renderer.removeClass(event.target, 'drop-zone-over');
  }

  dragOver(event: DragEvent): void {
    event.preventDefault();
    if (this.currentEl === event.target) return
    this.renderer.addClass(event.target, 'drop-zone-over');
  }

  dragStart(event: DragEvent): void {
    this.currentEl = event.target as HTMLElement;
    this.currentParentElement = (event.target as HTMLElement).parentElement as HTMLElement;
  }
}
