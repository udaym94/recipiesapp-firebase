import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

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
      this.angularFirestore.collection('users').doc(uid).get().subscribe(res => {
        console.log('27', res.data());
        this.user = res.data();
        // this.router.navigate(['user/dashboard']);
        console.log('16', this.user);
        return this.user;
      });
    } catch (e) {
      throw e;
    }
  }
}
