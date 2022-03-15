import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpheaderAddingInterceptor implements HttpInterceptor {

  constructor() {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
              let tokenstr= sessionStorage.getItem('token');
                request= request.clone({
                          setHeaders:{Authorization:`Bearer ${tokenstr}`,
                                       contentType: "application/json; charset=utf-8"}
                 })

              return next.handle(request).pipe(
              retry(0),
              catchError(this.errorHandel)
               );

       }

errorHandel(error:HttpErrorResponse){
      alert(error.message);
      return throwError(error.message||'Server Error'); 
  }
}
