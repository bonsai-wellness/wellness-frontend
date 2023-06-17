// auth-guard.service.ts
// En caso de que el usuario no este autenticaado se dirige al logiin
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login'])
      return false;
    }
    // this.router.navigate(['home'])
    return true;
  }

}
