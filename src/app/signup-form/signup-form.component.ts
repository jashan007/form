import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    'user-name': new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
      ],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required),
  });

  get username() {
    return this.form.get('user-name');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
