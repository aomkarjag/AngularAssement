import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule  } from '@angular/material/card';
import {MatGridListModule}  from '@angular/material/grid-list';  
import { HeaderModule } from '../header/header.module';


const productRoutes: Routes = [
  {
    path: '', 
    component: UsersComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    HeaderModule
  ],
  declarations: [UsersComponent]
})
export class UsersRoutingModule { }
