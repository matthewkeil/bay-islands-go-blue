import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorHandler}      from '@angular/core';
import {AuthInterceptor}   from '../interceptors/auth.interceptor';
import {AuthService}       from './auth.service';
import {UiService}         from './ui.service';



export {
  AuthService,
  UiService
};

export const SERVICES = [
  UiService,
  AuthService
];

export const INTERCEPTORS = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true
  }
];
