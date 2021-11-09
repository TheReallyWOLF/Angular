import { Component } from '@angular/core';

@Component({
  selector: 'app-pure-inpure-pipe',
  templateUrl: './pure-inpure-pipe.component.html',
  styleUrls: ['./pure-inpure-pipe.component.sass']
})
export class PureImpurePipeComponent {
  person1 = {
    firstName: 'Wolf', lastName: 'Lannely'
  };
  person2 = {
    firstName: 'Juli', lastName: 'Kobra'
  };

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

}
