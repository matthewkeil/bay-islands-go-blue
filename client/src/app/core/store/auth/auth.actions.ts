import {Action} from '@ngrx/store';
import {User}   from '../../../users';

export enum AUTH_ACTIONS {
  LOG_IN       = '[ui] LOG_IN',
  LOG_OUT      = '[ui] LOG_OUT'
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
}

export type AuthActions =
  authActions.LogIn |
  authActions.LogOut;
