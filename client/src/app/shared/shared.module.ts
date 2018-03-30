import {NgModule}              from '@angular/core';
import {AutofocusDirective}    from '@shared/autofocus.directive';
import {MaterialModule}        from '@shared/material/material.module';
import {ToolbarComponent}      from '@shared/toolbar';
import {PageNotFoundComponent} from '@shared/page-not-found';


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
