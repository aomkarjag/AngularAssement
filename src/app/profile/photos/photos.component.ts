import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:any=[];
  albumId:number;
  constructor(public auth:AuthServiceService,public route:ActivatedRoute) {
   }

  async ngOnInit() {
    this.albumId=await Number(this.route.snapshot.paramMap.get("albumId"));
    this.auth.albumPhotos=this.auth.albumPhotos.filter(async photo=>{return await photo.albumId!==this.albumId})
  }

}
