import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef, Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {fromEvent, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'drag-and-drop-api',
  templateUrl: './drag-and-drop-api.component.html',
  styleUrls: ['./drag-and-drop-api.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragAndDropApiComponent implements AfterViewInit {

  private destroyed$ = new Subject();
  private currentEl: HTMLDivElement | undefined;

  @ViewChild('draggableElement', {static:false})
  draggableElementBox!: ElementRef;

  @ViewChildren('dropZone')
  dropZoneBox!: ElementRef[];

  readonly dropZoneArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    for (const dropZone of this.dropZoneBox) {
      fromEvent<DragEvent>(dropZone.nativeElement, 'drop').pipe(
        takeUntil(this.destroyed$),
      ).subscribe((event: DragEvent) => {
        event.preventDefault();
        if (this.currentEl) {
          dropZone.nativeElement.append(this.currentEl);
        }
      });
    }
  }

  dragDrop(event: any): void {
    event.preventDefault();
    // просто забрать переменную?
    // запретить перетаскивать что то кроме необходимого элемента
    //event.preventDefault();
    //const droppedElementId = event.dataTransfer?.getData('text/plain') || '';
    //const droppedElement = this.ref.nativeElement.getElementsByClassName(droppedElementId)[0];
    //this.renderer.appendChild(event.target, droppedElement);
  }

  dragLeave(event: DragEvent): void {
    this.renderer.removeClass(event.target, 'drop-zone-over');
  }

  dragOver(event: DragEvent): void {
    event.preventDefault();
    this.renderer.addClass(event.target, 'drop-zone-over');
  }

  dragStart(event: any): void {
    this.currentEl = event.target;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
