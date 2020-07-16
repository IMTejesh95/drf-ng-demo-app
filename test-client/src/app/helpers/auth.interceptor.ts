import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthorizeInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with  token if available
        let currentUserToken = this.authenticationService.getCurrentUserToken();
        if (currentUserToken) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Token ${currentUserToken}`
                }
            });
        }

        return next.handle(request);
    }
}