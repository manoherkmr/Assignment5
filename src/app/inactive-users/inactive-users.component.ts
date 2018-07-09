import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServiceService } from '../services/users-service.service';
import { user } from '../models/model';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: user[];
  counter: number;
  constructor(private userservice: UsersServiceService) {

  }
  ngOnInit(): void {
    this.userservice.loadInActiveUsers().subscribe((data) => {
      
      this.users = data;
    })
   
  }
  onSetToActive(data: user) {
    this.userservice.AddActiveUsers(data);
  }
}
