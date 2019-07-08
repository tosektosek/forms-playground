import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { CustomDropdownComponent } from './dropdown-wrapper/custom-dropdown/custom-dropdown.component';
import { DropdownWrapperComponent } from './dropdown-wrapper/dropdown-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: '/forms', pathMatch: 'full' },
  { path: 'forms', component: MyFormComponent },
  { path: 'cva', component: DropdownWrapperComponent },
  { path: '**', redirectTo: '/forms' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
