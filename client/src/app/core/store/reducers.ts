

import {ActionReducerMap} from '@ngrx/store';

import {State} from './';
import * as fromUi from './ui';


export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducers
};
