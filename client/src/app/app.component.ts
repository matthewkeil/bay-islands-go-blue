import {Component} from '@angular/core';
import {Router}    from '@angular/router';
import {State}     from '@core/store';
import {Store}     from '@ngrx/store';



@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {

  navLinks = [
    {name: 'Login', icon: 'input', url: '/auth/login'},
    {name: 'Register', icon: 'person_add', url: '/auth/register'}
  ];

  constructor(private router: Router,
              private store: Store<State>) {
  }

  goHome() {
    console.log('goHome()');
    this.router.navigateByUrl('/');
  }


}
