import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstaLogInComponent } from './insta-log-in/insta-log-in.component';

const routes: Routes = [
  { path : "", component : InstaLogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
