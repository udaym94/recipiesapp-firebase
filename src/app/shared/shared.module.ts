import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './material.module';
import { FirebaseModule } from './firebase.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FirebaseModule
  ],
  exports: [
    PageNotFoundComponent,
    MaterialModule,
    ReactiveFormsModule,
    FirebaseModule
  ]
})
export class SharedModule { }
