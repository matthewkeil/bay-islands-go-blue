

import { NgModule }   from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminGuard}   from './admin.guard';
import {AuthGuard}    from './auth.guard';

import {routes} from './routes';


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // AdminGuard,
    AuthGuard]
})
export class RoutingModule { }
