import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { DisplayUsersComponent } from './display-users/display-users.component';


const routes: Routes = [
  { path: 'userRegister', component:UserRegisterComponent },
  { path: 'showusers', component:DisplayUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
