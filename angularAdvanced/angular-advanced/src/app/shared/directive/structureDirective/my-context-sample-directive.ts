import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[userCard]'
})
export class MyContextSampleDirective implements OnInit {

  /**
   * TemplateRef - шаблон, который может использоваться для создания представления. (ссыдка на шаблон)
   * ViewContainerRef - контейнер сожержащий представление. Каждый контейнер привязан к элементу разметки (ссылка на чать вьюшки где применена директива)
   * */
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    let context: UserCardContext = new UserCardContext('Wolf', 'Lannely'); // имитация извлечения данных взять их можно откуда угодно
    this.viewContainer.createEmbeddedView(this.templateRef, context); // предастовление возможности использования переменных класса UserCardContext в шаблоне
  }
}

class UserCardContext {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
