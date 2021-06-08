import { Component, OnInit,ViewChild, Output,EventEmitter } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import {  Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  multipleUserData=[]
  @Output() searchValue=new EventEmitter()
  showSearchBar:boolean=false;
  showSearchBarOptions:boolean=false;
  searchText:string;
  selected :string;
  isLoggedIn:boolean=false;
menuItems: Array<{text: string, elementRef: MatMenu}> = [
    {text: "Tabledriven.Item1", elementRef: null },
    {text: "Tabledriven.Item2", elementRef: null},
  ];
  constructor(public router:Router,public auth:AuthServiceService,public route:ActivatedRoute) {
    let userData=JSON.parse(sessionStorage.getItem("UserData"))
   }

  ngOnInit() {
    this.multipleUserData=this.auth.usersData;
    let userData=JSON.parse(sessionStorage.getItem("UserData"))
    if(userData){
      this.isLoggedIn=true
    }
    let index=this.route.snapshot.paramMap.get("id");

  }

  @ViewChild('submenu')
  set subMenu(value: MatMenu)  {
    this.menuItems[1].elementRef = value;
  }

  select(pText :string)
  {
    this.selected = pText;
  }

  navigationFunction(event){
    switch(event.target.name){
      case "back":
      this.auth.showNavbarList=false
      this.auth.showSearchBar=true
      this.router.navigate(["users"])
      break;
      case "details":
      this.router.navigate([`profile/${this.auth.userId}/detail`])
      break;
      case "album":
      this.router.navigate([`profile/${this.auth.userId}/album`])
      break;
      case "posts":
      this.router.navigate([`profile/${this.auth.userId}/posts`])
      break;

    }

  }

  searchUser(){
    this.searchValue.emit(this.searchText)
  }

  searchBar(event){
    if(this.searchText===''){
      this.auth.usersData=this.multipleUserData;
    }
  }

  
}
