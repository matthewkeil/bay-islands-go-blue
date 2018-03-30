
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
  MatListModule
} from '@angular/material';

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
  // MatProgressSpinnerModule,
  // MatSnackBarModule
];


@NgModule({
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
