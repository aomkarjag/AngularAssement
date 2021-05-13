import { Component, OnInit,ViewChild, AfterViewInit,OnChanges } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import {  Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit,OnChanges  {
  showSearchBar:boolean=false;
  showSearchBarOptions:boolean=false;
  searchText:string='';
  selected :string;
  isLoggedIn:boolean=false;
menuItems: Array<{text: string, elementRef: MatMenu}> = [
    {text: "Tabledriven.Item1", elementRef: null },
    {text: "Tabledriven.Item2", elementRef: null},
  ];
  constructor(public router:Router,public auth:AuthServiceService) {
    let userData=JSON.parse(sessionStorage.getItem("UserData"))
    console.log(userData)

   }

  
   ngOnChanges() {
    let userData=JSON.parse(sessionStorage.getItem("UserData"))
    console.log(userData)
  }

   ngAfterViewInit(){
    let userData=JSON.parse(sessionStorage.getItem("UserData"))
    console.log(userData)
   }

  ngOnInit() {
    console.log(this.auth.signedIn)
    let userData=JSON.parse(sessionStorage.getItem("UserData"))
    console.log(userData)
    if(userData){
      this.isLoggedIn=true
    }

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
    console.log("heelo")
    sessionStorage.clear();
    this.auth.signedIn=false;
    this.router.navigate(["/"])
  }
}
