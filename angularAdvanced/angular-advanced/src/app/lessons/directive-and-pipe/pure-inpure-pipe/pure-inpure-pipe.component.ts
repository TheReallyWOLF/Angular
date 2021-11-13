import {Component, OnInit} from '@angular/core';

export interface Person {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-pure-inpure-pipe',
  templateUrl: './pure-inpure-pipe.component.html',
  styleUrls: ['./pure-inpure-pipe.component.sass']
})
export class PureImpurePipeComponent implements OnInit{
  person1!: Person;
  person2!: Person;

  ngOnInit(): void {
    this.reset();
  }

  changePropPerson1(){
    this.person1.lastName = '...'
  }
  changePropPerson2(){
    this.person2.lastName = '...'
  }
  changeRefPerson1(){
    this.person1 = {
      firstName: '...', lastName: '...'
    };
  }
  changeRefPerson2(){
    this.person2 = {
      firstName: '...', lastName: '...'
    };
  }

  reset(){
    this.person1 = {
      firstName: 'Wolf', lastName: 'Lannely'
    };
    this.person2 = {
      firstName: 'Juli', lastName: 'Kobra'
    };
  }

}
