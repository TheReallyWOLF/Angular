import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
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

  @ViewChild('draggableElement', {static:false})
  draggableElementBox!: ElementRef;

  @ViewChildren('dropZone')
  dropZoneBox!: ElementRef[];

  constructor(private ref: ElementRef) {
  }

  ngAfterViewInit(): void {
    fromEvent<DragEvent>(this.draggableElementBox.nativeElement, 'dragstart').pipe(
      takeUntil(this.destroyed$),
    ).subscribe((event: DragEvent) => {
      event?.dataTransfer?.setData('text/plain', this.draggableElementBox.nativeElement.classList.value)
    });

    for (const dropZone of this.dropZoneBox) {

      fromEvent<DragEvent>(dropZone.nativeElement, 'dragover').pipe(
        takeUntil(this.destroyed$),
      ).subscribe((event: DragEvent) => {
        event.preventDefault();
        dropZone.nativeElement.classList.add('drop-zone-over');
      });

      fromEvent<DragEvent>(dropZone.nativeElement, 'dragleave').pipe(
        takeUntil(this.destroyed$),
      ).subscribe((event: DragEvent) => {
        dropZone.nativeElement.classList.remove('drop-zone-over');
      });

      fromEvent<DragEvent>(dropZone.nativeElement, 'drop').pipe(
        takeUntil(this.destroyed$),
      ).subscribe((event: DragEvent) => {
        event.preventDefault();
        const droppedElementId = event!.dataTransfer!.getData('text/plain');
        const droppedElement = this.ref.nativeElement.getElementsByClassName(droppedElementId)[0];
        dropZone.nativeElement.append(droppedElement);
        dropZone.nativeElement.classList.remove('drop-zone-over');
      });
    }

  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
