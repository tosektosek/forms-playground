import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LazyTestComponent } from './lazy-test.component';

const routes: Route[] = [
  {path: '', component: LazyTestComponent}
];

@NgModule({
  declarations: [LazyTestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LazyTestModule { }
