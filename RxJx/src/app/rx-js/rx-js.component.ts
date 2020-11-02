import { Component, OnInit } from '@angular/core';
import {fromEvent, interval} from "rxjs";
import { filter, map, take, scan } from "rxjs/operators";

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})
export class RxJsComponent implements OnInit {
  disabledInterval:boolean = false;
  disabledRxjs: boolean = false;
  logs:Array<string> = [
    'Вася'
    ]

  people:Array<any> = [
    {name: 'Vlad', age: 25},
    {name: 'Wolf', age: 15},
    {name: 'Uri', age: 33},
    {name: 'xAre', age: 22},
    {name: 'gosl', age: 5},
    {name: 'xPjy', age: 64},
    {name: 'Git', age: 20}
    ]

  constructor() { }

  ngOnInit(): void {
  }

// нативно
  submit(){
    let i = 0;
    this.disabledInterval = true;

    const interval = setInterval(()=>{
      console.log(i)
      if(this.people[i]){
        if(this.people[i].age >= 18){
          this.logs.push(this.people[i].name)
        }
        i++;
      }else {
        clearInterval(interval);
        this.disabledInterval = false;
      }
    }, 1000);
  }
// rXjs
  submitRxjs(){
    this.disabledRxjs = true;
    interval(1000).pipe( // пипе начало работы с данными
      take(this.people.length), // когда остановится интервалу
      filter(value => this.people[value].age >= 18), // фильтровать всех кто меньше 18
      map(value => this.people[value].name)//, // вернуть только пипл найм
      //scan((acc, value) => acc.concat(value), [])  // acc буфер в который можно складывать ответы например что бы склеить в строку несколько ответов строчных
    ).subscribe(res => {
      this.logs.push(res)
    }, null, () => this.disabledRxjs = false) // принимает 3 ф-ции ответ после пайпа обработку ошибки и лдогику после завершения
  }

}
import '../../creation'
