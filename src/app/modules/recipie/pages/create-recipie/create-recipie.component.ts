import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipie',
  templateUrl: './create-recipie.component.html',
  styleUrls: ['./create-recipie.component.sass']
})
export class CreateRecipieComponent implements OnInit {
  addRecipeForm: FormGroup;
  image: File = null;
  imageDesination = 'recipes-cover/';
  imageURL: Observable<string | null>;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseStorage: AngularFireStorage,
    private angularFirestore: AngularFirestore,
    private matSnackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.addRecipeForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }


  // Get Form Values
  get title() {
    return this.addRecipeForm.get('title');
  }

  get description() {
    return this.addRecipeForm.get('description');
  }

  async changeImage(event) {
    this.image = event.target.files[0];
  }

  async storeRecipe (addRecipeForm) {
    try {
      const uniqueId = new Date();
      console.log('52', uniqueId);
      const fd = new FormData();
      if (this.image !== null) {
        fd.append('image', this.image, this.image.name);
      }
      const fileLoactionWithName = `${this.imageDesination}/${this.image.name}`;
      const imageRef = this.firebaseStorage.ref(fileLoactionWithName);
      const uploadFile = await this.firebaseStorage.upload(fileLoactionWithName, this.image);
      imageRef.getDownloadURL().subscribe( async(url) => {
        this.imageURL = url;
        // Save in firestore
        const uid = localStorage.getItem('uid');
        const saveRecipe = await this.angularFirestore.doc(`recipes/${uniqueId}`).set({
          title: addRecipeForm.value.title,
          description: addRecipeForm.value.description,
          image: this.imageURL,
          uid });
        this.matSnackbar.open('Recipe Saved Successfully');
        this.router.navigate(['user/dashboard']);
      });
    } catch (e) {
      console.log('73', e);
      this.matSnackbar.open('Something went Wrong');
    }
  }

}
