import {
  ErrorHandler,
  Injectable,
  Injector
}                                      from '@angular/core';
import {MatSnackBar}                   from '@angular/material';
import {ErrorHandler as ERROR_HANDLER} from '@angular/core/esm2015/core.js';



@Injectable()
export class ErrorService implements ErrorHandler {

private handler: ErrorHandler;
  private snackbar: MatSnackBar;

  constructor(private injector: Injector) {
    this.handler = new ERROR_HANDLER;
  }

  display(message: string) {
    return void this._open(message);
  }

  handleError(err: any) {
    this._open(err.message);
    return void this.handler.handleError(err);
  }

  private _open(message) {
    if (!this.snackbar) this.snackbar = this.injector.get(MatSnackBar);
    return this.snackbar.open(message, 'ok', {
      announcementMessage: message,
      duration           : 3000
    });
  }
}
