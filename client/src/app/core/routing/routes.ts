import {Routes}                from '@angular/router';
import {LoginComponent}    from '../../auth/login/login.component';
import {RegisterComponent} from '../../auth/register/register.component';
import {HomeComponent}         from '../../home';
import {PageNotFoundComponent} from '../../shared/page-not-found';


export const routes: Routes = [
  {
    path: 'auth', children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
