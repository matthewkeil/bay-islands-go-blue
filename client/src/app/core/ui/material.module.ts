
import { NgModule } from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatCardModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatListModule,
  MatProgressBarModule
} from '@angular/material';
import { FormAddressComponent } from './ui/forms/form-address/form-address.component';

const materialModules = [
  FlexLayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSnackBarModule
];


@NgModule({
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
  declarations: [FormAddressComponent]
})
export class MaterialModule { }
