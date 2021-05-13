import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const productRoutes: Routes = [
  {
    path: '', 
    component: LoginComponent,
    // children: [
    //   { path: ':id/detail', component: ProductDetailComponent },
    //   { path:'', component: ProductListComponent,  }
    // ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent ]
})
export class LoginRoutingModule { }
