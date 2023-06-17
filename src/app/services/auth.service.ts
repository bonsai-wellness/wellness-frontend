// auth.service.ts
// Archivo que define si el usuario acctual ya esta autenticado
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, public router: Router) {}

  tokenPayload: any;

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    // Check whether the token is expired and return
    // true or false
    if (token && token !== "undefined") {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  public isAdminAuthenticated(): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = "T";
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    if (token && token != "undefined") {
      this.tokenPayload = decode(token);
    }
    if (
      !this.isAuthenticated() || 
      this.tokenPayload.is_admin !== expectedRole
    ) {
      return false;
    }
    return true;
  }

}
