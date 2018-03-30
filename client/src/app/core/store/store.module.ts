

import {NgModule}    from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {reducers}    from './reducers';


@NgModule({
  imports: [
    StoreModule.forRoot(reducers)
  ],
  exports: [StoreModule],
})
export class StorageModule {
}
