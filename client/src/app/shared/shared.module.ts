import {NgModule}              from '@angular/core';
import {AutofocusDirective}    from './autofocus.directive';
import {MaterialModule}        from './material/material.module';
import {ToolbarComponent}      from './toolbar';
import {PageNotFoundComponent} from './page-not-found';


@NgModule({
  declarations: [
    AutofocusDirective,
    ToolbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    AutofocusDirective,
    MaterialModule,
    ToolbarComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule {
}
