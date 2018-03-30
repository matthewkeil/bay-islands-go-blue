import {Action} from '@ngrx/store';

export enum UI_ACTIONS {
  TOGGLE_NAV = '[ui] TOGGLE_NAV'
}

export namespace uiActions {
  export class ToggleNav implements Action {
    readonly type = UI_ACTIONS.TOGGLE_NAV;
  }
}

export type UiActions = uiActions.ToggleNav;


