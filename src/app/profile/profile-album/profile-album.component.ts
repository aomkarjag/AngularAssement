import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service"

@Component({
  selector: 'app-profile-album',
  templateUrl: './profile-album.component.html',
  styleUrls: ['./profile-album.component.css']
})
export class ProfileAlbumComponent implements OnInit {
  albums$:any
  name:String=''
  constructor(public auth:AuthServiceService) { 
    this.albums$=this.auth.getAlbums()
    this.name=this.auth.usersData.forEach(async element => {
      return await  this.auth.userId===element.userId?element.name:''
    });
  }

  ngOnInit() {
 

  }

}
