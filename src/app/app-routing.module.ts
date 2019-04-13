import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    loadChildren: './modules/front/front.module#FrontModule'
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule' // login,register,forgot-password
  },
  {
    path: 'recipe',
    loadChildren: './modules/recipie/recipie.module#RecipieModule' // user recipie-list,create-recipie
  },
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule' // user dashboard, edit-profile,change-password
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
