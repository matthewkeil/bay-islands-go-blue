import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
}                     from '@angular/common/http';
import {Injectable}   from '@angular/core';
import {Observable}   from 'rxjs';
import {ErrorService} from '../services/error.service';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private error: ErrorService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let _message: string;

    if (request instanceof HttpErrorResponse) {
      _message = (request as HttpErrorResponse).message;
    }

    if (request.body.hasOwnProperty('error')) {
      _message = request.body.error.message;
    }

    if (_message) this.error.display(_message);
    else return next.handle(request.clone());
  }
}
