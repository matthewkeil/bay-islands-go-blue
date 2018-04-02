
import {
  createFeatureSelector,
  createSelector
}                      from '@ngrx/store';

import {uiSelectors, UiState} from './ui';
import {AuthState, authSelectors} from './auth';


const getUiState = createFeatureSelector<UiState>('ui');
export const navOpen$ = createSelector(getUiState, uiSelectors.navOpen);


const getAuthState = createFeatureSelector<AuthState>('auth');
export const loggedIn$ = createSelector(getAuthState, authSelectors.loggedIn);
export const token$ = createSelector(getAuthState, authSelectors.token);
export const user$ = createSelector(getAuthState, authSelectors.user);
