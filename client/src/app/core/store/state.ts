


import * as fromAuth from './auth';
import * as fromUi from './ui';


export interface State {
  ui: fromUi.UiState;
  auth: fromAuth.AuthState;
}
