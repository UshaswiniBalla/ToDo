import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("before route guard");
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      console.log("Inside route guard");
      return true;
    }
    //route user to login page
    this.router.navigate(['login']);

    return false;
  }
}
