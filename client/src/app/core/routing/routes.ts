import {Routes}                from '@angular/router';
import {LoginComponent}        from '../../auth/login/login.component';
import {RegisterComponent}     from '../../auth/register/register.component';
import {HomeComponent}         from '../../home/home.component';
import {PageNotFoundComponent} from '../ui/page-not-found/page-not-found.component';
import {AuthGuard}             from './auth.guard';



export const routes: Routes = [
  {
    path: 'auth',
    canActivateChild: [AuthGuard],
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

// export const routes: Routes = [
//   {
//     path : '',
//     child: [
//       {
//         path: 'auth', children: [
//           {path: 'login', component: LoginComponent},
//           {path: 'register', component: RegisterComponent}
//         ]
//       },
//       {path: '', component: HomeComponent, pathMatch: 'full'},
//       {path: '**', component: PageNotFoundComponent}
//     ]
//   }
// ];
