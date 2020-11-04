import {of, range, timer, interval, from, Observable, observable, fromEvent} from 'rxjs'; // Observable основоной контент rxjs
import {map, scan} from "rxjs/operators";

// !----!----!of!----!----!
/*const stream$ =  of(1,2,3,4); // создание стримов
stream$.subscribe(value => {
  console.log(value); // сейчас моментально по очереди выведет 1,2,3,4
})*/


// !----!----!from!----!----!
/*const arr$ = from([1,2,3,4]).pipe( // работает с массивом
  scan((acc, value) => acc.concat(value), []) // выводит 4 раза массив [1]; [1],[2]; [1],[2],[3]; [1],[2],[3],[4]
)
arr$.subscribe(value => console.log(value));*/


// !----!----!Observable!----!----!
/*const streams$ = new Observable(observer => {
  observer.next('First value')

  setTimeout(() => observer.next("After 1000 ms"), 1000);
  //setTimeout(() => observer.error("Something when wrong"), 2000); // error останавливает скрипт если ошибка не обработана
  setTimeout(() => observer.next("After 3000 ms"), 3000);
  setTimeout(() => observer.complete(), 4000); // завершет стрим если не было ошибок

});
// 1 вариант записи
/!*
streams$.subscribe(
  (value) => console.log(value),
  (error) => console.log(error), // обработка ошибки - ошибка завершает стрим
  () => console.log('Complete'));
*!/
// 2 вариант записи
streams$.subscribe({
  next(value){
    console.log(value);
  },
  error(error){
    console.log(error);
  },
  complete(){
    console.log("Completed");
  }
})*/
document.addEventListener('DOMContentLoaded', function() {
// !----!----!fromEvent!----!----!
  fromEvent(document.querySelector('canvas'), 'mousemove')
    .pipe(map(event => {
      const e = event as MouseEvent;
      return {
        x: e.offsetX,
        y: e.offsetY,
        ctx: e.target.getContext("2d")
      }
    }))
    .subscribe(pos => {
        pos.ctx.fillRect(pos.x, pos.y, 2,2)
      }
    )

  const clear$ = fromEvent(document.getElementById('clear'), 'click');

  clear$.subscribe(() => {
    const canvas = document.querySelector('canvas');
    canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height)
  })
})
// !----!----!interval!----!----!
/*const subInterval = interval(500).subscribe(v => console.log(v)); // новый стрим
setTimeout(() => subInterval.unsubscribe(), 4000); // отписка от стрима поче 4 сек*/
// !----!----!timer!----!----!
timer(3000).subscribe(v => console.log(v)); // новый стрим
// !----!----!range!----!----!
range(42,10).subscribe(v => console.log(v))
