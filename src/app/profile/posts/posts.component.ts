import { Component, OnInit,Input } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() post;

  constructor(public auth:AuthServiceService) { }

  ngOnInit() {
  }

}
