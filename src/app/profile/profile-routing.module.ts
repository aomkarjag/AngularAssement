import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileAlbumComponent } from './profile-album/profile-album.component';
import { ProfilePostsComponent } from './profile-posts/profile-posts.component';
import {PostsComponent} from "./posts/posts.component"
import { MatCardModule  } from '@angular/material/card';
import {MatGridListModule}  from '@angular/material/grid-list';  

const routes: Routes = [
  {path:"",component:ProfileComponent},
  {path:":id/detail",component:ProfileDetailsComponent},
  {path:":id/album",component:ProfileAlbumComponent},
  {path:":id/posts",component:ProfilePostsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule, MatCardModule,
    MatGridListModule],
  exports: [RouterModule],
  declarations:[ProfileComponent,ProfileDetailsComponent,ProfilePostsComponent,ProfileAlbumComponent,PostsComponent]
})
export class ProfileRoutingModule { }
