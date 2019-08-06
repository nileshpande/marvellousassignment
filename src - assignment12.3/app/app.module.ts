import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {StringyService} from './stringy.service';
import {ArithmaticService} from './arithmatic.service';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmaticService,StringyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
