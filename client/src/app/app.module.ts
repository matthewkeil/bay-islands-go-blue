import {NgModule} from '@angular/core';
import {
  LoginComponent,
  RegisterComponent
}                 from '@app/auth';

import {CoreModule}    from '@app/core';
import {HomeComponent} from '@app/home';
import {SharedModule}  from '@app/shared';

import {services} from '@core/services';

import {AppComponent} from './app.component';



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
