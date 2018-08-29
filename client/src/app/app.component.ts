import {
  Component,
  ViewChild
}                   from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Router}     from '@angular/router';
import {Store}      from '@ngrx/store';
import {Observable} from 'rxjs';

import {
  State,
  action,
  user$,
  loggedIn$,
  routingProgress$,
  auth$
}                  from './core/store';
import {AuthState} from './core/store/auth';
import {User}      from './users';



@Component({
  selector   : 'app-component',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {

  auth$: Observable<AuthState>;

  navLinks = {
    loggedOut: [{
      name: 'Login',
      icon: 'input',
      url : '/auth/login'
    }, {
      name: 'Register',
      icon: 'person_add',
      url : '/auth/register'
    }],
    loggedIn : [{
      name: 'Account',
      icon: 'settings',
      url : `/users`
    }]
  };

  @ViewChild('sidenav') private sidenav: MatSidenav;

  constructor(private router: Router,
              private store: Store<State>) {

    this.auth$ = this.store.select(auth$);
  }

  openedChange(navOpen: boolean): void {
    this.store.dispatch(new action.ui.ToggleNav(navOpen));
  }

  goHome() {
    console.log('goHome()');
    this.router.navigateByUrl('/');
  }

  logout() {
    this.store.dispatch(new action.auth.LogOut);
    this.sidenav.close();
  }

}
