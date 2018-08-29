import {HttpClient} from '@angular/common/http';
import {
  Injectable,
  OnDestroy,
  OnInit
}                   from '@angular/core';
import {Store}      from '@ngrx/store';
import {
  Subscription,
  BehaviorSubject,
  Observable
}                   from 'rxjs';
import 'rxjs/add/operator/map';

import {User} from '../../users';

import {
  State,
  action
}              from '../store';
import {user$} from '../store/select';



export interface LoginData {
  email: string;

  password: string;
}

export interface RegistrationData {
  email: string;

  password: string;
}


@Injectable()
export class AuthService implements OnInit, OnDestroy {

  user$: BehaviorSubject<User>;

  private subscription: Subscription;

  private url = 'http://localhost:3001';

  constructor(private http: HttpClient,
              private store: Store<State>) {

    this.user$        = new BehaviorSubject<undefined | User>(undefined);
    this.subscription = this.store.select(user$).subscribe(this.user$);
  }

  ngOnInit() {
    let user = window.localStorage
      ? <User>JSON.parse(window.localStorage.getItem('user'))
      : undefined;

    if (user) this.store.dispatch(new action.auth.LogIn(user));
  }

  ngOnDestroy() {
    this.user$.complete();
    this.subscription.unsubscribe();
  }

  login(data: LoginData): Observable<boolean> {
    return this.http.post<User>(this.url + '/auth/login', data)
      .map(user => {
        if (user) {
          this.store.dispatch(new action.auth.LogIn(user));
          return true;
        }
        throw new Error('Unknown login error');
      });
  }

  register(data: RegistrationData): Observable<boolean> {
    return this.http.post<User>(this.url + '/auth/register', data)
      .map(user => {
        if (user) {
          this.store.dispatch(new action.auth.LogIn(user));
          return true;
        }
        throw new Error('Unknown login error');
      });
  }
}
