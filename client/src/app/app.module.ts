import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {LoginComponent}    from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';

import {
  CoreModule,
  services
}                      from './core';
import {HomeComponent} from './home';
import {SharedModule}  from './shared';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports     : [
    CoreModule,
    SharedModule
  ],
  exports     : [
    CoreModule,
    SharedModule
  ],
  providers   : [...services],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
