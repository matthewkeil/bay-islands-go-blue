import {
  Component,
  OnInit
}                   from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
}                   from '@angular/forms';
import {Router}     from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';

import {AuthService} from '../../core/services';



@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {
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
    this.auth.login(this.loginForm.value)
      .catch(err => {
        this.router.navigateByUrl('/auth/login');
        return Observable.throw(err);
      })
      .subscribe(() => this.router.navigateByUrl('/'))
  }
}
