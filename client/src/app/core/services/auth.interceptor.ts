import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
}                       from '@angular/common/http';
import {Injectable}     from '@angular/core';
import {Observable}     from 'rxjs';

import {AuthService}    from './auth.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.user$.value.token}`
      }
    }));
  }
}
