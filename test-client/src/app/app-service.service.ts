import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  token:any;
  constructor(private http: HttpClient) { 
    this.getToken();
  }

  getToken(){
    this.http.post( "http://localhost:8000/api-token-auth/", { username:'admin', password:"admin" })
      .subscribe( (data:any) => {
        localStorage.setItem('token', data['token']);
      });
  }

  getFeature() {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Token '+ localStorage.getItem('token')
   });  

    return this.http.get( "http://localhost:8000/feature/",  { headers: reqHeader });
  }

}
