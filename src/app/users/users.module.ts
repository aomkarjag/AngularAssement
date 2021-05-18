import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    HeaderModule
  ],
  providers:[],
  declarations: [],
})
export class UsersModule { }
