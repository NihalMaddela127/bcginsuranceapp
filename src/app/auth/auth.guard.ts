import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router
  ) {
  }

  canActivate() {
    // always returning true for testing app
    return true;
    // if (!!localStorage.getItem('userDetails')) {
    //     return true;
    // } else {
    //     this.router.navigate(['/authorize']);
    //     return false;
    // }
  }

}
