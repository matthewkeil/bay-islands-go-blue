

import {NgModule}      from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule}   from '@ngrx/store';

import {reducers}    from './reducers';
import {effects}       from './effects';


@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  exports: [StoreModule]
})
export class StorageModule {
}
