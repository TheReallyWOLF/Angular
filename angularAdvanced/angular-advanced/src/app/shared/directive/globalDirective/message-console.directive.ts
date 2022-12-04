import {Directive, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {filter, take, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appMessageConsole]'
})
export class MessageConsoleDirective implements OnInit, OnDestroy {
  private readonly message: string = 'ИГРАЯ В ИГРЫ НЕ КОПАЙТЕСЬ В КОНСОЛЕ РАЗРАБОТЧИКА! БРАУЗЕР НЕ ОСОБО ХОРОШАЯ ПЛЛАТФОРМА ДЛЯ ИГР - ОНИ ЛЕГКО ЛОМАЮТСЯ!';
  private readonly messageStyle: string = 'color: #d2e989; background: #331b0f; font-size: 32px; padding: 12px; border: solid 1px white; border-radius: 8px; margin: 16px 0;';
  private destroyed$ = new Subject();

  ngOnInit(): void {
    this.initialisationDirective();
  }

  private initialisationDirective(): void {
    fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      takeUntil(this.destroyed$),
      filter(event => event.key == 'F12'),
      take(1)
    ).subscribe(() => {
      console.log('%c' + this.message, this.messageStyle);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
