import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/forms', pathMatch: 'full'},
  {path: 'forms', component: MyFormComponent},
  {path: '**', redirectTo: '/forms'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
