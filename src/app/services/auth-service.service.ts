import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {  Router } from '@angular/router';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import config from "../../config/config.json";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  albumPhotos:any=[];
  userId:number
  usersData:any=[]
  signedIn:boolean=false;
  errorMessage:string="";
  showSearchBar:boolean=false;
  loggedInUser=[];
  showNavbarList:boolean=false
  loggedInUserInitials:string=''
  constructor(public http:HttpClient,public router:Router) { }


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
        if(password===config.password){
          window.sessionStorage.setItem("UserData",JSON.stringify(users[i]));
          this.loggedInUserInitials=users[i].name.split(" ")[0][0] + users[i].name.split(" ")[1][0];
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
    let loggedInUserData = JSON.parse(sessionStorage.getItem("UserData"));
    this.usersData = this.usersData.filter(element => { return element.id !== loggedInUserData.id });
    return this.usersData
  }

  filterUser(searchInput){
    let data = [];
    for (let i = 0; i < this.usersData.length; i++) {
      if (this.usersData[i].email.toUpperCase() == searchInput || this.usersData[i].name.toUpperCase() == searchInput || this.usersData[i].company.name.toUpperCase() == searchInput) {
        data.push(this.usersData[i]);
      }
    }
    this.usersData = data;
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

  async getPhotos(albumId){
    this.albumPhotos=await  this.http.get("https://jsonplaceholder.typicode.com/photos").pipe(retry(3)).toPromise()
    this.albumPhotos=await this.albumPhotos.filter( photo=>{return  photo.albumId===albumId})
  }

  Logout(){
    sessionStorage.clear();
    this.signedIn=false;
    this.router.navigate(["/"])
  }
}
