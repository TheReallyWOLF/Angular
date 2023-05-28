import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
/**
 * Дтректива которая трегерит евент при попадании или выходе элемента во вью порт
 * */
@Directive({
  selector: '[prepareViewObserver]'
})
export class PrepareViewObserverDirective implements OnInit, OnDestroy {
  private readonly options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
  private intersectionObserver: IntersectionObserver | undefined;

  @Input()
  item: unknown = {};

  @Output()
  prepareViewObserver = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.prepareViewObserverIntercept();
  }

  prepareViewObserverIntercept(): void {
    this.intersectionObserver = new IntersectionObserver(this.viewCallback.bind(this), this.options);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  /**
   * при появлении элемента в зоне видимости срабатывает колбек prepareViewObserver
   * */
  viewCallback(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      entry.isIntersecting ?
        this.prepareViewObserver.emit({visible: true, item: this.item}) :
        this.prepareViewObserver.emit({visible: false, item: this.item})
    });
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.unobserve(this.elementRef.nativeElement);
  }

}
