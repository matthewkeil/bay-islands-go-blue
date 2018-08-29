import {
  createFeatureSelector,
  createSelector
}                from '@ngrx/store';
import {UiState} from './ui.state';



const getUiState = createFeatureSelector<UiState>('ui');
export const navOpen$ = createSelector(getUiState, (state: UiState) => state.navOpen);
export const routingProgress$ = createSelector(getUiState, (state: UiState) => state.routingProgress);
