import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule} from  './login-routing.module';

@NgModule({
  imports: [
    FormsModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class LoginModule { }
