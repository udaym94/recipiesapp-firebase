import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// import 'rxjs/add/operator/map';

interface UserDoc {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  constructor( private angularFirestore: AngularFirestore, private angularFireAuth: AngularFireAuth ) { }

  async getUserDetailsByUID(uid: string) {
    try {
      const res = await this.angularFirestore.collection('users').doc(uid).get().toPromise();
      this.user = res.data();
      // this.angularFirestore.collection('users').doc(uid).get().subscribe(res => {
      //   this.user = res.data();
      //   return this.user;
      // });
      return this.user;
    } catch (e) {
      throw e;
    }
  }

  async updateUserDetailsByUID(uid: string, data: UserDoc) {
    try {
      const res = await this.angularFirestore.collection('users').doc(uid).set(data);
      // this.user = res.data();
      this.user = await this.getUserDetailsByUID(uid);
      // this.angularFirestore.collection('users').doc(uid).get().subscribe(res => {
      //   this.user = res.data();
      //   return this.user;
      // });
      return this.user;
    } catch (e) {
      throw e;
    }
  }

  async isLoggedIn() {
    if (localStorage.getItem('uid')) {
      return true;
    } else {
      return false;
    }
  }

}
