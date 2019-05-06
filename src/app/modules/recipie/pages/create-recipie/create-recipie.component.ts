import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-recipie',
  templateUrl: './create-recipie.component.html',
  styleUrls: ['./create-recipie.component.sass']
})
export class CreateRecipieComponent implements OnInit {
  addRecipeForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.addRecipeForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'image': ['', Validators.required],
    });
  }


  // Get Form Values
  get title() {
    return this.addRecipeForm.get('title');
  }

  get description() {
    return this.addRecipeForm.get('description');
  }

  get image() {
    return this.addRecipeForm.get('image');
  }

}
