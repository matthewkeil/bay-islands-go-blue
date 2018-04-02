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


export function authReducers(state: AuthState = defaultAuthState, action: AuthActions) {
  switch (action.type) {
    case AUTH_ACTIONS.LOG_IN:
      return logIn(state, action as authActions.LogIn);
    case AUTH_ACTIONS.LOG_OUT:
      return logOut(state, action as authActions.LogOut);
    default:
      return state;
  }
}
