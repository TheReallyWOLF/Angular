import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

/**
 * Дтректива которая удаляет класс `hideClass` у элементов которые попадают во вью порт
 * */
@Directive({
  selector: '[prepareViewObserver]'
})
export class PrepareViewObserverDirective implements OnInit {
  private readonly options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
  private intersectionObserver: IntersectionObserver | undefined;

  @Input()
  hideClass: string = 'hide'

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.prepareViewObserver();
  }

  prepareViewObserver(): void {
    this.intersectionObserver = new IntersectionObserver(this.viewCallback.bind(this), this.options);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  /**
   * при появлении элемента в зоне видимости срабатывает колбек с запросом и происходит отписка отслеживания
   * */
  viewCallback(entries: any[]):void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.renderer2.removeClass(this.elementRef.nativeElement.children[0], this.hideClass)
        this.intersectionObserver?.unobserve(entry.target);
      }
    })
  }

}
