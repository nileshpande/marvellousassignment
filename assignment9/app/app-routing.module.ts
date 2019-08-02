import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnoComponent } from './techno/techno.component';
import { BookComponent } from './book/book.component';
import { WrongComponent } from './wrong/wrong.component';

const routes: Routes = [

  {path:"", component: TechnoComponent},
  
  {path:"techno", component: TechnoComponent},
  
  {path:"book", component: BookComponent},
  
  {path:"**", component: WrongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
