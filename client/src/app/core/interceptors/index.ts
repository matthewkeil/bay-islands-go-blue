import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor}   from './auth.interceptor';
import {ErrorInterceptor}  from './error.interceptor';



export const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor
  }
];
