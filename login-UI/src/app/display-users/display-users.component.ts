import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { UserDetails } from '../user-details'
 
@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  users : UserDetails[];

  constructor(private loginService:LoginServiceService) { }

  
  ngOnInit() {
    this.loginService
    .getUserDetails()
    .subscribe((data:UserDetails[]) => {
      this.users = data;
    });
  }

}
