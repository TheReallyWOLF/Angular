import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

  @Input() user;
  isMarked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(me){
    this.isMarked = !this.isMarked;
    console.log(arguments)
  }
}
