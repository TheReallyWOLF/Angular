import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-custom-pipes2',
  templateUrl: './simple-custom-pipes2.component.html',
  styleUrls: ['./simple-custom-pipes2.component.sass']
})
export class SimpleCustomPipes2Component implements OnInit {
  value!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
