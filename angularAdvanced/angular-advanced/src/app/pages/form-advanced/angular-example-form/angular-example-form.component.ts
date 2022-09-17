import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-angular-example-form',
  templateUrl: './angular-example-form.component.html',
  styleUrls: ['./angular-example-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularExampleFormComponent implements OnInit {

  registrationForm!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  email!: FormControl;
  password!: FormControl;

  createForm() {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
    })
  }

  createFormControls() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", [
      Validators.required, Validators.pattern("[^@]*@[^@]*")
    ]);
    this.password = new FormControl("", [
      Validators.required, Validators.minLength(8)
    ])
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Submit');
      console.log(this.registrationForm.value);
    }
  }
}
