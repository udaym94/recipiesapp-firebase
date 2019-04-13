import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRecipieComponent } from './pages/list-recipie/list-recipie.component';
import { CreateRecipieComponent } from './pages/create-recipie/create-recipie.component';

const routes: Routes = [
  {
    path: '',
    component: ListRecipieComponent
  },
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListRecipieComponent
      },
      {
        path: 'create',
        component: CreateRecipieComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipieRoutingModule { }
