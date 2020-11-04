import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
//Subject
/*document.addEventListener('click', () => {
  const stream$ = new Subject();
  stream$.subscribe(value => console.log(value));
  stream$.next('Hello');
  stream$.next('Rx');
  stream$.next('Js');
});*/

//BehaviorSubject
/*document.addEventListener('click', () => {
  const streams$ = new BehaviorSubject('First');
  streams$.subscribe(value => console.log(value));
  streams$.next('Hello');
  streams$.next('Rx');
  streams$.next('Js');
});*/

//ReplaySubject
document.addEventListener('click', () => {
  const streams$ = new ReplaySubject(3); // количество значений которые он запонит
  streams$.next('Hello'); // значение
  streams$.next('Rx'); // значение
  streams$.next('Js'); // значение это 1 начинает с конца
  streams$.subscribe(value => console.log(value));
});
