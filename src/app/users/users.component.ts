import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchText:String=''
  userData:any=[];
  constructor(public auth:AuthServiceService,public router:Router) { }

  async ngOnInit() {
    this.userData=await this.auth.showUsers()
  }


  searchBar(event){
    if(this.searchText===''){
      this.auth.usersData=this.userData;
    }
  }

  searchUser(){
    this.auth.filterUser(this.searchText.toUpperCase());
  }

  showDetails(id){
    this.router.navigate([`profile/${id}/detail`])
    this.auth.hideSearchbar(id)
  }



}
