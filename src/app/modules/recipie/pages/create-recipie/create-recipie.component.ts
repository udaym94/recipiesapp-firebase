import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

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
    private firebaseStorage: AngularFireStorage
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

  // get image() {
  //   return this.addRecipeForm.get('image');
  // }

  async changeImage(event) {
    this.image = event.target.files[0];
    console.log(this.image);
  }

  async storeRecipe (addRecipeForm) {
    const fd = new FormData();
    if (this.image !== null) {
      fd.append('image', this.image, this.image.name);
    }
    const fileLoactionWithName = `${this.imageDesination}/${this.image.name}`;
    const imageRef = this.firebaseStorage.ref(fileLoactionWithName);
    const uploadFile = await this.firebaseStorage.upload(fileLoactionWithName, this.image);
    this.imageURL = imageRef.getDownloadURL();
    console.log(uploadFile, this.imageURL);
    fd.append('title', addRecipeForm.value.title);
    fd.append('description', addRecipeForm.value.description);
  }

}
