import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
// import { } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor( private formBuilder: FormBuilder, private authService: AuthService) {  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
  // Get Form Values
  get first_name() {
    return this.registrationForm.get('first_name');
  }
  get last_name() {
    return this.registrationForm.get('last_name');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get username() {
    return this.registrationForm.get('username');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  // End Getting Form Values
  async handleRegistration(data: FormGroup) {
    console.log('26', data.value);
    await this.authService.registerUser(data.value);
  }

}
