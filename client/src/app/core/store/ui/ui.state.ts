export interface UiState {

  navOpen: boolean;

  errors: Error[];
}

export const defaultUiState: UiState = {
  navOpen : false,
  errors  : []
};

export const uiSelectors = {
  navOpen : (state: UiState) => state.navOpen,
  errors  : (state: UiState) => state.errors
};
