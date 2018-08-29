import {
  Injectable,
  OnDestroy
}                     from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import {Store}        from '@ngrx/store';
import {Subscription} from 'rxjs';
import {
  State,
  auth$,
  action
} from '../store';
import {AuthState}    from '../store/auth';



@Injectable()
export class AuthGuard implements CanActivateChild, OnDestroy {

  private auth: AuthState;

  private subscription: Subscription;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.subscription = this.store.select(auth$).subscribe(auth => this.auth = auth);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.auth);

    if (this.auth.loggedIn) {

      if (route.url[0].path === 'auth') {
        this.router.navigateByUrl(state.url);
        return false;
      }

      return true;
    } else {

      this.store.dispatch(new action.auth.SetLoginRedirect(route.url.toString()));
      this.router.navigateByUrl('/auth/login');

      return false;
    }
  }
}
