import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myNgIf: boolean = false;
  onlyOdd:boolean = false;
  oddNumbers: Array<number> = [1,3,5];
  evenNumbers: Array<number> = [2,4];
  numbers: Array<number> = [1,2,3,4,5];
  value: number = 0;

  plus() {
    this.value += 50;
  }
}
