import {
  createFeatureSelector,
  createSelector
}                  from '@ngrx/store';
import {AuthState} from './auth.state';


const getAuthState     = createFeatureSelector<AuthState>('auth');

export const auth$     = createSelector(getAuthState, (state: AuthState) => state);
export const loggedIn$ = createSelector(getAuthState, (state: AuthState) => state.loggedIn);
export const token$    = createSelector(getAuthState, (state: AuthState) => state.token);
export const user$     = createSelector(getAuthState, (state: AuthState) => state.user);
export const adminRedirect$ = createSelector(getAuthState, (state: AuthState) => state.redirect.admin);
export const loginRedirect$ = createSelector(getAuthState, (state: AuthState) => state.redirect.login);
