import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Wolf!';
  userName:string = '';
  showSecret: boolean = false;
  log: Array<any> = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length+1);
    this.log.push(new Date());
  }

  resetUser(){
    this.userName = '';
  }
}
