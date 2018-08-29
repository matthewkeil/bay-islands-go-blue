import {CommonModule}          from '@angular/common';
import {NgModule}              from '@angular/core';
import {PageNotFoundComponent} from '../core/ui/page-not-found/page-not-found.component';
import {ToolbarComponent}      from '../core/ui/toolbar/toolbar.component';
import {DIRECTIVES}            from './directives';



@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    ...DIRECTIVES
  ]
})
export class SharedModule {}
