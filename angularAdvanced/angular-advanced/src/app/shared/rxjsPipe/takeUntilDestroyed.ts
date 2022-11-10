import {MonoTypeOperatorFunction, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import { ɵgetLContext, ɵLContext } from '@angular/core';

const CLEANUP_INDEX = 7;
const CLEANUP_NOTIFIER = Symbol('SK_DESTROY_NOTIFIER');

/**
 * RxJs Pipe который самоотписываеться при дестрое компонента без необходимости
 * делать в компоненте переменную сабжект и имплементировать дестрой хук
 * */
export const takeUntilDestroyed = <T>(target: any): MonoTypeOperatorFunction<T> => {

  if (!target[CLEANUP_NOTIFIER]) {
    queueMicrotask(() => {
      const { lView } = ɵgetLContext(target) as ɵLContext;
      if (lView) {
        const index = (lView[CLEANUP_INDEX] || (lView[CLEANUP_INDEX] = [])).push(() => {

          //  Кидаем сигнал, что view разрушено...
          target[CLEANUP_NOTIFIER].next();
          target[CLEANUP_NOTIFIER].complete();

          // Подчищаем за собой
          lView[CLEANUP_INDEX]?.splice(index, 1);
          delete target[CLEANUP_NOTIFIER];
        });
      }
    });
    target[CLEANUP_NOTIFIER] = new Subject<void>();
  }

  return takeUntil(target[CLEANUP_NOTIFIER]);
}
