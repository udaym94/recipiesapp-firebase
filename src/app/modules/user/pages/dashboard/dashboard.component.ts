import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface UserDoc {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  userDetails: UserDoc;
  uid: string;
  userProfileForm: FormGroup;
  readonly: Boolean;

  constructor(private userService: UserService,
    private matSnackbar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.readonly = true;
    this.userProfileForm = this.formBuilder.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
    this.loadProfile();
  }

  // Load user profile upon landing
  async loadProfile () {
    if (localStorage.getItem('uid')) {
      this.uid = localStorage.getItem('uid');
      this.userDetails = await this.userService.getUserDetailsByUID(this.uid);
      this.userProfileForm.patchValue(this.userDetails);
      this.matSnackbar.open('Profile Fetched Successfully', 'close');
    } else {
      this.matSnackbar.open('Please login', 'close');
      this.router.navigate(['auth/login']);
    }
  }
  // Make profile editable
  async editProfile() {
    this.readonly = false;
  }

  // update user profile
  async updateProfile(data: FormGroup) {
    if (localStorage.getItem('uid')) {
      this.uid = localStorage.getItem('uid');
      this.userDetails = await this.userService.updateUserDetailsByUID(this.uid, data.value);
      this.userProfileForm.patchValue(this.userDetails);
      this.matSnackbar.open('Profile Updated Successfully', 'close');
    } else {
      this.matSnackbar.open('Please login', 'close');
      this.router.navigate(['auth/login']);
    }
  }

  // Get Form Values
  get first_name() {
    return this.userProfileForm.get('first_name');
  }
  get last_name() {
    return this.userProfileForm.get('last_name');
  }
  get email() {
    return this.userProfileForm.get('email');
  }
  get username() {
    return this.userProfileForm.get('username');
  }
  get password() {
    return this.userProfileForm.get('password');
  }


}
