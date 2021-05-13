import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule  } from '@angular/material/card';
import {MatGridListModule}  from '@angular/material/grid-list';  

const productRoutes: Routes = [
  {
    path: '', 
    component: UsersComponent,
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
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [UsersComponent ]
})
export class UsersRoutingModule { }
