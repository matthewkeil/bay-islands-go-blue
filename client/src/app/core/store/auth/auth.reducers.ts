import {User} from '../../../users';
import {
  AuthState,
  defaultAuthState
}             from './auth.state';
import {
  authActions,
  AuthActions,
  AUTH_ACTIONS
}             from './auth.actions';



function logIn(state: AuthState, action: authActions.LogIn) {
  if (window.localStorage) window.localStorage.setItem('user', JSON.stringify(action.payload));
  return {...state, user: action.payload};
}

function logOut(state: AuthState, action: authActions.LogOut) {
  if (window.localStorage) window.localStorage.setItem('user', JSON.stringify(undefined));
  return {...state, user: undefined};
}

function setLoginRedirect(state: AuthState, action: authActions.SetLoginRedirect) {
  return {...state, redirect: {...state.redirect, login: action.payload}}
}

function clearLoginRedirect(state: AuthState, action: authActions.ClearLoginRedirect) {
  return {...state, redirect: {...state.redirect, login: undefined}}
}

function setAdminRedirect(state: AuthState, action: authActions.SetAdminRedirect) {
  return {...state, redirect: {...state.redirect, admin: action.payload}}
}

function clearAdminRedirect(state: AuthState, action: authActions.ClearAdminRedirect) {
  return {...state, redirect: {...state.redirect, admin: undefined}}
}

export function authReducers(state: AuthState = defaultAuthState, action: AuthActions) {
  switch (action.type) {
    case AUTH_ACTIONS.LOG_IN:
      return logIn(state, action as authActions.LogIn);
    case AUTH_ACTIONS.LOG_OUT:
      return logOut(state, action as authActions.LogOut);
    case AUTH_ACTIONS.SET_LOGIN_REDIRECT:
      return setLoginRedirect(state, action as authActions.SetLoginRedirect);
    case AUTH_ACTIONS.CLEAR_LOGIN_REDIRECT:
      return clearLoginRedirect(state, action as authActions.ClearLoginRedirect);
    case AUTH_ACTIONS.SET_ADMIN_REDIRECT:
      return setAdminRedirect(state, action as authActions.SetAdminRedirect);
    case AUTH_ACTIONS.CLEAR_ADMIN_REDIRECT:
      return clearAdminRedirect(state, action as authActions.ClearAdminRedirect);
    default:
      return state;
  }
}
