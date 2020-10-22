import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit {
  message: string = "World";
  punctuationMark: string = "?";
  DataTime: string = new Date().toLocaleTimeString('ru');
  date: string = new Date().toDateString();
  loggedIn: boolean = true;
  foo = function (){
    return "Выполнение ф-ии в интерполяции";
  };

// Чаще делается так
  answer: string;
  text: string;
  dataTimeInterval: string;
  isCollapsed: boolean;
  isCollapsedTwo: boolean;


  items = ["Angular", "React", "Vue", "Bootstrap", "Node.js"];

  constructor() {
    this.isCollapsedTwo = true;
    this.isCollapsed = true;
    this.answer = "Ответ";
    this.text = "рыбий текст";
    setInterval(() => {
      this.dataTimeInterval = new Date().toLocaleTimeString('ru');
    }, 1000);
  };
  myClickFoo(event){
    console.log(event);
  };
  toogleCollapse(who){
    if(who === 'one'){
      this.isCollapsed = !this.isCollapsed;
    }else if(who === 'two'){
      this.isCollapsedTwo = !this.isCollapsedTwo;
    }

  }
  ngOnInit(): void {}
}
