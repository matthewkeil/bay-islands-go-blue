import {Routes}                from '@angular/router';
import {
  LoginComponent,
  RegisterComponent
}                              from '@app/auth';
import {HomeComponent}         from '@app/home';
import {PageNotFoundComponent} from '@shared/page-not-found';


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
