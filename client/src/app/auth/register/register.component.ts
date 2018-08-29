import {
  Component,
  OnInit
}                    from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
}                    from '@angular/forms';
import {Router}      from '@angular/router';
import {Store}       from '@ngrx/store';
import {Observable}  from 'rxjs';
import 'rxjs/add/operator/catch';

import {AuthService} from '../../core/services';
import {
  State
}                    from '../../core/store';



@Component({
  selector   : 'app-register',
  templateUrl: './register.component.html',
  styleUrls  : ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  private registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private store: Store<State>) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email   : ['', Validators.required],
      password: ['', Validators.required],
      addresses: []
    });
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  submit() {
    return this.auth.register(this.registrationForm.value)
      .catch(err => {
        this.router.navigateByUrl('/auth/login');
        return Observable.throw(err);
      })
      .subscribe(() => this.router.navigateByUrl('/'));
  }
}
