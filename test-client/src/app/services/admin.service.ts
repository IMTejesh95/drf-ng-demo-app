import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  getMessage() {
    return this.http.get(`/api/admin-message/`);
  }

}
