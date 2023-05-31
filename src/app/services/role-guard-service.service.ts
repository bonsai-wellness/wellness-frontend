import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(public auth: AuthService, public router: Router) {}

  tokenPayload: any;

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = "T";
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    if (token && token != "undefined") {
      this.tokenPayload = decode(token);
    }
    if (
      !this.auth.isAuthenticated() || 
      this.tokenPayload.is_admin !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
