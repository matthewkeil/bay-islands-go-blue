import {createFeatureSelector} from '@ngrx/store';

import * as fromUi from './ui';


export const getUiState = createFeatureSelector<fromUi.UiState>('ui');

