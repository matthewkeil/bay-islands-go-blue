

import {ActionReducerMap} from '@ngrx/store';

import {State} from './';
import * as fromUi from './ui';
import * as fromAuth from './auth';


export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducers,
  auth: fromAuth.authReducers
};
