import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { } from '@angular/forms';

interface RegistrationFormData {
  first_name: String;
  last_name: String;
  email: String;
  username: String;
  password: String;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor( private formBuilder: FormBuilder ) {
    // this.registrationForm = this.createFormGroup();
    this.registrationForm = formBuilder.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async handleRegistration(data: FormGroup) {
    console.log('26', data.value);
  }

}
