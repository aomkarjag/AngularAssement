import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthServiceService} from "../../services/auth-service.service"
@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent implements OnInit {
  posts$:any;
  constructor(public route:ActivatedRoute,public auth:AuthServiceService,
    ) {
    this.posts$=this.auth.getPosts()

   }
   post:any
  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.post = await this.auth.getPosts().toPromise();
    })
  }

}
