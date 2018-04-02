

import {Injectable}   from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import {Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import {ErrorService} from './error.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const body = {...(event.body ? event.body : {})};
          const keys = Object.keys(body);
          if (keys.length === 1 && (keys[0] === 'error'))
            throw (<any>body).error;
        }
        return event;
      })
  }
}
