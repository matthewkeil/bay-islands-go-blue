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
import {UiService}    from '../services';
import {
  State,
  auth$,
  action
} from '../store';
import {AuthState}    from '../store/auth';



@Injectable()
export class AdminGuard implements CanActivateChild, OnDestroy {

  private auth: AuthState;

  private subscription: Subscription;

  constructor(private store: Store<State>, private router: Router, private ui: UiService) {
    this.subscription = this.store.select(auth$).subscribe(auth => this.auth = auth);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.user && this.auth.user.admin) {
      return true;
    } else {

      if (this.auth.user){
        this.router.navigate(['/auth', {id: this.auth.user.id}]);
        throw new Error('Admin authorization required');
      }

      this.store.dispatch(new action.auth.SetAdminRedirect(route.url.toString()));
      this.router.navigateByUrl('/auth/login');

      return false;
    }
  }
}
