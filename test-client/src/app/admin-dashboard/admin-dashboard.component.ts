import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  message = 'Loading...';

  constructor(
    private authService:AuthService,
    private router:Router,
    private adminService:AdminService
  ) { }

  ngOnInit() {
    this.getMessage();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  getMessage(){
    this.adminService.getMessage().subscribe( respose => this.message = respose['message'] )
  }

}
