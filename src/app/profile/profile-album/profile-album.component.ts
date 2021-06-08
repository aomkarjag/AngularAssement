import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthServiceService} from "../../services/auth-service.service"

@Component({
  selector: 'app-profile-album',
  templateUrl: './profile-album.component.html',
  styleUrls: ['./profile-album.component.css']
})
export class ProfileAlbumComponent implements OnInit {
  albums$:any
  name:String=''
  id: number;
  constructor(public auth:AuthServiceService,public router:Router,public route:ActivatedRoute) { 
    this.albums$=this.auth.getAlbums()
    this.name=this.auth.usersData.forEach(async element => {
      return await  this.auth.userId===element.userId?element.name:''
    });
  }

  ngOnInit() {
    this.id=Number(this.route.snapshot.paramMap.get("id"));
    

  }

  showPhotos(albumId:number){
    this.auth.getPhotos(albumId)
    this.router.navigate([`profile/${albumId}/photos`])
  }

}
