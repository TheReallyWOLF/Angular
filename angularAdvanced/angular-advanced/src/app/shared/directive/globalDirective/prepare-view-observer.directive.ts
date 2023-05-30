import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

/**
 * Удалять подписку когда
 * VIEW элемент попал первый раз во вью порт
 * VIEW элемент вышел перыцй раз из вью порта
 * ALL в любом из случав при первом тригере
 * DEFAULT только при уничтожении родителя
 * */
export enum ViewObserverMode {
  VIEW = 'view',
  HIDE = 'hide',
  ALL = 'all',
  DEFAULT = 'default'
}

/**
 * Директива которая трегерит евент при попадании или выходе элемента во вью порт
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

  @Input()
  mode: ViewObserverMode = ViewObserverMode.DEFAULT;

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
      this.prepareViewObserverEmitter(entry.isIntersecting);
      this.viewObserverUnobserve(entry.isIntersecting, this.mode);
    });
  }

  prepareViewObserverEmitter(isIntersecting: boolean): void {
    this.prepareViewObserver.emit({visible: isIntersecting, item: this.item});
  }

  viewObserverUnobserve(isIntersecting: boolean, mode: ViewObserverMode): void {
    if (mode === ViewObserverMode.DEFAULT) return;
    if (mode === ViewObserverMode.ALL) return this.observerUnobserveAction();
    if (isIntersecting && mode === ViewObserverMode.VIEW) return this.observerUnobserveAction();
    if (!isIntersecting && mode === ViewObserverMode.HIDE) return this.observerUnobserveAction();
  }

  observerUnobserveAction(): void {
    this.intersectionObserver?.unobserve(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observerUnobserveAction();
  }
}
