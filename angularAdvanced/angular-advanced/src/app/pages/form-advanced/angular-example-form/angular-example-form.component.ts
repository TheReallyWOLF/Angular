import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-angular-example-form',
  templateUrl: './angular-example-form.component.html',
  styleUrls: ['./angular-example-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularExampleFormComponent implements OnInit {

  registrationForm!: UntypedFormGroup;
  firstName!: UntypedFormControl;
  lastName!: UntypedFormControl;
  email!: UntypedFormControl;
  password!: UntypedFormControl;

  createForm() {
    this.registrationForm = new UntypedFormGroup({
      name: new UntypedFormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
    })
  }

  createFormControls() {
    this.firstName = new UntypedFormControl("", [Validators.required, Validators.minLength(3)]);
    this.lastName = new UntypedFormControl("", [Validators.required, Validators.minLength(3)]);
    this.email = new UntypedFormControl("", [
      Validators.required, Validators.pattern("[^@]*@[^@]*")
    ]);
    this.password = new UntypedFormControl("", [
      Validators.required, Validators.minLength(8)
    ])
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      return
    }

    alert('форма заполнена неверно!')
  }
}
