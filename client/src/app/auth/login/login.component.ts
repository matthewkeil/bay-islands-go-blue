import {
  Component,
  OnInit
}                                           from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router}                             from '@angular/router';
import {AuthService}                        from '../../core/services/auth.service';
import {
  State,
  action
}                                           from '../../core/store/';
import {Store}                              from '@ngrx/store';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private store: Store<State>) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  submit() {
    this.auth.login(this.loginForm.value).subscribe(
      user => this.store.dispatch(new action.auth.LogIn(user)),
      err => { throw err },
      () => this.router.navigateByUrl('/'));
  }
}
