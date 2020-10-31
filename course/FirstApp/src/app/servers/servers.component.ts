import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'no name!';
  serverCreatedVisible: boolean = false;
  servers:Array<any> = ['TestServer', 'TestServer Two'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreatedVisible = true;
    this.servers.push(this.serverName);
    setTimeout(() => this.serverCreatedVisible = false, 3000)
  };
  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
