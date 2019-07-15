import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Here from http interceptor')
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${'xd'}`
      }
    });

    return next.handle(request)
    .pipe(catchError((e: any) => {
      console.log('interceptor found an error');
      console.log(e)
      return of(e);
    }));
  }
}
