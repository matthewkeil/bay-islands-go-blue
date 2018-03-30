

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {RoutingModule} from './routing';
import {StorageModule} from './store';

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
    ...CORE_IMPORTS,
    // lazy-loaded module declarations
    // DiagnosticsModule,
    // UsersModule
  ],
  exports: [
    ...CORE_IMPORTS,
  ]
})
export class CoreModule {
}
