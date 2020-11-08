import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // вывод в родителя
  @Output('bpCreated') bluePrintCrated = new EventEmitter<{serverName: string, serverContent: string}>(); // вывод в родителя
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
   this.serverCreated.emit({
     serverName: this.newServerName,
     serverContent: this.newServerContent
   });
  }

  onAddBlueprint() {
    this.bluePrintCrated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
