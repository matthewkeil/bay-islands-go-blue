import {UiState, defaultUiState} from './ui.state';
import {UiActions, UI_ACTIONS} from './ui.actions';


function toggleNav(state: UiState, action: UiActions) {
  return {...state, navOpen: !state.navOpen};
}

export function uiReducers(state: UiState = defaultUiState, action: UiActions) {
  switch (action.type) {
    case UI_ACTIONS.TOGGLE_NAV:
      return toggleNav(state, action);
    default:
      return state;
  }
}

