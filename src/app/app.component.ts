import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './services/users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.userservice.getCounter().subscribe((data) => {

      this.counter = data;
    });
  }
  counter: number;
  constructor(private userservice: UsersServiceService) {

  }
}
