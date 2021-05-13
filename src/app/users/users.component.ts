import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchText:String=''
  userData:any=[];
  constructor(public auth:AuthServiceService) { }

  async ngOnInit() {
    this.userData=await this.auth.showUsers()
  }


  searchBar(event){
    if(this.searchText===''){
      console.log("heelo");
      this.auth.usersData=this.userData;
    }
  }

  searchUser(){
    console.log(this.searchText);
    this.auth.filterUser(this.searchText.toUpperCase());
  }



}
