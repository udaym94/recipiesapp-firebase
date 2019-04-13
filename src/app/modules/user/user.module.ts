import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { UserRoutingModule } from './user.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ChangePasswordComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [
    PageNotFoundComponent,
    SharedModule
  ]
})
export class UserModule { }
