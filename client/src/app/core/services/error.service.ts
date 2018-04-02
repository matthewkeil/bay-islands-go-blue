import {
  ErrorHandler,
  Injectable,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Injectable()
export class ErrorService implements ErrorHandler {

  @ViewChild('app-component') app: ViewContainerRef;

  constructor(private snackbar: MatSnackBar) {
  }

  handleError(err: any) {
    this.snackbar.open(err.message, 'ok', {
      viewContainerRef: this.app,
      announcementMessage: err.message
    });
  }
}
