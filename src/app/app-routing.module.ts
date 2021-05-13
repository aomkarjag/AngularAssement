import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {path:"",loadChildren:()=> import("../app/login/login.module").then(m=>m.LoginModule)},
  {path:"users",loadChildren:()=>import("../app/users/users.module").then(m=>m.UsersModule),canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
