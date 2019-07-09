import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    console.log('canActivate from role guard')
    const expectedRole = route.data.expectedRole+'';

    const token = localStorage.getItem('token');

    const tokenPayload = token ? decode(token) : '';

    if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
