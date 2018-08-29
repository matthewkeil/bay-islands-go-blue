import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';



export interface UiState {

  routingProgress: boolean;

  navOpen: boolean;

  errors: Error[];
}

export const defaultUiState: UiState = {
  navOpen : false,
  routingProgress: false,
  errors  : []
};

