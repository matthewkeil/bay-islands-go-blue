

import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {routes} from './routes';


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }