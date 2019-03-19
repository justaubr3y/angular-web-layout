import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondfoldComponent } from './secondfold/secondfold.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'secondfold',
    component: SecondfoldComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
