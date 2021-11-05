import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public date = new Date(1636059599999);
  public date2 = new Date().toLocaleString("ru", {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })

  constructor() { }

  ngOnInit(): void {
  }

}
