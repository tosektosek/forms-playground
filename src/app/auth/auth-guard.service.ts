import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivateChild')

    // FAJNE
    this.router.navigate([route.parent.routeConfig.path]);
    return false;
  }

  constructor(public auth: AuthService, public router: Router) {}

  canActivate() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canLoad() {
    return false;
  }
}
