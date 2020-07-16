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
  }

  getToken(){
  }

  getFeature() {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Token '+ localStorage.getItem('token')
   });  

    return this.http.get( "/api/feature/",  { headers: reqHeader });
  }

}
