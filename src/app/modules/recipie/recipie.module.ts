import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ListRecipieComponent } from './pages/list-recipie/list-recipie.component';
import { CreateRecipieComponent } from './pages/create-recipie/create-recipie.component';

import { RecipieRoutingModule } from './recipie.routing';

@NgModule({
  declarations: [
    ListRecipieComponent,
    CreateRecipieComponent
  ],
  imports: [
    CommonModule,
    RecipieRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class RecipieModule { }
