import { interval, fromEvent } from 'rxjs';
import {map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap} from 'rxjs/operators';

const streamIntervals$ = interval(1000)
  .pipe(
    tap(value => console.log(`Tap : ${value}`)), // вызывается на каждом значении что то вроде дебака онлайн
    map(value => value*3), // что то делает со значениями и пропускает дальше
    filter(value => value % 2 === 0), // пропускает значения которые тру
    take(5) // завершает стрим вызывая комплит после -count- вернувшихся значений
)
// takeLast(5) получить последние пять элементов
// takeWhile(value => v<7) завершить стрим при этом условии
streamIntervals$.subscribe({
  next: v => console.log('Next: ', v),
  complete: () => console.log('Complete')
})

const streamIntervals2$ = interval(400)
  .pipe(
    tap(value => console.log(`Tap : ${value + 'WWW'}`)), // вызывается на каждом значении что то вроде дебака онлайн
    scan((acc,value)=> acc + value, 0),
    //reduce((acc,value)=> acc + value, 0), // рботает как scan но вызывается после завершения стрима
    take(5)
)

streamIntervals2$.subscribe({
  next: v => console.log('Wolf: ', v),
  complete: () => console.log('Complete')
})

// переключения стримов
fromEvent(document, 'click')
  .pipe(
    switchMap(event => {// возращаем новый стрим
      return interval(1000)
        .pipe(
          tap(value => console.log('Tab :', value)),
          take(5),
          reduce((acc, value) => acc + value, 0)
        )
    })
  ).subscribe({
  next: value => console.log('Next ', value),
  complete: () => console.log('Complete')
});
