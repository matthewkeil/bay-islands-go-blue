import {
  Component,
  OnInit
}                                           from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router}                             from '@angular/router';
import {AuthService}                        from '@core/services';

export interface LoginData {
  email: string;
  password: string;
}

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
    this.auth.login(this.loginForm.value).subscribe(
      token => {

      });
  }
}
