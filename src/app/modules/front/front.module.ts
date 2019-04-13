import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';

import { FrontRoutingModule } from './front.routing';

@NgModule({
  declarations: [
    HomeComponent,
    RecipieListComponent,
    RecipieDetailComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class FrontModule { }
