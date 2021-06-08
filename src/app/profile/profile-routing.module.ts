import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileAlbumComponent } from './profile-album/profile-album.component';
import { ProfilePostsComponent } from './profile-posts/profile-posts.component';
import {PostsComponent} from "./posts/posts.component"
import { MatCardModule  } from '@angular/material/card';
import {MatGridListModule}  from '@angular/material/grid-list';  
import { HeaderModule } from '../header/header.module';
import { PhotosComponent } from './photos/photos.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  {path:"",component:ProfileComponent},
  {path:":id/detail",component:ProfileDetailsComponent},
  {path:":id/album",component:ProfileAlbumComponent},
  {path:":id/posts",component:ProfilePostsComponent},
  {path:":albumId/photos",component:PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule, MatCardModule,
    MatGridListModule,HeaderModule, MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,],
  exports: [RouterModule],
  declarations:[ProfileComponent,ProfileDetailsComponent,ProfilePostsComponent,ProfileAlbumComponent,PostsComponent,PhotosComponent]
})
export class ProfileRoutingModule { }
