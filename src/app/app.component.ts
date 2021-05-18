import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project';
  constructor(public auth:AuthServiceService){}
  ngOnInit(){
    let data=JSON.parse(sessionStorage.getItem("UserData"));
    if(data){
      this.auth.signedIn=true
    }
  }
}
