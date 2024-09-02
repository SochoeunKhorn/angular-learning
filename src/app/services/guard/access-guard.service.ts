import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from 'rxjs';
import {AuthenticationResponse} from "../../models/authentication-response";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AccessGuardService implements CanActivate {

  constructor(private route:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const userStored = localStorage.getItem('user');
    if (userStored){
      const authResponse:AuthenticationResponse = JSON.parse(userStored);
      const token = authResponse.object?.access_token;
      if (token){
        const jwtHelper = new JwtHelperService();
        const jwtNonExpired = !jwtHelper.isTokenExpired(token);
        if (jwtNonExpired){
          return true;
        }
      }
    }
    this.route.navigate(['login'])
    return false;
    }
}
