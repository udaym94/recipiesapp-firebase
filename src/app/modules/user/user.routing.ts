import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';

const routes: Routes = [
{
  path: '',
  component: DashboardComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'change-password',
  component: ChangePasswordComponent
},
{
  path: 'edit-profile',
  component: EditProfileComponent
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
