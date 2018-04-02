import {
  UiState,
  defaultUiState
} from './ui.state';
import {UiActions, UI_ACTIONS, uiActions} from './ui.actions';



function toggleNav(state: UiState, action: uiActions.ToggleNav) {
  return {...state, navOpen: action.payload};
}

function handleError(state: UiState, action: uiActions.HandleError) {
  return {...state, errors: [...state.errors, action.payload]}
}

export function uiReducers(state: UiState = defaultUiState, action: UiActions) {
  switch (action.type) {
    case UI_ACTIONS.HANDLE_ERROR:
      return handleError(state, action as uiActions.HandleError);
    case UI_ACTIONS.TOGGLE_NAV:
      return toggleNav(state, action as uiActions.ToggleNav);
    default:
      return state;
  }
}

