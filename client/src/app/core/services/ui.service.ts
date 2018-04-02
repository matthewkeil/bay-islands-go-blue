import {
  Injectable,
  Inject
}              from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA
}              from '@angular/material';
import {State} from '../';
import {Store} from '@ngrx/store';



@Injectable()
export class UiService {
  constructor(private store: Store<State>,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private dialogData: any) {
  }



}
