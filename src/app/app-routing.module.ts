import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:"",loadChildren:()=> import("../app/login/login.module").then(m=>m.LoginModule)},
  {path:"users",loadChildren:()=>import("../app/users/users.module").then(m=>m.UsersModule),canActivate:[AuthGuard]},
  {path:"profile",loadChildren:()=>import("../app/profile/profile.module").then(m=>m.ProfileModule),canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
