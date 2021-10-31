import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myDelay]'
})
export class MyDelaySampleDirective {

  /**
   * TemplateRef - шаблон, который может использоваться для создания представления. (ссыдка на шаблон)
   * ViewContainerRef - контейнер сожержащий представление. Каждый контейнер привязан к элементу разметки (ссылка на чать вьюшки где применена директива)
   * */
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input('myDelay') set DelayTime(time: number) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }, time);
  }
}
