

import {NgModule}      from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule}   from '@ngrx/store';

import {reducers, effects}    from './store';


@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    // EffectsModule.forRoot(effects)
  ],
  exports: [StoreModule]
})
export class StorageModule {
}
