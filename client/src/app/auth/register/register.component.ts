import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
}                    from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
}                    from '@angular/forms';
import {Router}      from '@angular/router';
import {Store}       from '@ngrx/store';
import {AuthService} from '../../core/services/auth.service';
import {
  State,
  action
}                    from '../../core/store';



@Component({
  selector   : 'app-register',
  templateUrl: './register.component.html',
  styleUrls  : ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('email') email;

  private registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private store: Store<State>) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email   : ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  submit() {
    this.auth.register(this.registrationForm.value).subscribe(
      user => this.store.dispatch(new action.auth.LogIn(user)),
      err => { throw err },
      () => this.router.navigateByUrl('/'));
  }
}
