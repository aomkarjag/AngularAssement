import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileAlbumComponent } from './profile-album/profile-album.component';
import { ProfilePostsComponent } from './profile-posts/profile-posts.component';

const routes: Routes = [
  {path:"",component:ProfileComponent},
  {path:":id/detail",component:ProfileDetailsComponent},
  {path:":id/album",component:ProfileAlbumComponent},
  {path:":id/posts",component:ProfilePostsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule],
  exports: [RouterModule],
  declarations:[ProfileComponent,ProfileDetailsComponent]
})
export class ProfileRoutingModule { }
