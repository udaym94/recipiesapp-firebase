import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

interface RegistrationFormData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser: any;
  registeredUser: any;
  constructor( private angularFirestore: AngularFirestore, private angularFireAuth: AngularFireAuth ) { }

  async registerUser(data: RegistrationFormData) {
    try {
      this.authUser = await this.angularFireAuth.auth.createUserWithEmailAndPassword(data.email, data.password);
      this.registeredUser = await this.angularFirestore.doc(`/users/${this.authUser.user.uid}`).set(data);
      // success code here
      return this.registeredUser;

    } catch (error) {
      console.log('Email & Password Registration Error', error);
      return error.json();
    }
  }

  async handleLogin(data: LoginFormData) {
    //
    try {
      const auth = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      return auth;
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn() {
    if (localStorage.getItem('uid')) {
      return true;
    } else {
      return false;
    }
  }

  async changePassword(data: any) {
    try {
      const currentUser = this.angularFireAuth.auth.currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, data.oldPassword);
      const authenticated = await currentUser.reauthenticateWithCredential(credential);
      // https://stackoverflow.com/questions/52075138/updating-a-password-in-firebase-angular-5
      // currentUser.reauthenticateWithCredential(credentials).
    } catch (error) {
      return error;
    }
  }

  async signOut() {
    try {
      const currentUser = this.angularFireAuth.auth.currentUser;
      if (currentUser) {
        const loggedOut = await this.angularFireAuth.auth.signOut();
        if (this.angularFireAuth.auth.currentUser) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  }


}
