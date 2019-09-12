import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyrevPipe } from './myrev.pipe';
import { MyaddPipe } from './myadd.pipe';
import { MymultPipe } from './mymult.pipe';
import { MycheckPipe } from './mycheck.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyrevPipe,
    MyaddPipe,
    MymultPipe,
    MycheckPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
