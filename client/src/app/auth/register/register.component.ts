import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer,
  ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
}                    from '@angular/forms';
import {Router}      from '@angular/router';
import {AuthService} from '@core/services';



export interface RegistrationData {
  email: string;
  password: string;
}

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
              private elRef: ElementRef) {
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
      token => {

      });
  }
}
