
import {Action}    from '@ngrx/store';


export enum UI_ACTIONS {
  ROUTING_PROGRESS = '[ui] ROUTING_PROGRESS',
  HANDLE_ERROR = '[ui] HANDLE_ERROR',
  TOGGLE_NAV   = '[ui] TOGGLE_NAV'
}

export namespace uiActions {
  export class HandleError implements Action {
    readonly type = UI_ACTIONS.HANDLE_ERROR;
    constructor(public payload: Error) {
    }
  }

  export class ToggleNav implements Action {
    readonly type = UI_ACTIONS.TOGGLE_NAV;
    constructor(public payload: boolean) {}
  }

  export class RoutingProgress implements Action {
    readonly type = UI_ACTIONS.ROUTING_PROGRESS;
    constructor(public payload: boolean) {}
  }
}

export type UiActions = uiActions.RoutingProgress |
  uiActions.HandleError |
  uiActions.ToggleNav;


