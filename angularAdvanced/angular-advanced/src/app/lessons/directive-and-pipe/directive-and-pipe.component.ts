import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-and-pipe',
  templateUrl: './directive-and-pipe.component.html',
  styleUrls: ['./directive-and-pipe.component.sass']
})
export class DirectiveAndPipeComponent implements OnInit {
  blue = 'blue'

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log('Директива с удалением')
  }

}