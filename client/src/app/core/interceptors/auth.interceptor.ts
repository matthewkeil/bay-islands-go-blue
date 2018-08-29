import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
}              from '@angular/common/http';
import {
  Injectable,
  OnInit,
  OnDestroy
}              from '@angular/core';
import {Store} from '@ngrx/store';
import {
  Observable,
  Subscription
}              from 'rxjs';
import {
  State,
  token$
}              from '../store/index';



@Injectable()
export class AuthInterceptor implements HttpInterceptor, OnInit, OnDestroy {

  private token: string;

  private subscription: Subscription;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.subscription = this.store.select(token$).subscribe(token => this.token = token);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return !!this.token
      ? next.handle(request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      }))
      : next.handle(request.clone());
  }
}
