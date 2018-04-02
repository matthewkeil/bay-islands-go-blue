import {CommonModule}            from '@angular/common';
import {HttpClientModule}        from '@angular/common/http';
import {NgModule}                from '@angular/core';
import {ReactiveFormsModule}     from '@angular/forms';
import {BrowserModule}           from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RoutingModule} from './routing/routing.module';
import {StorageModule} from './store/store.module';

// import {DiagnosticsModule} from '@app/diagnostics/diagnostics.module';
// import {UsersModule} from '@app/users';


const CORE_IMPORTS = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  ReactiveFormsModule,
  RoutingModule,
  StorageModule
];

@NgModule({
  imports: [
    ...CORE_IMPORTS
    // lazy-loaded module declarations
    // DiagnosticsModule,
    // UsersModule
  ],
  exports: [
    ...CORE_IMPORTS
  ]
})
export class CoreModule {
}
