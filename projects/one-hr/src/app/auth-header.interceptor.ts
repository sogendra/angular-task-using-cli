/**
 * This intercepter is use to add dummy suthentication token into the headder of request.
 */
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer token'
            }
        });

        return next.handle(request);
    }
}