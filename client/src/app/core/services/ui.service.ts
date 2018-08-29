import {
  Injectable,
  Inject,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA
}              from '@angular/material';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel
}              from '@angular/router';
import {Store} from '@ngrx/store';
import {
  Subscription
}              from 'rxjs';
import {
  State,
  action
}              from '../store';



@Injectable()
export class UiService implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private router: Router,
              private store: Store<State>,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private dialogData: any) {}


  ngOnInit() {
    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.store.dispatch(new action.ui.RoutingProgress(true));
      }

      if (event instanceof NavigationEnd ||
        (event instanceof NavigationError) ||
        (event instanceof NavigationCancel)) {

        this.store.dispatch(new action.ui.RoutingProgress(false));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
