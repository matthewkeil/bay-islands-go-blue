import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface SignupData {
  email: string;
  password: string;
}

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class SignupDialogComponent {

  signupForm: FormGroup;
  workforceTableDirection: 'row' | 'column' = 'column';

  orgTypes = [
    'Tours',
    'Ground Transport',
    'Diving',
    'Hospitality',
    'Aquatic Transport',
    'Food and Beverage',
    'Tour Guide',
    'Other'
  ];

  constructor(private fb: FormBuilder) {
    this.signupForm = fb.group({
      org: fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        typeIfOther: [''],
        website: ['']
      }),
      address: fb.group({
        line1: ['', Validators.required],
        line2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        code: ['', Validators.required],
        country: ['', Validators.required]
      }),
      contact: fb.group({
        phone: ['', Validators.required]
      }),
      workforce: fb.group({
        residentFullMen: ['', [Validators.required, Validators.maxLength(3)]],
        residentPartMen: ['', [Validators.required, Validators.maxLength(3)]],
        residentFullWomen: ['', [Validators.required, Validators.maxLength(3)]],
        residentPartWomen: ['', [Validators.required, Validators.maxLength(3)]],
        residentFullChildren: ['', [Validators.required, Validators.maxLength(3)]],
        residentPartChildren: ['', [Validators.required, Validators.maxLength(3)]],
        visitorFullMen: ['', [Validators.required, Validators.maxLength(3)]],
        visitorPartMen: ['', [Validators.required, Validators.maxLength(3)]],
        visitorFullWomen: ['', [Validators.required, Validators.maxLength(3)]],
        visitorPartWomen: ['', [Validators.required, Validators.maxLength(3)]],
        visitorFullChildren: ['', [Validators.required, Validators.maxLength(3)]],
        visitorPartChildren: ['', [Validators.required, Validators.maxLength(3)]],
        numWithWater: ['', [Validators.required, Validators.maxLength(3)]],
        numOver2Dollars: ['', [Validators.required, Validators.maxLength(3)]]
      }),
      account: fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        repeatPassword: ['', Validators.required]
      })
    });
  }
}
