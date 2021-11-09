import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-custom-pipes',
  templateUrl: './simple-custom-pipes.component.html',
  styleUrls: ['./simple-custom-pipes.component.sass']
})
export class SimpleCustomPipesComponent implements OnInit {
  value!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
