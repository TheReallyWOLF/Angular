import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-angular-example-form',
  templateUrl: './angular-example-form.component.html',
  styleUrls: ['./angular-example-form.component.sass']
})
export class AngularExampleFormComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl()
    })
  }

}
