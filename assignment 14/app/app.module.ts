import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MydirDirective } from './mydir.directive';
import { MyboldDirective } from './mybold.directive';

@NgModule({
  declarations: [
    AppComponent,
    MydirDirective,
    MyboldDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
