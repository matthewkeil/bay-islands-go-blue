import {
  Component,
  ViewChild
}                   from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Router}     from '@angular/router';
import {Store}      from '@ngrx/store';
import {User}       from './users';

import {
  State,
  action
} from './core';



@Component({
  selector   : 'app-component',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {

  loggedIn: boolean;

  user: User;

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
      url : `/users/${this.user.id}`
    }]
  };

  @ViewChild('sidenav') private sidenav: MatSidenav;

  constructor(private router: Router,
              private store: Store<State>) {

    this.store.subscribe(state => {
      this.loggedIn = state.auth.loggedIn;
      this.user     = state.auth.user;
    });

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
