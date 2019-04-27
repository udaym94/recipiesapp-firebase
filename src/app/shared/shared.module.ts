import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    // FormGroup,
    // FormControl,
    // FormBuilder
  ],
  exports: [
    PageNotFoundComponent,
    MaterialModule,
    ReactiveFormsModule,
    // FormGroup,
    // FormControl,
    // FormBuilder
  ]
})
export class SharedModule { }
