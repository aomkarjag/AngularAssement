import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule  } from '@angular/material/card';
import {MatGridListModule}  from '@angular/material/grid-list';  
import {UsersDetailComponent} from "./users-detail/users-detail.component"
import {UserAlbumsComponent} from "./user-albums/user-albums.component"
import {UserPostsComponent} from "./user-posts/user-posts.component"

const productRoutes: Routes = [
  {
    path: '', 
    component: UsersComponent,
    children: [
      { path: ':id/detail', component: UsersDetailComponent },
      { path: ':id/albums', component: UserAlbumsComponent },
      { path: ':id/posts', component: UserPostsComponent },
    ]
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
  declarations: [UsersComponent,UsersDetailComponent,UserAlbumsComponent,UserPostsComponent]
})
export class UsersRoutingModule { }
