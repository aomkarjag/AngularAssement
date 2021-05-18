import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userId:number
  usersData:any=[]
  signedIn:boolean=false;
  errorMessage:string="";
  showSearchBar:boolean=false;
  loggedInUser=[];
  showNavbarList:boolean=false
  loggedInUserInitials:string=''
  constructor(public http:HttpClient) { }


handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  } 
  checkUserAuthentication(){
    return  this.http.get("https://jsonplaceholder.typicode.com/users").pipe(retry(3),catchError(this.handleError))
  }

  checkUserExistence(email,password,users){
    for(let i=0;i<users.length;i++){
      if(email===users[i].email){
        if(password==="Pass@123"){
          window.sessionStorage.setItem("UserData",JSON.stringify(users[i]));
          console.log(users[i].name.split(" "))
          this.loggedInUserInitials=users[i].name.split(" ")[0][0] + users[i].name.split(" ")[1][0];
          console.log(this.loggedInUserInitials);
          return true;
        }else{
          this.errorMessage="Invalid! password";
          return false;
        }
      }
    };
    this.errorMessage="Invalid Email Address";
    return false
  }

  showUsers(){
    let loggedInUserData=JSON.parse(sessionStorage.getItem("UserData"));
    console.log(loggedInUserData.id)
    this.usersData=this.usersData.filter(element=>{return element.id!==loggedInUserData.id});
    return this.usersData
  }

  filterUser(searchInput){
    let data=[];
    for(let i=0;i<this.usersData.length;i++){
      if(this.usersData[i].email.toUpperCase()==searchInput || this.usersData[i].name.toUpperCase()==searchInput || this.usersData[i].company.name.toUpperCase()==searchInput){
        console.log(this.usersData[i]);
        data.push(this.usersData[i]);
      }
    }
    this.usersData=data;
  }

  hideSearchbar(id:number){
    this.userId=id;
    this.showSearchBar=false;
    this.showNavbarList=true
  }

   getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(retry(3))
  }

  getAlbums(){
    return this.http.get("https://jsonplaceholder.typicode.com/albums").pipe(retry(3))
  }
}
