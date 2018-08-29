import {Action} from '@ngrx/store';
import {User}   from '../../../users';



export enum AUTH_ACTIONS {
  LOG_IN               = '[auth] LOG_IN',
  LOG_OUT              = '[auth] LOG_OUT',
  SET_LOGIN_REDIRECT   = '[auth] SET_LOGIN_REDIRECT',
  SET_ADMIN_REDIRECT   = '[auth] SET_ADMIN_REDIRECT',
  CLEAR_LOGIN_REDIRECT = '[auth] CLEAR_LOGIN_REDIRECT',
  CLEAR_ADMIN_REDIRECT = '[auth] CLEAR_ADMIN_REDIRECT',
}

export namespace authActions {
  export class LogIn implements Action {
    readonly type = AUTH_ACTIONS.LOG_IN;

    constructor(public payload: User) {
    }
  }

  export class LogOut implements Action {
    readonly type = AUTH_ACTIONS.LOG_OUT;
  }

  export class SetLoginRedirect implements Action {
    readonly type = AUTH_ACTIONS.SET_LOGIN_REDIRECT;

    constructor(public payload: string) {
    }
  }

  export class ClearLoginRedirect implements Action {
    readonly type = AUTH_ACTIONS.CLEAR_LOGIN_REDIRECT;
  }

  export class SetAdminRedirect implements Action {
    readonly type = AUTH_ACTIONS.SET_ADMIN_REDIRECT;

    constructor(public payload: string) {
    }
  }

  export class ClearAdminRedirect implements Action {
    readonly type = AUTH_ACTIONS.CLEAR_ADMIN_REDIRECT;
  }
}

export type AuthActions =
  authActions.LogIn |
  authActions.LogOut |
  authActions.SetLoginRedirect |
  authActions.ClearLoginRedirect |
  authActions.SetAdminRedirect |
  authActions.ClearAdminRedirect;
