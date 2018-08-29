import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';



@Component({
  selector   : 'form-address',
  templateUrl: './form-address.component.html',
  styleUrls  : ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  get value() { return this.addressForm.value; }

  get valid() { return this.addressForm.valid; }

  get invalid() { return this.addressForm.invalid; }

  get pending() { return this.addressForm.pending; }

  get dirty() { return this.addressForm.dirty; }

  get pristine() { return this.addressForm.pristine; }

  get touched() { return this.addressForm.touched; }

  get untouched() { return this.addressForm.untouched; }

  get valueChanges() { return this.addressForm.valueChanges; }

  ngOnInit() {
    this.addressForm = this.fb.group({
      name : ['', Validators.required],
      line1: ['', Validators.required],
      line2: [''],
      city : ['', Validators.required],
      state: ['', Validators.required],
      zip  : ['', Validators.required]
    });
  }

}
