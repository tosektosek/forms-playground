import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs';
// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({ providedIn: 'root' })
export class DeactivationGuardService implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(component);
    console.log(currentRoute);
    console.log(currentState);


    return component.form.valid;
  }
}
