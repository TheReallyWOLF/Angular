import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-advanced',
  templateUrl: './form-advanced.component.html',
  styleUrls: ['./form-advanced.component.sass']
})
export class FormAdvancedComponent implements OnInit {
  buttonOptions: string[];
  buttonName: string;

  constructor() {
    this.buttonOptions = [
      'Реактивные формы',
      'Другие формы =)'
    ]

    this.buttonName = this.buttonOptions[0]
  }

  ngOnInit(): void {
  }

  changeForm() {
    let index = this.buttonOptions.indexOf(this.buttonName) + 1 === this.buttonOptions.length ? 0 : this.buttonOptions.indexOf(this.buttonName) + 1
    this.buttonName = this.buttonOptions[index];
  }

}
