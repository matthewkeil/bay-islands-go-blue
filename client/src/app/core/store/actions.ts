

import * as fromUi from './ui';
import * as fromAuth from './auth';

export type IActions = fromUi.UiActions | fromAuth.AuthActions;

export const action = {
  ui: fromUi.uiActions,
  auth: fromAuth.authActions
};

export const ACTIONS = {
  UI: fromUi.UI_ACTIONS,
  AUTH: fromAuth.AUTH_ACTIONS
};
