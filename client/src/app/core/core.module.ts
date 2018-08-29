import {HttpClientModule}        from '@angular/common/http';
import {
  NgModule,
  ErrorHandler
}                                from '@angular/core';
import {BrowserModule}           from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule}            from '../shared/shared.module';
import {RoutingModule}           from './routing/routing.module';
import {
  SERVICES,
  INTERCEPTORS
}                                from './services';
import {ErrorService}            from './services/error.service';
import {StorageModule}           from './store/storage.module';
import {PageNotFoundComponent}   from './ui/page-not-found/page-not-found.component';
import {ToolbarComponent}        from './ui/toolbar/toolbar.component';


export const PROVIDERS = [
  {
    provide : ErrorHandler,
    useClass: ErrorService
  },
  SERVICES,
  INTERCEPTORS
];

const CORE_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RoutingModule,
  StorageModule
];

@NgModule({
  imports: [
    CORE_MODULES,
    SharedModule
  ],
  exports: [
    CORE_MODULES,
    PageNotFoundComponent,
    ToolbarComponent
  ]
})
export class CoreModule {}
