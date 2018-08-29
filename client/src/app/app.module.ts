import {NgModule}          from '@angular/core';
import {AppComponent}      from './app.component';
import {LoginComponent}    from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {
  PROVIDERS,
  CoreModule
}                          from './core/core.module';
import {HomeComponent}     from './home/home.component';
import {SharedModule}      from './shared/shared.module';



@NgModule({
  imports     : [,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  providers   : [PROVIDERS],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
