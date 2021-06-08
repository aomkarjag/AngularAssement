import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(public auth:AuthServiceService,public route:ActivatedRoute) { }
  id:number
  user:any=[]
  ngOnInit() {
    this.id=Number(this.route.snapshot.paramMap.get("id"));
    this.getUser(this.id);
  }

  getUser(id:number){
    this.user=this.auth.usersData.find(element=>element.id===id)
  }
}
