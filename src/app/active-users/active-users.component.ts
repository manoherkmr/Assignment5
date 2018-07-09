import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from '../models/model';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: user[];
  counter: number;
  constructor(private userservice: UsersServiceService) {

  }
  ngOnInit(): void {
    this.userservice.loadActiveUser().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
    
  }
  onSetToInactive(data: user) {
    this.userservice.AddInActiveUsers(data);
  }

}
