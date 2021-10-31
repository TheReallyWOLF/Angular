import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfSampleDirective {

  /**
   * TemplateRef - шаблон, который может использоваться для создания представления. (ссыдка на шаблон)
   * ViewContainerRef - контейнер сожержащий представление. Каждый контейнер привязан к элементу разметки (ссылка на чать вьюшки где применена директива)
   * */
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input('myIf') set MyIfValue(condition: boolean) {
    /**
     * this.viewContainer.createEmbeddedView(this.templateRef) - создание представления на основе шаблона
     * this.viewContainer.clear() - удаление представлений из контейнеров
     * */
    !condition ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear()
  }
}
