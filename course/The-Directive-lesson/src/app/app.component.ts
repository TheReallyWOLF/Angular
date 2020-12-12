import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onlyOdd:boolean = false;
  oddNumbers: Array<number> = [1,3,5];
  evenNumbers: Array<number> = [2,4];
  numbers: Array<number> = [1,2,3,4,5];
}
