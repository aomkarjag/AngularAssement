import { Component, OnInit,ViewChild } from '@angular/core';
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
  showSearchBar:boolean=false;
  showSearchBarOptions:boolean=false;
  searchText:string='';
  selected :string;
  isLoggedIn:boolean=false;
menuItems: Array<{text: string, elementRef: MatMenu}> = [
    {text: "Tabledriven.Item1", elementRef: null },
    {text: "Tabledriven.Item2", elementRef: null},
  ];
  constructor(public router:Router,public auth:AuthServiceService,public route:ActivatedRoute) {
    let userData=JSON.parse(sessionStorage.getItem("UserData"))
    console.log(userData)

   }

  ngOnInit() {
    let userData=JSON.parse(sessionStorage.getItem("UserData"))
    if(userData){
      this.isLoggedIn=true
    }
    let index=this.route.snapshot.paramMap.get("id");
    console.log(index)

  }

  @ViewChild('submenu')
  set subMenu(value: MatMenu)  {
    this.menuItems[1].elementRef = value;
  }

  select(pText :string)
  {
    this.selected = pText;
  }

  Logout(){
    sessionStorage.clear();
    this.auth.signedIn=false;
    this.router.navigate(["/"])
  }
}
