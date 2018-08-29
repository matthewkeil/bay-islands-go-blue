import {ActionReducerMap} from '@ngrx/store';

import * as fromAuth from './auth';
import * as fromUi   from './ui';

export interface State {
  ui: fromUi.UiState;
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  ui  : fromUi.uiReducers,
  auth: fromAuth.authReducers
};

export type IAction = fromUi.UiActions | fromAuth.AuthActions;

export const action = {
  ui  : fromUi.uiActions,
  auth: fromAuth.authActions
};

export const ACTION = {
  UI  : fromUi.UI_ACTIONS,
  AUTH: fromAuth.AUTH_ACTIONS
};

export const effects = [];

