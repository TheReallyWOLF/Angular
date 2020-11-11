import {Component,
  ElementRef,
  EventEmitter,
  OnInit, Output,
  ViewChild, OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // вывод в родителя
  @Output('bpCreated') bluePrintCrated = new EventEmitter<{serverName: string, serverContent: string}>(); // вывод в родителя
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; // добратся до значения через ссылку на элемент

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) { // ссылка на инпут nameInput по ID
   this.serverCreated.emit({
     serverName: nameInput.value,
     serverContent: this.serverContentInput.nativeElement.value
   });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCrated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
