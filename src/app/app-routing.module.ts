import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { CustomDropdownComponent } from './dropdown-wrapper/custom-dropdown/custom-dropdown.component';
import { DropdownWrapperComponent } from './dropdown-wrapper/dropdown-wrapper.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { RoleGuardService } from './auth/role-guard.service';
import { DeactivationGuardService } from './deactivation-guard.service';
import { TestResolveComponent } from './test-resolve/test-resolve.component';
import { MyResolverService } from './my-resolver.service';
import { TestHttpInterceptorComponent } from './test-http-interceptor/test-http-interceptor.component';
import { ThisComponent } from './this/this.component';
import { HooksComponent } from './hooks/hooks.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { InPipe1Component } from './rxjs/in-pipe1/in-pipe1.component';

const routes: Routes = [
  { path: '', redirectTo: '/forms', pathMatch: 'full' },
  {
    path: 'forms',
    component: MyFormComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'cva',
    component: DropdownWrapperComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [DeactivationGuardService],
  },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [RoleGuardService],
    // canActivateChild: [AuthGuardService],
    data: { expectedRole: 'admin' },
    children: [{ path: 'test', component: MyFormComponent }],
  },
  {
    path: 'lazy-test',
    loadChildren: './lazy-test/lazy-test.module#LazyTestModule',
    // canLoad: [AuthGuardService],
    // canActivate: [AuthGuardService]
  },
  {
    path: 'resolve',
    component: TestResolveComponent,
    resolve: { data: MyResolverService },
  },
  {
    path: 'interceptor',
    component: TestHttpInterceptorComponent,
  },
  {
    path: 'this',
    component: ThisComponent,
  },
  { path: 'hooks', component: HooksComponent },
  { path: 'async', component: AsyncAwaitComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'rxjs-pipes1', component: InPipe1Component },
  { path: '**', redirectTo: '/forms' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
