import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit(): void {
  }

}
