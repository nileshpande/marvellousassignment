import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnoComponent } from './techno/techno.component';
import { BookComponent } from './book/book.component';
import { WrongComponent } from './wrong/wrong.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnoComponent,
    BookComponent,
    WrongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
