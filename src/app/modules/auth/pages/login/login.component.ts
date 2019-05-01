import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private userService: UserService) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }
  // Get Form Values
  get first_name() {
    return this.loginForm.get('first_name');
  }
  get last_name() {
    return this.loginForm.get('last_name');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  // End Getting Form Values
  async handleLogin(data: FormGroup) {
    try {
      const loggedin = await this.authService.handleLogin(data.value);
      if (loggedin) {
        const userData = await this.userService.getUserDetailsByUID(loggedin.user.uid);
        console.log('48', userData);
        this.snackBar.open('Logged In Successfully, redirecting to Dashboard', 'close');
      }
    } catch (e) {
      this.snackBar.open(e.message, 'close');
    }
  }

}
