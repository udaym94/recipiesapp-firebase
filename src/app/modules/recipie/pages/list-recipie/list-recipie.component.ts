import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface RecipeDoc {
  title: string;
  description: string;
  image: string;
  uid: string;
}

@Component({
  selector: 'app-list-recipie',
  templateUrl: './list-recipie.component.html',
  styleUrls: ['./list-recipie.component.sass']
})

export class ListRecipieComponent implements OnInit {
  // recipeDoc: Observable<RecipeDoc[]>;
  recipeDoc: any;
  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  async ngOnInit() {
    const uid = localStorage.getItem('uid');
    const recipeDocs = await this.angularFirestore.collection('recipes', ref => ref.where( 'uid', '==', uid )).valueChanges();
    recipeDocs.subscribe( doc => {
      console.log('28', doc );
      this.recipeDoc = doc;
    });
  }

}
