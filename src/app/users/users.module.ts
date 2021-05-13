import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  providers:[],
})
export class UsersModule { }
