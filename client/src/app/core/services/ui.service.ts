import {Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Injectable()
export class UiService {

  constructor(private dialog: MatDialog,
              @Inject (MAT_DIALOG_DATA) private data: any) {

  }
}
