import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import {  Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={};
  users:any=[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  disabledSubmit:boolean=true;
  displayErrorMessage:boolean=true;
  constructor(public auth:AuthServiceService,public router:Router) { }
  
  async ngOnInit() {
    await this.auth.checkUserAuthentication().subscribe(res=>{
      this.auth.usersData=res
      this.users=res
    })
  }

  async onSubmit(){
    console.log(this.model.email,this.model.password,this.users)

    if(this.model.email && this.model.password){
      const result=await this.auth.checkUserExistence(this.model.email,this.model.password,this.users);
      this.displayErrorMessage=result
      this.auth.signedIn=result
      this.auth.showSearchBar=result
      result?this.router.navigate(['users']):''
    }
  }
  onChange(event){
    if(this.model.email && this.model.password){
      this.disabledSubmit=false;
    }else if((this.model.email && !this.model.password) || (!this.model.email && this.model.password) ){
      this.disabledSubmit=true
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
