


export {State, action, ACTIONS} from './store';
export * from './core.module';

import {HTTP_INTERCEPTORS}   from '@angular/common/http';
import {ErrorHandler}        from '@angular/core';
import {AuthInterceptor}     from './services/auth.interceptor';
import {AuthService}         from './services/auth.service';
import {ErrorService}        from './services/error.service';
import {UiService}           from './services/ui.service';

export {AuthService, UiService};

export const services = [
  AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor
  },
  ErrorService,
  UiService,
  {
    provide: ErrorHandler,
    useClass: ErrorService
  }
];
