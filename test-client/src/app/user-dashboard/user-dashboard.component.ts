import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  message = 'Loading...';

  constructor(
    private authService:AuthService,
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.getMessage();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }


  getMessage(){
    this.userService.getMessage().subscribe( respose => this.message = respose['message'] )
  }



}
