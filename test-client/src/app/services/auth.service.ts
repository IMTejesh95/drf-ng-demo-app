import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as moment from "moment";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private currentUserSubject: BehaviorSubject<User>;
  private currentUserToken: string;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { }

  public getCurrentUserToken(): string {
    return this.cookieService.get('token');
  }

  public getCurrentUserRole(): string {
    return this.cookieService.get('role');
  }

  authenticate(username, password) {
    return this.http.post<any>(`/api/user-auth/`, { username, password })
      .pipe(map(user => {
        var expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 10);
        this.cookieService.set('token', user.token, expiresAt, null, null, false, 'Lax')
        this.cookieService.set('username', user.username, expiresAt, null, null, false, 'Lax')
        this.cookieService.set('role', user.role, expiresAt, null, null, false, 'Lax')
        return user;
      }));
  }

  logout(){
    this.cookieService.deleteAll();
  }

}
